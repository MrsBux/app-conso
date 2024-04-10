import React from "react";

import Carte from "../components/Carte.jsx";
import SalonGallery from "../components/SalonsGallery/index.jsx";
import SalonAgenda from "../components/SalonAgenda/index.jsx";

import "../style/css/salons.css";

function Salons() {
  return (
    <>
      <main>
        <div className="salons">
          <h2 className="salons__title">NOS SALONS</h2>
          <Carte />
          <SalonGallery />
          <SalonAgenda />
        </div>
      </main>
    </>
  );
}
export default Salons;
