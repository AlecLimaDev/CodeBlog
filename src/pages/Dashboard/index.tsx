import * as Styles from "./style";

import { Link } from "react-router-dom";

import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Dashboard = () => {
  const { user }: any = useAuthValue();
  const uid = user.uid;

  const { documents: posts, loading }: any = useFetchDocuments(
    "posts",
    null,
    uid
  );

  const { deleteDocument } = useDeleteDocument("posts");

  if (loading) {
    return <p>Carregando...</p>;
  }

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
        posts.map((post: any) => (
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
