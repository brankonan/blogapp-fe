import React from "react";
import usePost from "../hooks/usePost";
import { useParams } from "react-router";

export default function PostPage() {
  const { id } = useParams;
  const { post } = usePost;
  return <div>{post.title}</div>;
}
