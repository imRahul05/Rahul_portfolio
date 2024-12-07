import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./ProjectCards.css"; // Import the CSS file

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="card-img-container">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" className="card-img" />
      </div>
      <Card.Body>
        <Card.Title className="card-title">{props.title}</Card.Title>
        <Card.Text className="card-text">
          {props.description}
        </Card.Text>
        <div className="tech-badges">
          {props.technologies.map((tech, index) => (
            <span key={index} className="technology-badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="card-buttons">
          <Button variant="primary" href={props.ghLink} target="_blank" className="card-button">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {"\n"}
          {"\n"}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="card-button"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;