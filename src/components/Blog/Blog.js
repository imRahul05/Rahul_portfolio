import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import { BlogDetailModal, blogs } from "./BlogDetails";

function BlogPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  const openModal = (id) => {
    setSelectedBlogId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBlogId(null);
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              My <strong className="purple">Blogs</strong>
            </h1>
          </Col>
        </Row>
        <Row>
          {blogs.map((post) => (
            <Col key={post.id} md={6} style={{ marginBottom: "30px" }}>
              <div
                className="blog-card"
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)"
                }}
              >
                <h3>{post.title}</h3>
                <p>{post.content.substring(0, 100)}...</p>
                <p>
                  <small>
                    {post.author} | {post.date} | {post.readTime}
                  </small>
                </p>
                <div style={{ marginBottom: "10px" }}>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="blog-tag"
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
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => openModal(post.id)}
                >
                  Read More
                </Button>
              </div>
            </Col>
          ))}
        </Row>
        <BlogDetailModal show={showModal} onHide={closeModal} blogId={selectedBlogId} />
      </Container>
    </Container>
  );
}

export default BlogPage;
