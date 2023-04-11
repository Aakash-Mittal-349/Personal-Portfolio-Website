import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Weather_App from "../../Assets/Projects/Weather_App.png";
import Trend_bubbles from "../../Assets/Projects/Trend-bubbles.png";
import Portfolio_Website from "../../Assets/Projects/Portfolio-Website.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather_App}
              isBlog={false}
              title="Weather_App"
              description="A simple and responsive Weather web app built using HTML, CSS and Javascript. It uses
              OpenWeatherMap API to fetch Temperature, Weather, Humidity Wind Speed details. It uses OpenCageData Geocoder
              API to fetch exact location coordinates of the user. Background images are fetched from Unsplash and is changed
              according to the City name."
              ghLink="https://github.com/Aakash-Mittal-349/Weather_App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Trend_bubbles}
              isBlog={false}
              title="Trend-bubbles"
              description="A Social Media Analytics Dashboard. Web Application for Analysis of Social Media data using
              Network Graphs and Graph Mapping techniques. Custom Real-Time ETL Pipeline, hyper-tuned roBERTa Sentiment
              Model, Community Detection on Graphs."
              ghLink="https://github.com/Aakash-Mittal-349/Trend-bubbles"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio_Website}
              isBlog={false}
              title="Portfolio-Website"
              description="A personal portfolio website is a professional website that provides information about what you do, what services you may offer, and how to contact you or your company."
              ghLink="https://github.com/Aakash-Mittal-349/Personal-Portfolio-Website"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
