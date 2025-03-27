import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import { fetchPost } from "../api/getPost";
import { fetchComments } from "../api/getComments";

function PostContainer() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchPost(id, setPost, setLoading, setError);
    fetchComments(setComments, setLoading, setError);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <div>
      <Post post={post} comments={comments} />
    </div>
  );
}

export default PostContainer;
