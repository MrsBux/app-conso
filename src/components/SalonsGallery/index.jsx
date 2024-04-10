import React from "react";
import CardSalon from "./CardSalon";

import logo from "../../assets/logoallstarwine.webp";

import "../../style/css/salongallery.css";

import ch9R12 from "../../assets/ch9R12.webp";

function SalonGallery() {
  return (
    <div className="salongallery">
      <div className="salongallery__box">
        <img
          src={ch9R12}
          className="salongallery__box__img"
          alt="bouteille"
        ></img>
        <h3 className="salongallery__box__title"> Tous nos salons</h3>
      </div>
      <div className="salongallery__box2">
        <CardSalon
          name="Les Printemps des vins"
          logo={logo}
          date="8-10 avril 2024"
          localisation="Châteaneuf du Pape (84)"
        />
      </div>
    </div>
  );
}

export default SalonGallery;
