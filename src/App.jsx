import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import PostsContainer from "./components/PostsContainer";
import PostContainer from "./components/Postcontainer";
import { Button } from "antd";
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">
            <h1>Posts</h1>
          </Link>
        </nav>
        {/* <Button>sdsa</Button> */}
        <Routes>
          <Route path="/" element={<PostsContainer />} />
          <Route path="/posts/:id" element={<PostContainer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
