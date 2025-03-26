import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import { fetchPosts } from "../api/getPosts";
import { fetchComments } from "../api/getComments";
import { fetchUsers } from "../api/getUsers";

function PostsContainer() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchPosts(setPosts, setLoading, setError);
    fetchComments(setComments, setLoading, setError);
    fetchUsers(setUsers, setLoading, setError);
  }, []);

  if (loading) {
    <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return <Posts posts={posts} comments={comments} users={users} />;
}

export default PostsContainer;
