import React, { useState } from "react";
import "../../style/css/dossierdepresse.css";
import "../../style/css/pressandprices.css";

import Form from "react-bootstrap/Form";
import BtnAjouter from "../BtnAjouter";
import ModalT from "../ModalT";
import BtnSupprimer from "../BtnSupprimer";

function Press({ press, onClick }) {
  const [showAll, setShowAll] = useState(false);
  const sortedPress = press.slice().sort((a, b) => b.date - a.date);
  const displayedPress = showAll ? sortedPress : sortedPress.slice(0, 6);

  const handleAdmiBtn = () => {
    console.log("click");
  };

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="press mainbox">
      <h4 className="mainbox__title">Revue de presse </h4>

      <ModalT
        title={"Ajouter une nouvelle mention"}
        btnShow={<BtnAjouter onClick={handleAdmiBtn} />}
        modalContent={
          <Form className="form__ajout__mention form__ajout">
            <Form.Group className="form__groupe" controlId="name__ajoutmention">
              <Form.Label>Nom de la mention</Form.Label>
              <Form.Control type="text" placeholder="Nom de la mention" />
            </Form.Group>

            <Form.Group className="form__groupe" controlId="date__ajoutmention">
              <Form.Label>Date de la mention</Form.Label>
              <Form.Control type="date" placeholder="Date de la mention" />
            </Form.Group>

            <Form.Group className="form__groupe" controlId="lien__ajoutmention">
              <Form.Label>Lien</Form.Label>
              <Form.Control type="text" placeholder="Lien vers la mention" />
            </Form.Group>

            <button className="btn__submit" type="submit">
              Submit
            </button>
          </Form>
        }
        btnname={"Retour"}
      />

      <ul className="mainbox__list">
        {displayedPress.map((item, index) => (
          <li key={index} className="mainbox__list__li">
            {item.name} --- {item.date.toLocaleDateString()} ---
            <a
              href={item.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="mainbox__list__a"
            >
              <BtnSupprimer />
              Voir plus
            </a>
          </li>
        ))}
      </ul>
      <div className="mainbox__btns">
        <button
          className="press__showmore-btn dossierdepresse__btn"
          onClick={handleToggleShowAll}
        >
          {showAll ? "Voir moins" : "Voir plus"}
        </button>

        <button
          className="dossierdepresse__content__btn dossierdepresse__btn"
          onClick={onClick}
        >
          Retour
        </button>
      </div>
    </div>
  );
}

export default Press;
