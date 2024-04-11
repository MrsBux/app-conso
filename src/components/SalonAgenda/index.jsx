import React from "react";

import logoAgenda from "../../assets/logo_agenda.webp";
import ch9B13G from "../../assets/ch9B13G.webp";
import "../../style/css/salonagenda.css";

function SalonAgenda() {
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
      <img
        src={logoAgenda}
        className="salonagenda__img"
        alt="logo d'un agenda"
        title="Cliquez pour voir l'agenda des salons du mois"
      ></img>
    </div>
  );
}

export default SalonAgenda;
