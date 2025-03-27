import "../../../styles/Post.css";
import { upperCase } from "../../../functions/upperCase";

function Post(props) {
  const post = props.post;
  const comments = props.comments;
  return (
    <div className="single-post">
      {post.title && <h1 className="post-title">{upperCase(post.title)}</h1>}
      {post.body && <h2 className="post-body">{upperCase(post.body)}</h2>}
      <h2>Comments:</h2>

      {comments &&
        comments
          .filter((comment) => comment.postId === props.post.id)
          .map(
            (comment) =>
              comment && (
                <div key={comment.id} className="comment">
                  <h4>{upperCase(comment.name)}</h4>
                  <p>{upperCase(comment.body)}</p>
                </div>
              )
          )}
    </div>
  );
}

export default Post;
