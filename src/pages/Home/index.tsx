import * as Styles from "./Home.styled";

import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

import PostDetail from "../../components/PostDetail";

const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading }: any = useFetchDocuments("posts");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault(true);

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <Styles.Home>
      <h1>Feed</h1>
      <form onSubmit={handleSubmit} className="search_form">
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post: any) => <PostDetail key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <div className="noposts">
            <p>Não foram encontrados posts no Feed</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro Post
            </Link>
          </div>
        )}
      </div>
    </Styles.Home>
  );
};

export default Home;
