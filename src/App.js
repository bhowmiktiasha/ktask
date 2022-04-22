import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navigate } from "react-router-dom";

import { PostsList } from "./features/posts/PostsList";
import { AddPostForm } from "./features/posts/AddPostForm";
import { CommentModal } from "./features/posts/CommentModal";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddPostForm />
                <PostsList />
              </>
            }
          />
          <Route exact path="/commentbox" element={<CommentModal />} />
          <Route path="/" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
