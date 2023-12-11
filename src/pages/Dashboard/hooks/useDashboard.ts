import { useAuthValue } from "../../../context/AuthContext";
import { useDeleteDocument } from "../../../hooks/useDeleteDocument";
import { useFetchDocuments } from "../../../hooks/useFetchDocuments";

export const useDashboard = () => {
  const { user }: any = useAuthValue();
  const uid = user.uid;

  const { documents: posts, loading }: any = useFetchDocuments(
    "posts",
    null,
    uid
  );

  const { deleteDocument } = useDeleteDocument("posts");

  /*  if (loading) {
    return <p>Carregando...</p>;
  }
 */

  return {
    deleteDocument,
    posts,
    loading,
  };
};
