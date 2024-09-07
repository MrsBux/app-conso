import React from "react";
import Card from "react-bootstrap/Card";
import "../../style/css/actualite.css";
import BtnSupprimer from "../BtnSupprimer";

function Actualite({ date, title, text, id, handleDelete }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // getUTCMonth() returns 0-11
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="actu">
      <Card className="actu__card card" id={`actu id n${id}`}>
        <Card.Header className="actu__card__header" id="actu_header">
          {" "}
          ACTU DU {formatDate(date)}
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
