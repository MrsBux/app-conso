import React from "react";
import { useState } from "react";
import Actualite from "./actualite";
import "../../style/css/nosactus.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

import BtnAjouter from "../BtnAjouter";
import BtnSupprimer from "../BtnSupprimer";
import ModalT from "../ModalT";

function NosActus() {
  const [visibleActus, setVisibleActus] = useState(4);

  const handleVoirPlusClick = () => {
    setVisibleActus(actus.length); // Affiche toutes les actus
  };

  const handleVoirMoinsClick = () => {
    setVisibleActus(4); // Revenir à l'état initial (afficher seulement les trois premières actus)
  };

  const handleAdmiBtn = () => {
    console.log("click");
  };

  const actus = [
    { date: "12/03/24", title: "TITRE7", text: "text de l'actu" },
    { date: "12/03/24", title: "TITRE6", text: "text de l'actu" },
    { date: "12/03/24", title: "TITRE5", text: "text de l'actu" },
    { date: "12/03/24", title: "TITRE4", text: "text de l'actu" },
    { date: "12/04/24", title: "TITRE3", text: "text de l'actu" },
    { date: "13/03/24", title: "TITRE2", text: "text de l'actu" },
    { date: "12/03/24", title: "TITRE1", text: "text de l'actu" },
  ];

  return (
    <div className="nosactus">
      {actus.length > 4 && (
        <div className="nosactus__btn">
          {visibleActus < actus.length ? (
            <button
              id="btnV"
              name={"Voir plus ->"}
              className="nosactus__btn__b btnG"
              onClick={handleVoirPlusClick}
            >
              Voir plus
            </button>
          ) : (
            <button
              id="btnM"
              name={"Voir moins <-"}
              className="nosactus__btn__b btnG"
              onClick={handleVoirMoinsClick}
            >
              Voir moins{" "}
            </button>
          )}
          <ModalT
            title={"Ajouter une nouvelle actu"}
            btnShow={<BtnAjouter onClick={handleAdmiBtn} />}
            modalContent={
              <Form className="form__ajout__actu form__ajout">
                <Form.Group
                  className="form__groupe"
                  controlId="date__ajoutactu"
                >
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" placeholder="date" />
                </Form.Group>

                <Form.Group
                  className="form__groupe"
                  controlId="title__ajoutactu"
                >
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder="title" />
                </Form.Group>

                <Form.Group
                  className="form__groupe"
                  controlId="text__ajoutactu"
                >
                  <Form.Label>Contenu</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="texte actu"
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
      )}

      <div className="nosactus__box">
        {actus.slice(0, visibleActus).map((item, index) => (
          <Actualite
            key={index}
            date={item.date}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}

export default NosActus;
