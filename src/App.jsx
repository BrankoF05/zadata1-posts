import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import PostsContainer from "./features/Posts/components/PostsContainer";
import PostContainer from "./features/Post/components/PostContainer";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const App = () => {
  let navigate = useNavigate();
  function handleClick() {
    console.log("klik");
    navigate("/");
  }

  return (
    <div>
      <nav>
        <h1 className="heading-title" onClick={handleClick}>
          Posts
        </h1>
      </nav>
      <Routes>
        <Route path="/" element={<PostsContainer />} />
        <Route path="/posts/:id" element={<PostContainer />} />
      </Routes>
    </div>
  );
};

export default App;
