import React from "react";
import { useState } from "react";
import Actualite from "./actualite";
import "../../style/css/nosactus.css";

import BtnAjouter from "../BtnAjouter";
import BtnSupprimer from "../BtnSupprimer";

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

          <BtnAjouter onClick={handleAdmiBtn} />
          <BtnSupprimer onClick={handleAdmiBtn} />
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
