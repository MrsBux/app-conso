import React from "react";
import Card from "react-bootstrap/Card";
import "../../style/css/actualite.css";
import BtnSupprimer from "../BtnSupprimer";

function Actualite({ date, title, text, id, handleDelete }) {
  return (
    <div className="actu">
      <Card className="actu__card card" id={`actu id n${id}`}>
        <Card.Header className="actu__card__header" id="actu_header">
          {" "}
          ACTU DU {date}
        </Card.Header>
        <Card.Body className="actu__card__body">
          <Card.Title className="actu__card__body__title" id="actu_title">
            {title}
          </Card.Title>
          <Card.Text className="actu__card__body__txt" id="actu_txt">
            {text}
          </Card.Text>
          <BtnSupprimer onClick={handleDelete} />
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

export default Actualite;
