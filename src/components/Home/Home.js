import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
//`import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Particlebg from '../../components/Particlebg'
//import { useNavigate } from "react-router-dom";

function Home() {
  // const navigate = useNavigate();

  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Particlebg />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, fontSize: "3rem", fontWeight: "bold" }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                I'M
                <strong className="main-name" style={{ color: "#ff6347" }}> Rahul Kumar</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", fontSize: "1.2rem", lineHeight: "1.5" }}>
                <Type />
                {/* <button className="resume-btn" onClick={() => navigate("/resume")}>
                  Resume
                </button> */}
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
