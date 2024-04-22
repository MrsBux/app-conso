import React from "react";
import ModalT from "../ModalT";
import AgendaMois from "./AgendaMois";

import logoAgenda from "../../assets/logo_agenda.webp";
import ch9B13G from "../../assets/ch9B13G.webp";
import "../../style/css/salonagenda.css";

function SalonAgenda() {
  const salons = [
    {
      id: 1,
      nom: "Les printemps du Vins de Châteaneuf du Pape",
      debut: new Date(2024, 3, 10), // Les mois sont indexés à partir de 0, donc 4 représente mai
      fin: new Date(2024, 3, 12),
    },
    {
      id: 2,
      nom: "Vinomedia Posy",
      debut: new Date(2024, 4, 10), // Les mois sont indexés à partir de 0, donc 4 représente mai
      fin: new Date(2024, 4, 12),
    },
    {
      id: 3,
      nom: "Vinomedia Morhjou",
      debut: new Date(2024, 4, 20), // Les mois sont indexés à partir de 0, donc 4 représente mai
      fin: new Date(2024, 4, 24),
    },
    {
      id: 4,
      nom: "Vinomedia Billom",
      debut: new Date(2024, 5, 20), // Les mois sont indexés à partir de 0, donc 4 représente mai
      fin: new Date(2024, 5, 24),
    },
  ];

  return (
    <div className="salonagenda">
      <div className="salonagenda__box">
        <h3 className="salonagenda__box__title"> Les salons du mois</h3>
        <img
          src={ch9B13G}
          alt="Goulot bouteille de vin"
          className="salonagenda__box__img"
        ></img>{" "}
      </div>

      <ModalT
        btnShow={
          <img
            src={logoAgenda}
            className="salonagenda__img"
            alt="logo d'un agenda"
            title="Cliquez pour voir l'agenda des salons du mois"
          ></img>
        }
        title={"Agenda du mois"}
        modalContent={<AgendaMois salons={salons} />}
        btnname={"Fermer"}
      />
    </div>
  );
}

export default SalonAgenda;
