import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import { fetchPosts } from "../api/getPosts";
import { fetchUsers } from "../../../api/getUsers";
import SearchInput from "../../components/SearchInput";

function PostsContainer() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("title");
  const postPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchPosts(setPosts, setLoading, setError);
    fetchUsers(setUsers, setLoading, setError);
  }, []);

  function previousPage() {
    setCurrentPage(currentPage - 1);
    console.log("index" + index);
    console.log("page" + currentPage);
  }

  function nextPage() {
    setCurrentPage(currentPage + 1);
    console.log("index" + index);
    console.log("page" + currentPage);
  }
  useEffect(() => {
    setIndex(postPerPage * currentPage);
  }, [currentPage]);

  if (loading) {
    <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <SearchInput setInput={setInput} setFilter={setFilter} filter={filter} />
      <Posts
        posts={posts}
        users={users}
        input={input}
        filter={filter}
        index={index}
        postPerPage={postPerPage}
        previousPage={previousPage}
        nextPage={nextPage}
        currentPage={currentPage + 1}
      />
    </>
  );
}

export default PostsContainer;
