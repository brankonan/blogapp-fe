import React, { useEffect, useState } from "react";

export default function usePost() {
  const [post, setPost] = useState({});

  useEffect(() => {
    fetchPost();
  }, [id]);

  async function fetchPost() {
    try {
      const post = await PostService.getSingle(id);
      if (post) setPost(post);
    } catch (e) {
      console.log(e);
    } finally {
    }
  }
}
