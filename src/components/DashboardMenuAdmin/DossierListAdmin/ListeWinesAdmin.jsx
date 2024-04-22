import React, { useState } from "react";
import "../../../style/css/dossierdepresse.css";
import "../../../style/css/pressandprices.css";

import BtnSupprimer from "../../BtnSupprimer";

function LiWinesAd({ wines, onClick }) {
  const [showAll, setShowAll] = useState(false);
  const AllWines = wines;
  const displayedWines = showAll ? AllWines : AllWines.slice(0, 6);

  const handleAdmiBtn = () => {
    console.log("click");
  };

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="wineadmin mainbox">
      <h4 className="mainbox__title">Vins</h4>

      <ul className="mainbox__list">
        {displayedWines.map((item, index) => (
          <li key={index} className="mainbox__list__li">
            {item.nom} --- {item.millesime} --- {item.prix}
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

export default LiWinesAd;
