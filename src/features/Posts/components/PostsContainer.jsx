import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import { fetchPosts } from "../api/getPosts";
import { fetchUsers } from "../../../api/getUsers";

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

  function filterInput(e) {
    setInput(e.target.value);
  }

  function filterChange(e) {
    setFilter(e.target.value);
  }

  if (loading) {
    <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <input name={filter} onChange={filterInput} />
      <select onChange={filterChange}>
        <option value="title">Filter by name</option>
        <option value="body">Filter by description</option>
      </select>
      <Posts posts={posts} users={users} input={input} filter={filter} />
    </>
  );
}

export default PostsContainer;
