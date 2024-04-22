import React, { useState } from "react";
import "../../style/css/dossierdepresse.css";
import "../../style/css/pressandprices.css";

import Form from "react-bootstrap/Form";
import Btn from "../Btn";
import ModalT from "../ModalT";

function Factures({ factures, onClick }) {
  const [showAll, setShowAll] = useState(false);
  const sortedFactures = factures.slice().sort((a, b) => b.date - a.date);
  const displayedFactures = showAll
    ? sortedFactures
    : sortedFactures.slice(0, 6);

  const handleAdmiBtn = () => {
    console.log("click");
  };

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="factures mainbox">
      <h4 className="mainbox__title">Factures</h4>

      <ul className="mainbox__list">
        {displayedFactures.map((item, index) => (
          <li key={index} className="mainbox__list__li">
            {item.name} --- {item.date.toLocaleDateString()} --- {item.montant}€
            <a
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="mainbox__list__a"
            >
              Télécharger la facture
            </a>
          </li>
        ))}
      </ul>

      <div className="mainbox__btns">
        <button
          className="press__showmore-btn dossieruser__btn dossierdepresse__btn"
          onClick={handleToggleShowAll}
        >
          {showAll ? "Voir moins" : "Voir plus"}
        </button>

        <button
          className="dossierdepresse__content__btn dossieruser__btn dossierdepresse__btn "
          onClick={onClick}
        >
          Retour
        </button>

        <ModalT
          title={"Demander une facture"}
          btnShow={
            <Btn
              txt_btnG={"Demander une facture"}
              onClick={handleAdmiBtn}
              style={{ backgroundColor: "#124b38" }}
            />
          }
          modalContent={
            <Form className="form__ajout__mention form__ajout">
              <Form.Group
                className="form__groupe"
                controlId="name__demandefacture"
              >
                <Form.Label>Nom Utilisateur</Form.Label>
                <Form.Control type="text" placeholder="Nom" />
              </Form.Group>

              <Form.Group
                className="form__groupe"
                controlId="date__demandefacture"
              >
                <Form.Label>Date de la commande</Form.Label>
                <Form.Control type="date" placeholder="Date de la commande" />
              </Form.Group>

              <Form.Group
                className="form__groupe"
                controlId="montant__demandefacture"
              >
                <Form.Label>Montant en euros</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Montant de la commande"
                />
              </Form.Group>

              <Form.Group
                className="form__groupe"
                controlId="contenu__demandefacture"
              >
                <Form.Label>Contenu de la commande</Form.Label>
                <Form.Control
                  type="textarea"
                  rows={5}
                  placeholder="Contenu de la commande"
                />
              </Form.Group>

              <button className="btn__submit" type="submit">
                Submit
              </button>
            </Form>
          }
          btnname={"Retour"}
        />
      </div>
    </div>
  );
}

export default Factures;
