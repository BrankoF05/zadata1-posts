import React from "react";
import { Link } from "react-router-dom";
import { upperCase } from "../../../functions/upperCase";
import "../../../styles/Posts.css";

function Posts(props) {
  const posts = props.posts;
  const input = props.input.toLowerCase();
  const filter = props.filter;
  const users = props.users;
  const index = props.index;
  const postPerPage = props.postPerPage;
  const currentPage = props.currentPage;

  return (
    <>
      <div className="posts">
        {posts ? (
          posts
            .slice(index, index + postPerPage)
            .filter((post) => post[filter].includes(input))
            .map((post) => {
              const user = users.find((user) => user.id === post.userId);
              return (
                <Link
                  className="post-data"
                  key={post.id}
                  to={`/posts/${post.id}`}
                >
                  <div>
                    <h1 className="title">{upperCase(post.title)}</h1>
                    <p className="author">{user && user.name}</p>
                    <h2>Description:</h2>
                    <p>{upperCase(post.body)}</p>
                  </div>
                </Link>
              );
            })
        ) : (
          <h2>Nema pronađenih postova</h2>
        )}
      </div>
      <button onClick={props.previousPage} disabled={currentPage <= 1}>
        Previous
      </button>
      <p>{currentPage}</p>
      <button onClick={props.nextPage} disabled={index >= posts.length}>
        Next
      </button>
    </>
  );
}

export default Posts;
