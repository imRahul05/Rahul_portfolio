import React from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

export const blogs = [
  {
    id: 1,
    title: "The Future of Web Development",
    content:
      "Full details on the future of web development. This article dives deep into emerging technologies, innovative frameworks, and predictions for the digital era...",
    author: "Sarah Chen",
    date: "January 10, 2025",
    readTime: "5 min read",
    tags: ["Web Dev", "Technology", "Future"]
  },
  {
    id: 2,
    title: "Mastering Modern CSS",
    content:
      "Full details on mastering modern CSS. Explore advanced selectors, grid layout techniques, and responsive design principles to make your sites stand out...",
    author: "Alex Rivera",
    date: "January 8, 2025",
    readTime: "8 min read",
    tags: ["CSS", "Design", "Tutorial"]
  },
  {
    id: 3,
    title: "Understanding JavaScript ES2025",
    content:
      "Full details on JavaScript ES2025. Learn about new syntax, features, and best practices in the evolving world of JavaScript...",
    author: "Jamie Fox",
    date: "February 5, 2025",
    readTime: "7 min read",
    tags: ["JavaScript", "ESNext", "Programming"]
  },
  {
    id: 4,
    title: "Building Mobile-First Applications",
    content:
      "Full details on building mobile-first applications. Dive into strategies for responsive design and performance optimization to create seamless mobile experiences...",
    author: "Morgan Lee",
    date: "March 12, 2025",
    readTime: "6 min read",
    tags: ["Mobile", "Responsive", "Design"]
  }
];

export function BlogDetailModal({ show, onHide, blogId }) {
  const blog = blogs.find((post) => post.id === blogId);
  if (!blog) return null;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{blog.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <p>
          <small>
            {blog.author} | {blog.date} | {blog.readTime}
          </small>
        </p>
        <div className="mb-3">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              style={{
                marginRight: "8px",
                padding: "2px 6px",
                background: "#dcd6f7",
                borderRadius: "4px",
                color: "#5e60ce",
                fontWeight: "bold"
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <p>{blog.content}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function BlogDetails() {
  const { id } = useParams();
  const blogPosts = blogs;

  const blog = blogPosts.find((post) => post.id === parseInt(id));
  if (!blog) return <p>Blog not found</p>;

  return (
    <Container style={{ padding: "20px" }}>
      <Row>
        <Col>
          <h1>{blog.title}</h1>
          <p>
            <small>
              {blog.author} | {blog.date} | {blog.readTime}
            </small>
          </p>
          <div style={{ marginBottom: "10px" }}>
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="blog-tag"
                style={{
                  marginRight: "8px",
                  padding: "2px 6px",
                  background: "#dcd6f7",
                  borderRadius: "4px",
                  color: "#5e60ce",
                  fontWeight: "bold",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <p>{blog.content}</p>
          <Link to="/blog">
            <Button variant="secondary">Back to Blogs</Button>
          </Link>
        </Col>
      </Row>
      {/* ...any additional details... */}
    </Container>
  );
}

export default BlogDetails;
