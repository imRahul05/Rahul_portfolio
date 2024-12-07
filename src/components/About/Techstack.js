import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { SiFlutter } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { SiFirebase } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus style={{ color: "#00599C" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 style={{ color: "#F0DB4F" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs style={{ color: "#68A063" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact style={{ color: "#61DBFB" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb style={{ color: "#4DB33D" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit style={{ color: "#F1502F" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase style={{ color: "#FFCA28" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython style={{ color: "#306998" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava style={{ color: "#007396" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter style={{ color: "#02569B" }} />
      </Col>
    </Row>
  );
}

export default Techstack;
