import React from "react";
import presseBtn from "../../assets/presse.webp";
import pelemele from "../../assets/presse_pelemele.webp";
import pelemeleMax from "../../assets/pelememax.webp";
import BtnAjouter from "../BtnAjouter";
import BtnSupprimer from "../BtnSupprimer";
import ModalT from "../ModalT";
import DossierDePresse from "./DossierDePresse";

import "../../style/css/presse.css";

function Presse() {
  return (
    <div className="presse">
      <h3 className="presse__title">Revue de presse et récompenses</h3>
      <div className="presse__box">
        <ModalT
          btnShow={
            <div
              className="presse__box__btn"
              aria-label="Voir la presse et les récompenses"
            >
              CLIQUEZ ICI POUR VOIR TOUTE LA REVUE DE PRESSE & LES RECOMPENSES !
              <img
                src={presseBtn}
                alt="logo médaille et presse"
                className="presse__box__btn__img"
              />
            </div>
          }
          id={"none"}
          title={"Dossier de Presse"}
          modalContent={<DossierDePresse />}
          btnname={"Fermer"}
        />

        <a
          href={pelemeleMax}
          aria-label="Agrandir l'image"
          className="presse__box__a"
        >
          <img
            src={pelemele}
            className="presse__box__a__pelemele"
            alt="pêle-mêle de certains titres de presse"
            title="Cliquez pour agrandir"
            target="_blank"
          />
        </a>
      </div>
    </div>
  );
}

export default Presse;
