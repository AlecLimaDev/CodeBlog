import { useAuthValue } from "../../../context/AuthContext";
import { useDeleteDocument } from "../../../hooks/useDeleteDocument";
import { useFetchDocuments } from "../../../hooks/useFetchDocuments";

export const useDashboard = () => {
  const { user }: any = useAuthValue();
  const uid = user.uid;

  const { documents: posts }: any = useFetchDocuments(
    "posts",
    null,
    uid
  );

  const { deleteDocument } = useDeleteDocument("posts");

  return {
    posts,
    deleteDocument,
  };
};
