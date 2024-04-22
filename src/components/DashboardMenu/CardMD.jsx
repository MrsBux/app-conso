import React from "react";
import "../../style/css/cardMD.css";
import ModalT from "../ModalT";

function CardMD({ name, contentmod }) {
  return (
    <ModalT
      btnShow={<div className="cardmd">{name}</div>}
      modalContent={contentmod}
      title="Dossier Utilisateurs"
      btnname={"Fermer"}
    />
  );
}
export default CardMD;
