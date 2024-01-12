import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { updateDoc, doc } from "firebase/firestore";

interface UpdateState {
  loading: boolean | null;
  error: string | null;
}

const initialState: UpdateState = {
  loading: null,
  error: null,
};

const updateReducer = (
  state: UpdateState,
  action: { type: string; payload?: any }
): UpdateState => {
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

  const checkCancelBeforeDispatch = (action: {
    type: string;
    payload?: any;
  }) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  const updateDocument = async (id: string, data: null | any) => {
    checkCancelBeforeDispatch({ type: "LOADING" });

    try {
      const docRef = doc(db, docCollection, id);

      await updateDoc(docRef, data);

      checkCancelBeforeDispatch({
        type: "UPDATED_DOC",
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
