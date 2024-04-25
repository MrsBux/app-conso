import React from "react";
import PingLocation from "./PingLocation";

import carte from "../../assets/CarteSalons.webp";

import "../../style/css/carte.css";

function Carte() {
  return (
    <section className="carte">
      <h2 className="carte__title">NOS SALONS</h2>
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
