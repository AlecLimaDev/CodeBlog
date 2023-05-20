import * as Styles from "./Search.styled";

import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

import PostDetail from "../../components/PostDetail";
import { Link } from "react-router-dom";

const Search = () => {
  const query = useQuery();
  const search: any = query.get("q");
  const { documents: posts }: any = useFetchDocuments("posts", search);

  return (
    <Styles.SearchContainer>
      <h2>Search</h2>
      <div>
        {posts && posts.length === 0 && (
          <div className="noposts">
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/" className="btn btn-dark">
              Voltar
            </Link>
          </div>
        )}
        {posts && posts.map((post: any) => <PostDetail key={post.id} post={post} />)}
      </div>
    </Styles.SearchContainer>
  );
};

export default Search;
