import { useFetchDocuments } from "../../../hooks/useFetchDocuments";
import { useQuery } from "../../../hooks/useQuery";

export const useSearch = () => {
  const query = useQuery();
  const search: any = query.get("q");
  const { documents: posts }: any = useFetchDocuments("posts", search);

  return {
    posts,
  };
};
