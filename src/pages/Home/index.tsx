import * as Styles from "./style";
import { Link } from "react-router-dom";
import PostDetail from "../../components/PostDetail";
import Loading from "../../components/Loading";
import { useHome } from "./hooks/useHome";

interface TPost {
  id: string;
}

const Home = () => {
  const { handleSubmit, loading, posts, setQuery } = useHome();

  return (
    <Styles.Home>
      {loading && <Loading />}
      {!loading && (
        <>
          <h1>Feed</h1>
          <form onSubmit={handleSubmit} className="search_form">
            <input
              type="text"
              placeholder="Ou busque por tags..."
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-dark">
              Pesquisar
            </button>
          </form>
          <div>
            {posts &&
              posts.map((post: TPost) => (
                <PostDetail key={post.id} post={post} />
              ))}
            {posts && posts.length === 0 && (
              <div className="noposts">
                <p>Não foram encontrados posts no Feed</p>
                <Link to="/posts/create" className="btn">
                  Criar primeiro Post
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </Styles.Home>
  );
};

export default Home;
