import Accordion from "react-bootstrap/Accordion";
import React from "react";
import "../../style/css/menu.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Menu({ numberKey, title, text, id }) {
  return (
    <Accordion className="menuFaq">
      <Accordion.Header className="menuFaq__title">{title}</Accordion.Header>
      <Accordion.Body className="menuFaq__name">{text}</Accordion.Body>
    </Accordion>
  );
}

export default Menu;
