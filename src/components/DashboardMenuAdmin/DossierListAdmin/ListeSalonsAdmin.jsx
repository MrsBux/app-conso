import React, { useState } from "react";
import "../../../style/css/dossierdepresse.css";
import "../../../style/css/pressandprices.css";

import BtnSupprimer from "../../BtnSupprimer";

function LiSalonsAd({ salons, onClick }) {
  const [showAll, setShowAll] = useState(false);
  const AllSalons = salons;
  const displayedSalons = showAll ? AllSalons : AllSalons.slice(0, 6);

  const handleAdmiBtn = () => {
    console.log("click");
  };

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="wineadmin mainbox">
      <h4 className="mainbox__title">Salons</h4>

      <ul className="mainbox__list">
        {displayedSalons.map((item, index) => (
          <li key={index} className="mainbox__list__li">
            {item.name} --- {item.date} --- {item.localisation}
            <BtnSupprimer />
          </li>
        ))}
      </ul>

      <div className="mainbox__btns">
        <button
          className="press__showmore-btn dossieradmin__btn dossierdepresse__btn"
          onClick={handleToggleShowAll}
        >
          {showAll ? "Voir moins" : "Voir plus"}
        </button>

        <button
          className="dossierdepresse__content__btn dossieradmin__btn dossierdepresse__btn"
          onClick={onClick}
        >
          Retour
        </button>
      </div>
    </div>
  );
}

export default LiSalonsAd;
