import * as Styles from "./style";

import { Link } from "react-router-dom";

const PostDetail = ({ post }: any) => {
  return (
    <Styles.PostDetail>
      <img src={post.image} alt={post.image} />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className="createdBy">Autor: {post.createdBy}</p>
      <div className="tags">
        {post.tagsArray.map((tag: string) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </Styles.PostDetail>
  );
};

export default PostDetail;
