import React from "react";
import Card from "react-bootstrap/Card";
import "../../style/css/actualite.css";

function Actualite({ date, title, text }) {
  return (
    <div className="actu">
      <Card className="actu__card card">
        <Card.Header className="actu__card__header">
          {" "}
          ACTU DU {date}
        </Card.Header>
        <Card.Body className="actu__card__body">
          <Card.Title className="actu__card__body__title">{title}</Card.Title>
          <Card.Text className="actu__card__body__txt">{text}</Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

export default Actualite;
