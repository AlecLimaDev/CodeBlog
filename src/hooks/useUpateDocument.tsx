import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { updateDoc, doc } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
};


const updateReducer = (state: any, action: { type: string; payload: any; }) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "UPDATED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useUpdateDocument = (docCollection: string) => {
  const [response, dispatch] = useReducer(updateReducer, initialState);

  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = (action: { type: string; payload?: any; }) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  const updateDocument = async (id: string, data: any) => {
    checkCancelBeforeDispatch({ type: "LOADING" });

    try {
      const docRef = await doc(db, docCollection, id);

      const updateDocument = await updateDoc(docRef, data);

      checkCancelBeforeDispatch({
        type: "UPDATED_DOC",
        payload: updateDocument,
      });
    } catch (error: any) {
      checkCancelBeforeDispatch({ type: "ERROR", payload: error.message });
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { updateDocument, response };
};
