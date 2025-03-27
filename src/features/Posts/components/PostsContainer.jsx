import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import { fetchPosts } from "../api/getPosts";
import { fetchUsers } from "../../../api/getUsers";
import Input from "./Input";

function PostsContainer() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("title");

  useEffect(() => {
    fetchPosts(setPosts, setLoading, setError);
    fetchUsers(setUsers, setLoading, setError);
  }, []);

  if (loading) {
    <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <Input setInput={setInput} setFilter={setFilter} />
      <Posts posts={posts} users={users} input={input} filter={filter} />
    </>
  );
}

export default PostsContainer;
