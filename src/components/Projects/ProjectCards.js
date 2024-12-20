import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.pubLink && (
          <Button
            variant="primary"
            href={props.pubLink}
            target="_blank"
            style={{ marginTop: "10px" }}
          >
            View Publication
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
