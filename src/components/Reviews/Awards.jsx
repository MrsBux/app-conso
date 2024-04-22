import React, { useState } from "react";
import "../../style/css/dossierdepresse.css";
import "../../style/css/pressandprices.css";

import Form from "react-bootstrap/Form";
import BtnAjouter from "../BtnAjouter";
import BtnSupprimer from "../BtnSupprimer";
import ModalT from "../ModalT";

function Awards({ prix, onClick }) {
  const [showAll, setShowAll] = useState(false);
  const sortedPrix = prix.slice().sort((a, b) => b.date - a.date);
  const displayedPrix = showAll ? sortedPrix : sortedPrix.slice(0, 6);

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleAdmiBtn = () => {
    console.log("click");
  };

  return (
    <div className="awards mainbox">
      <h4 className="mainbox__title">Récompenses & Notes</h4>

      <ModalT
        title={"Ajouter une nouvelle récompense"}
        btnShow={<BtnAjouter onClick={handleAdmiBtn} />}
        modalContent={
          <Form className="form__ajout__recompense form__ajout">
            <Form.Group
              className="form__groupe"
              controlId="name__ajoutrecompense"
            >
              <Form.Label>Nom de la récompense</Form.Label>
              <Form.Control type="text" placeholder="Nom de la récompense" />
            </Form.Group>

            <Form.Group
              className="form__groupe"
              controlId="vin__ajoutrecompense"
            >
              <Form.Label>Vin</Form.Label>
              <Form.Control type="text" placeholder="Nom du vin" />
            </Form.Group>

            <Form.Group
              className="form__groupe"
              controlId="date__ajoutrecompense"
            >
              <Form.Label>Date de la récompense</Form.Label>
              <Form.Control type="date" placeholder="Date de la récompense" />
            </Form.Group>

            <Form.Group
              className="form__groupe"
              controlId="lien__ajoutrecompense"
            >
              <Form.Label>Lien</Form.Label>
              <Form.Control type="text" placeholder="Lien vers la récompense" />
            </Form.Group>

            <button className="btn__submit" type="submit">
              Submit
            </button>
          </Form>
        }
        btnname={"Retour"}
      />

      <ul className="mainbox__list">
        {displayedPrix.map((item, index) => (
          <li key={index} className="mainbox__list__li">
            {item.name} --- {item.vin} --- {item.date.toLocaleDateString()} ---
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
          className="dossierdepresse__content__btn dossierdepresse__btn"
          onClick={onClick}
        >
          Retour
        </button>

        <button
          className="awards__showmore-btn dossierdepresse__btn"
          onClick={handleToggleShowAll}
        >
          {showAll ? "Voir moins" : "Voir plus"}
        </button>
      </div>
    </div>
  );
}

export default Awards;
