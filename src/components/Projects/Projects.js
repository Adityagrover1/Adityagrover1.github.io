import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Airpline Passenger Satisfaction"
              description="The primary objective of this project is to build a predictive model that accurately classifies airline passenger satisfaction, using a variety of machine learning algorithms.This project demonstrates the significant impact of preprocessing techniques and feature selection on model performance. Notably, applying Z-Score normalization with feature engineering improved the accuracy, precision, and sensitivity of models across various algorithms. The Random Forest model performed best overall, achieving the highest accuracy (99.24%) with default settings.Removing 10 less important features further boosted the model's precision (99.21%) and sensitivity (99.23%), highlighting the importance of feature selection in enhancing predictive performance."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="Car Price Prediction using Machine Learning"
              description="Automobile price prediction is one of the biggest applications of the techniques of machine learning. In the current research investigation, we proposed an advanced price prediction model that was specific to the automobiles, estimating the prices with an extensive dataset that was downloaded from the Kaggle dataset. On the whole evaluation, the model was able to give an impressive value for R-squared at 0.895 such that on average, about 89.5 percent of the variability seen in car prices can be well explained by the model itself."
              pubLink="http://www.journal-iiie-india.com/1_nov_24/18.4_nov.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Digital Attendance: Modernizing Attendance Tracking"
              description="The system leverages an ESP32-CAM module for real-time image
                          capture and Python-based face recognition libraries for
                          identifying students.The ability to export data to CSV and integrate
                          the system with a graphical user interface (GUI) improved
                          the system's usability for educators.My contribution to this project primarily
                          was the use of MACHINE LEARNING and pre trained models usage for Face Recognition using 
                          Python  ."
                          
            />
          </Col>

      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
