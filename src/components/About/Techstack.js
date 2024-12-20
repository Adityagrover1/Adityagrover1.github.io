import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiPython, DiJava, DiReact } from "react-icons/di";
import { SiR, SiKeras, SiSqlite } from "react-icons/si";
import { MdOutlineAnalytics } from "react-icons/md";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p className="label">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <p className="label">C</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiR />
        <p className="label">R</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineAnalytics />
        <p className="label">ggplot</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite />
        <p className="label">SQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p className="label">Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="label">React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
        <p className="label">TensorFlow/Keras</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineAnalytics />
        <p className="label">Matplotlib/Seaborn</p>
      </Col>
    </Row>
  );
}

export default Techstack;
