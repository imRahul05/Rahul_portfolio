import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { SiFlutter } from "react-icons/si";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiTypescript,
  DiBootstrap,
} from "react-icons/di";
import { BiLogoTypescript, } from "react-icons/bi";
import { SiFirebase ,SiTypescript} from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";;


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus style={{ color: "#00599C" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 style={{ color: "#E34F26" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 style={{ color: "#1572B6" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 style={{ color: "#F0DB4F" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact style={{ color: "#61DBFB" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs style={{ color: "#68A063" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb style={{ color: "#4DB33D" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit style={{ color: "#F1502F" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap style={{ color: "#553C7B" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoTailwindCss style={{ color: "#06B6D4" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript style={{ color: "#007ACC" }} />
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
