import React from "react";
import { Route, Routes } from "react-router";
import PostsPage from "./pages/PostsPage";

export default function router() {
  return (
    <Routes>
      <Route index path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostsPage />} />
    </Routes>
  );
}
