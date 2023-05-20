

import * as Styles from "../PostDetail/PostDetail.styled"


import { Link } from "react-router-dom";

const PostDetail = ({ post }: any) => {
  return (
    <Styles.PostDetail>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className="createdBy">Autor: {post.createdBy}</p>
      <div className="tags">
        {post.tagsArray.map((tag: any) => (
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
