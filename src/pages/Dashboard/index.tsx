import * as S from "./style";

import { Link } from "react-router-dom";

import { useDashboard } from "./hooks/useDashboard";

interface tPost {
  id: string;
  title: string;
}

const Dashboard = () => {
  const { deleteDocument, posts } = useDashboard();

  return (
    <S.Dashboard>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <S.NoPosts>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </S.NoPosts>
      ) : (
        <S.PostHeader>
          <span>Título</span>
          <span>Ações</span>
        </S.PostHeader>
      )}

      {posts &&
        posts.map((post: tPost) => (
          <S.PostRow key={post.id}>
            <p>{post.title}</p>
            <div className="actions">
              <Link to={`/posts/${post.id}`} className="btn btn-outline">
                Ver
              </Link>
              <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">
                Editar
              </Link>
              <button
                onClick={() => deleteDocument(post.id)}
                className="btn btn-danger"
              >
                Excluir
              </button>
            </div>
          </S.PostRow>
        ))}
    </S.Dashboard>
  );
};

export default Dashboard;
