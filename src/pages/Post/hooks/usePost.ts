import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../../hooks/useFetchDocument";

export const usePost = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  return {
    post,
    loading,
  };
};
