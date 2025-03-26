import React from "react";
import { Link } from "react-router-dom";
import { upperCase } from "../functions/upperCase";
import "../styles/Posts.css";

function Posts(props) {
  const posts = props.posts;
  const comments = props.comments;
  const users = props.users;

  return (
    <div className="posts">
      {posts ? (
        posts.map((post) => {
          const user = users.find((user) => user.id === post.userId);
          return (
            <div className="post-data" key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <h1 className="title">{upperCase(post.title)}</h1>
              </Link>
              <p className="author">{user && user.name}</p>
              <h2>Comments:</h2>
              {comments
                .filter((comment) => comment.postId === post.id)
                .map((comment) => (
                  <p key={comment.id}>{upperCase(comment.body)}</p>
                ))}
            </div>
          );
        })
      ) : (
        <h2>Nema pronađenih postova</h2>
      )}
    </div>
  );
}

export default Posts;
