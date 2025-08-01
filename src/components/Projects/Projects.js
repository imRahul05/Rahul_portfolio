import React, { useState } from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
//`import Particle from "../Particle";
import Gift from "../../Assets/Projects/donation.png";
import bitsOfCode from "../../Assets/Projects/giphy.gif";
import blog from "../../Assets/Projects/bloggy.png";
import care from "../../Assets/Projects/community.gif";
import movie from "../../Assets/Projects/movie-stream.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import pilpall from "../../Assets/Projects/pillpal.png";
import Particlebg from "../../components/Particlebg";
import FinSage from "../../Assets/Projects/FinSage.png";
import FriendLoop from "../../Assets/Projects/FriendLoop.png";
import crmsImage from "../../Assets/Projects/crms.png";
import OMSimage from "../../Assets/Projects/oms.png";

const projects = [
  {
    imgPath: FinSage,
    isBlog: false,
    title: "FinSage",
    description:
      "A better way to manage your finances, Take control of your financial journey with our comprehensive suite of tools. ",
    ghLink: "https://github.com/imRahul05/Fin_service",
    demoLink: "https://finsage-ai.vercel.app/",
    technologies: ["React", "Web", "JSX"],
    category: "Web",
  },
  {
    imgPath: pilpall,
    isBlog: false,
    title: "PillPal",
    description:
      "PillPal helps you manage medications, track doses, and stay on top of refills with smart reminders and a simple tracking system.",
    ghLink: "https://github.com/imRahul05/PillPal",
    demoLink: "https://pill-pal-ai.vercel.app/",
    technologies: ["React", "Web", "JSX"],
    category: "Web",
  },
  {
    imgPath: crmsImage,
    isBlog: false,
    title: "CRMS - Candidate Referral System",
    description:
      "A comprehensive web application for managing employee referrals.Users can submit and track referrals while admins can manage the entire hiring pipeline with detailed statistics.",
    ghLink: "https://github.com/imRahul05/crms-MERN",
    demoLink: "https://crms-frontend-theta.vercel.app", // Update with your actual demo link
    technologies: ["React", "Vite", "Tailwind", "JWT","Node.js", "Express", "MongoDB"],
    category: "Web",
  },
    {
    imgPath: OMSimage,
    isBlog: false,
    title: "OMS - Order Management System",
    description:
      "A comprehensive web application for managing orders. Users can submit and track orders while admins can manage the entire order pipeline with detailed statistics.",
    ghLink: "https://github.com/imRahul05/Order_management_system",
    demoLink:"https://order-management-system-inky-alpha.vercel.app/", // Update with your actual demo link
    technologies: ["React", "Vite", "Tailwind", "JWT","Node.js", "Express", "MongoDB"],
    category: "Web",
  },
  {
    imgPath: FriendLoop,
    isBlog: false,
    title: "FriendLoop",
    description:
      "This project is a Facebook-inspired web app. It mimics core Facebook features such as authentication, posting, notifications, and interactive UI components.",
    ghLink: "https://github.com/imRahul05/masai_WEB205_Unit_3_Facebook_clone",
    demoLink: "https://fb-clone-masai.netlify.app/",
    technologies: ["HTML", "CSS", "JS"],
    category: "Web",
  },
  // {
  //   imgPath: chatbot,
  //   isBlog: false,
  //   title: "Ai-converso",
  //   description: "AI Converso is an advanced chatbot application built using the Gemini API. This project leverages the power of AI to create seamless and intelligent conversational experiences. Developed with modern technologies like React and TypeScript, the web-based application offers a user-friendly interface for real-time interactions.",
  //   ghLink: "https://github.com/imRahul05/ChatBot",
  //   demoLink: "https://ai-converso.vercel.app/",
  //   technologies: ["React", "Web", "TS"],
  //   category: "Web"
  // },
  {
    imgPath: blog,
    isBlog: false,
    title: "Bloogyy",
    description:
      "React.js for frontend interactivity and Node.js with Express for backend logic, my blog site employs MongoDB for robust data storage. Firebase integration enhances user authentication and real-time updates, ensuring a secure and responsive platform. Visitors can engage with articles through commenting and upvoting, fostering a vibrant community interaction.",
    ghLink: "https://github.com/imRahul05/blog_frontend",
    demoLink: "https://bloogyy.vercel.app/",
    technologies: ["React", "Node.js", "MongoDB", "Firebase"],
    category: "Web",
  },
  // {
  //   imgPath: bitsOfCode,
  //   isBlog: false,
  //   title: "Rahul's PortFolio",
  //   description: "A website using React.js and Node.js to showcase my projects, skills, and experience. The websitefeatures a clean, modern design and is fully responsive. It includes sections for my resume, projectportfolio and contact information. This project allowed me to demonstrate my proficiency in React.js andNode.js, as well as my ability to design and implement a complete web application from scratch.",
  //   ghLink: "https://github.com/imRahul05/Rahul_portfolio",
  //   demoLink: "https://imrahul05.netlify.app/",
  //   technologies: ["React", "Node.js", "Web"],
  //   category: "Web"
  // },
  {
    imgPath: care,
    isBlog: false,
    title: "Community Care",
    description:
      "A mobile application using the Flutter framework and Firebase for the Smart India Hackathon 2023project by AICTE. It allows users to post local issues such as sanitation and other municipal concernsdirectly to their local municipal corporation.",
    ghLink: "https://github.com/imRahul05/Community-Care",
    demoLink: "https://communitycarev4.web.app/",
    technologies: ["Flutter", "Mobile", "Firebase"],
    category: "Mobile",
  },
  {
    imgPath: movie,
    isBlog: false,
    title: "Movie-stream",
    description:
      "A sleek and intuitive streaming platform for movies and TV shows. Built with the latest web technologies, it fetches dynamic content from trusted APIs like TMDB, IMDB, and Rapid API to provide users with up-to-date information, trailers, and viewing options. Whether you're looking to discover new movies , Movie-stream has you covered!",
    ghLink: "https://github.com/imRahul05/GiftofHope",
    demoLink: "https://movie-stream-phi.vercel.app/",
    technologies: ["React", "Web", "TS"],
    category: "Web",
  },

  // {
  //   imgPath: Gift,
  //   isBlog: false,
  //   title: "Gift of Hope",
  //   description: "A mobile application built with Flutter and Firebase, designed to make the donation process seamless and secure. This app allows users to easily donate to various causes, with integrated payment functionality through Razorpay API. Whether you're giving to charity or supporting a cause close to your heart.",
  //   ghLink: "https://github.com/imRahul05/GiftofHope",
  //   demoLink: "hhttps://movie-stream-phi.vercel.app/",
  //   technologies: ["Flutter", "Mobile", "Firebase"],
  //   category: "Mobile"
  // }
];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Particlebg />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <ButtonGroup className="mb-3">
          <Button
            variant="outline-primary"
            onClick={() => setSelectedCategory("All")}
          >
            All
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => setSelectedCategory("Web")}
          >
            Web
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => setSelectedCategory("Mobile")}
          >
            Mobile
          </Button>
        </ButtonGroup>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                technologies={project.technologies}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
