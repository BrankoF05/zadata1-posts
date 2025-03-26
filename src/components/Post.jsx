import React, { useState, useEffect } from "react";
import { upperCase } from "../functions/upperCase";

function Post(props) {
  return (
    <div>
      <h1>{upperCase(props.post.title)}</h1>
      <h2>{upperCase(props.post.body)}</h2>
    </div>
  );
}

export default Post;
