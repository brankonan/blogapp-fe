import { Container, Row } from "react-bootstrap";
import Post from "../components/Post";
import usePosts from "../hooks/usePosts";
import Pagination from "../components/Pagination";
import useQuery from "../hooks/useQuery";
import { useEffect, useState } from "react";

export default function PostsPage() {
  const query = useQuery();
  const [page, setPage] = useState(1);

  const { posts, metadata } = usePosts(query.get("page"));

  useEffect(() => {
    setPage(query.get("page"));
  }, [query]);

  return (
    <Container>
      <Row>
        {posts?.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              created_at={post.created_at}
              image={post.image}
            />
          );
        })}
      </Row>
      <Pagination
        perPage={metadata.perPage}
        total={metadata.total}
        count={metadata.count}
      />
    </Container>
  );
}
