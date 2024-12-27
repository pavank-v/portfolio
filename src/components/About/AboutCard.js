import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pavan Kumar </span>
            from <span className="purple"> TamilNadu, India.</span>
            <br />
            I'm a final year <span className="purple">Computer Science</span> student passionate about technology and innovation.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading books, especially <span className="purple">science fiction</span> and <span className="purple">self-help.</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> Hitting the gym and staying active.
            </li>
            <li className="about-activity">
              <ImPointRight /> Board games especially Chess.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
