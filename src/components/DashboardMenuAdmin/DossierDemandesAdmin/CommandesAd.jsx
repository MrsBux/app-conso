import React, { useState } from "react";
import "../../../style/css/dossierdepresse.css";
import "../../../style/css/pressandprices.css";

function CommandesAd({ commandes, onClick, number }) {
  const [showAll, setShowAll] = useState(false);
  const sortedCommandes = commandes.slice().sort((a, b) => b.date - a.date);
  const displayedCommandes = showAll
    ? sortedCommandes
    : sortedCommandes.slice(0, 6);

  const handleAdmiBtn = () => {
    console.log("click");
  };

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="factures mainbox">
      <h4 className="mainbox__title">Commandes</h4>

      <ul className="mainbox__list">
        {displayedCommandes.map((item, index) => (
          <li key={index} className="mainbox__list__li">
            {item.name} --- {item.date.toLocaleDateString()} ---
            <a
              href={item.detail}
              target="_blank"
              rel="noopener noreferrer"
              className="mainbox__list__a"
            >
              Voir le détail
            </a>
          </li>
        ))}
      </ul>

      <div className="mainbox__btns">
        <button
          className="press__showmore-btn dossieruser__btn dossierdepresse__btn"
          onClick={handleToggleShowAll}
        >
          {showAll ? "Voir moins" : "Voir plus"}
        </button>

        <button
          className="dossierdepresse__content__btn dossieruser__btn dossierdepresse__btn"
          onClick={onClick}
          id={`btnRetour__${number}`}
        >
          Retour
        </button>
      </div>
    </div>
  );
}

export default CommandesAd;
