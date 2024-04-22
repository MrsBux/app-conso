import React, { useState } from "react";
import "../../style/css/dossierdepresse.css";
import "../../style/css/pressandprices.css";

import Form from "react-bootstrap/Form";
import Btn from "../Btn";
import ModalT from "../ModalT";

function Invitations({ invitations, onClick }) {
  const [showAll, setShowAll] = useState(false);
  const sortedInvits = invitations.slice().sort((a, b) => b.date - a.date);
  const displayedInvits = showAll ? sortedInvits : sortedInvits.slice(0, 6);

  const handleAdmiBtn = () => {
    console.log("click");
  };

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="invits mainbox">
      <h4 className="mainbox__title">Invitations</h4>

      <ul className="mainbox__list">
        {displayedInvits.map((item, index) => (
          <li key={index} className="mainbox__list__li">
            {item.name} --- {item.date.toLocaleDateString()}
            <a
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="mainbox__list__a"
            >
              Télécharger l'invitation
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
          title={"Demander une invitation"}
          btnShow={
            <Btn txt_btnG={"Demander une invitation"} onClick={handleAdmiBtn} />
          }
          modalContent={
            <Form className="form__ajout__mention form__demande">
              <Form.Group
                className="form__groupe"
                controlId="name__demandeinvit"
              >
                <Form.Label>Nom Utilisateur</Form.Label>
                <Form.Control type="text" placeholder="Nom" />
              </Form.Group>

              <Form.Group
                className="form__groupe"
                controlId="date__demandeinvit"
              >
                <Form.Label>Date du salon</Form.Label>
                <Form.Control type="date" placeholder="Date du salon" />
              </Form.Group>

              <Form.Group
                className="form__groupe"
                controlId="nomSalon__demandeinvit"
              >
                <Form.Label>Nom du salon</Form.Label>
                <Form.Control type="text" placeholder="Nom du salon" />
              </Form.Group>

              <Form.Group
                className="form__groupe"
                controlId="contenu__demandeinvit"
              >
                <Form.Label>Lieu du salon</Form.Label>
                <Form.Control type="text" placeholder="Lieu du salon" />
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

export default Invitations;
