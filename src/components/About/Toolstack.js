import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMacos,
  SiSlack,
  SiVercel
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos style={{ background: "linear-gradient(to right, #000000, #434343)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={{ color: "#007ACC" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman style={{ color: "#FF6C37" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack style={{ color: "#4A154B" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel style={{ color: "#000000" }} />
      </Col>
    </Row>
  );
}

export default Toolstack;
