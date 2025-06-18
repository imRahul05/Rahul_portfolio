import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/avt.png";
//`import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Particlebg from "../../components/Particlebg";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import pdf from "../../Assets/rahul_masai_resume.pdf";

function Home() {
  const navigate = useNavigate();

  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Particlebg />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1
                style={{
                  paddingBottom: 15,
                  fontSize: "3rem",
                  fontWeight: "bold",
                }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1
                className="heading-name"
                style={{ fontSize: "2.5rem", fontWeight: "bold" }}
              >
                I'M
                <strong className="main-name" style={{ color: "#ff6347" }}>
                  {" "}
                  Rahul Kumar
                </strong>
              </h1>

              <div
                style={{
                  padding: 50,
                  textAlign: "left",
                  fontSize: "1.2rem",
                  lineHeight: "1.5",
                  position: "relative",
                }}
              >
                <Type />
                <br />
                <div
                  style={{ display: "flex", gap: "15px", marginTop: "20px" }}
                >
                  <button
                    className="resume-btn"
                    onClick={() => {
                      // Navigate to resume page
                     // navigate("/resume");
                      
                      // Create a link to download the resume
                      const downloadLink = document.createElement("a");
                      downloadLink.href = pdf;
                      downloadLink.download = "rahul_masai_resume.pdf";
                      document.body.appendChild(downloadLink);
                      downloadLink.click();
                      document.body.removeChild(downloadLink);
                      
                      // Open the resume in a new tab
                      window.open(pdf, "_blank");
                    }}
                  >
                    📄 Resume
                  </button>
                  <button
                    className="hire-btn border-anim-wrapper"
                    onClick={() =>
                      window.open(
                        "https://mail.google.com/mail/?view=cm&fs=1&to=rahulkumar20000516@gmail.com",
                        "_blank"
                      )
                    }
                  >
                    💼 Hire Me
                  </button>
                </div>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div className="image-wrapper border-anim-wrapper">
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid animated-border"
                  style={{
                    maxHeight: "350px",
                    borderRadius: "40px",
                    boxShadow: "0 0 10px rgba(63, 214, 22, 0.89)",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
