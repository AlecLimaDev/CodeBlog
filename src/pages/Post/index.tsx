import * as Styles from "./style";
import { usePost } from "./hooks/usePost";

const Post = () => {
const { post, loading } = usePost()

  return (
    <Styles.PostContainer>
      {loading && <p>Carregando post...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p>{post.body}</p>
          <h3>Esse post trata sobre: </h3>
          <div className="tags">
            {post.tagsArray.map((tag: string) => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
        </>
      )}
    </Styles.PostContainer>
  );
};

export default Post;
