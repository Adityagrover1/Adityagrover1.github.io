import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
             My name is <span style={{ color: "#488cdc" }}>Aditya Grover</span> and I am from 
            <span style={{ color: "#488cdc" }}> Pune, India</span>.
            
            I am currently a Second-year Computer Science student in Vishwakarma Institute of Technology.
            
            As a Student, I am always looking to explore my interests and find domains that I love.
            My current interests are <span style={{ color: "#488cdc" }}>Machine Learning, Artificial Intelligence </span>  and <span style={{ color: "#488cdc" }}>Blockchain.</span>
            <br/>
           <br/>
            Apart from coding, some other activities that I love:
            </p>
            <ul style={{ textAlign: "left", listStyleType: "disc", paddingInlineStart: "20px" }}>
              <li style={{ display: "list-item" }}>Football ⚽️</li>
              <li style={{ display: "list-item" }}>Photography 📸</li>
              <li style={{ display: "list-item" }}>Travelling ✈️</li>
            </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
