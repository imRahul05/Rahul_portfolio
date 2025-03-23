import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMacos,
  SiSlack,
  SiVercel,
  SiNetlify,
  SiGithubcopilot,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { VscCopilot } from "react-icons/vsc";
import { FaNpm } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos
          style={{
            background: "linear-gradient(to right, #000000, #434343)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        />
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
        <SiVercel style={{ color: "grey" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify
          style={{color: "#00C7B7"}}
        />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaGithub style={{ color: "grey" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscCopilot style={{ color: "grey" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNpm style={{ color: "#CB3837" }} />
      </Col>
    </Row>
  );
}

export default Toolstack;
