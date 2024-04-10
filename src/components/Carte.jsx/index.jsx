import React from "react";
import PingLocation from "./PingLocation";

import carte from "../../assets/CARTE.webp";

import "../../style/css/carte.css";

function Carte() {
  return (
    <section className="carte">
      <img
        src={carte}
        className="carte__img"
        alt="carte intéractive de nos salons"
      ></img>
      <PingLocation />
    </section>
  );
}

export default Carte;
