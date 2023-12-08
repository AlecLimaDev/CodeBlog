import * as Styles from "./style";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetail from "../../components/PostDetail";
import Loading from "../../components/Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const { documents: posts }: any = useFetchDocuments("posts"); 
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (query) {
      navigate(`/search?q=${query}`);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
              posts.map((post: any) => <PostDetail key={post.id} post={post} />)}
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
