import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiRust,

} from "react-icons/di";
import {
  SiC,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRust />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC size={46}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={{
            fontSize: "2.5rem",
            fontWeight: "normal",
            color: 'white',
            borderRadius: "5px",
            paddingTop: "20px",
            textAlign: "center",
          }}
        >
          Django
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={{
            fontSize: "2.5rem",
            fontWeight: "normal",
            color: 'white',
            borderRadius: "5px",
            paddingTop: "20px",
            textAlign: "center",
          }}
        >
          Actix-web
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={{
            fontSize: "2.5rem",
            fontWeight: "normal",
            color: 'white',
            borderRadius: "5px",
            paddingTop: "20px",
            textAlign: "center",
          }}
        >
          Flask
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
    </Row>
  );
}

export default Techstack;
