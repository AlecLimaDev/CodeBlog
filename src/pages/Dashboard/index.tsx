import * as Styles from "./style";

import { Link } from "react-router-dom";

import { useDashboard } from "./hooks/useDashboard";


interface tPost {
  id: string; 
  title: string;
}

const Dashboard = () => {
  const { deleteDocument, posts } = useDashboard();

  return (
    <Styles.Dashboard>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <Styles.NoPosts>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </Styles.NoPosts>
      ) : (
        <Styles.PostHeader>
          <span>Título</span>
          <span>Ações</span>
        </Styles.PostHeader>
      )}

      {posts &&
        posts.map((post: tPost) => (
          <Styles.PostRow key={post.id}>
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
          </Styles.PostRow>
        ))}
    </Styles.Dashboard>
  );
};

export default Dashboard;
