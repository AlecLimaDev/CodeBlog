import * as Styles from "./style";

import PostDetail from "../../components/PostDetail";
import { Link } from "react-router-dom";
import { useSearch } from "./hooks/useSearch";

interface TPost {
  id: string;
}

const Search = () => {
 const { posts } = useSearch()

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
        {posts &&
          posts.map((post: TPost) => <PostDetail key={post.id} post={post} />)}
      </div>
    </Styles.SearchContainer>
  );
};

export default Search;
