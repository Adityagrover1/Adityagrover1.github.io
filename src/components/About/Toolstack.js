import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiRstudio,
  SiVisualstudiocode,
  SiDocker,
  SiMacos,
  SiFigma,
  SiTableau,
  SiJupyter,
  SiNodedotjs,
  SiGithub,
} from "react-icons/si";


function Toolstack() {
  const tools = [
    { icon: <SiRstudio />, name: "RStudio" },
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiMacos />, name: "macOS" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiTableau />, name: "Tableau" },
    { icon: <SiJupyter />, name: "Jupyter" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiGithub />, name: "GitHub" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="tool-container">
            <div className="icon">{tool.icon}</div>
            <div className="label">{tool.name}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
