import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fitness from "../../Assets/Projects/fitty.jpg"
import prism from "../../Assets/Projects/prism.jpg"
import apple from "../../Assets/Projects/apple.png"
import book from "../../Assets/Projects/book-api.png"
import python from "../../Assets/Projects/python-scripts.jpg"
import ds from "../../Assets/Projects/data-structures.jpeg"

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
              imgPath={fitness}
              isBlog={false}
              title="Fitty-app"
              description="The Fitness Tracker helps users monitor workouts, track calories, and manage personalized fitness plans. Built with Django and React, it offers secure JWT authentication, dynamic calorie updates, and an intuitive interface, making fitness management accessible and effective for users of all levels."
              ghLink="https://github.com/pavank-v/fitness-tracker"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prism}
              isBlog={false}
              title="Prism"
              description="Developed a Golang interpreter featuring conditional statements, arrays, hash maps, functions, and closures. The project includes components like lexer, parser, evaluator, AST, and object system. It also demonstrates functional programming concepts with built-in functions for array operations"
              ghLink="https://github.com/pavank-v/interpreter-with-go"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apple}
              isBlog={false}
              title="Apple's Website"
              description="The iPhone website showcases the latest models using React, Three.js, and GSAP for a dynamic, immersive experience. It highlights features, specifications, and pricing through a premium interface, blending sleek design with cutting-edge technology to help users explore innovations."
              ghLink="https://github.com/pavank-v/Iphone"
              demoLink="https://iphone-8x53ysvyq-pavans-projects-9dcac2cd.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Book API"
              description="The Django Book API fetches book details from Amazon, Flipkart, and Goodreads using BeautifulSoup. Built with Django, it provides an easy-to-use platform to search books, view organized details, and enhance the browsing experience for users seeking comprehensive book information."
              ghLink="https://github.com/pavank-v/Django"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ds}
              isBlog={false}
              title="Data Structures Library"
              description="Developed a C library implementing essential data structures such as stack, queue, list, hashmaps, and graphs. The library allows easy integration and usage of these structures in systems, providing efficient solutions for various computational tasks and enhancing code reusability."
              ghLink="https://github.com/pavank-v/Data-Structures-C"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={python}
              isBlog={false}
              title="Python Scripts"
              description="A collection of useful Python scripts including file automation, web scraping with BeautifulSoup. The repository also features Pandas projects with data visualizations using Matplotlib and Seaborn, offering solutions for various tasks and data analysis challenges."
              ghLink="https://github.com/pavank-v/Python-Scripts"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
