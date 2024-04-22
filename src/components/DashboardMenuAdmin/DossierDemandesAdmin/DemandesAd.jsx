import React, { useState } from "react";
import "../../../style/css/dossierdepresse.css";
import "../../../style/css/pressandprices.css";

function DemandesAd({ demandes, onClick, number }) {
  const [showAll, setShowAll] = useState(false);
  const sortedDemandes = demandes.slice().sort((a, b) => b.date - a.date);
  const displayedDemandes = showAll
    ? sortedDemandes
    : sortedDemandes.slice(0, 6);

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  //   nameForm: "name form",
  //   name: "Nom",
  //   date: new Date(2024, 3, 1),
  //   contactmail: "email@test.fr",
  //   contentform: "blabla",

  return (
    <div className="factures mainbox">
      <h4 className="mainbox__title">Demandes</h4>

      <ul className="mainbox__list">
        {displayedDemandes.map((item, index) => (
          <li key={index} className="mainbox__list__li">
            {item.nameForm} --- {item.name} --- {item.date.toLocaleDateString()}{" "}
            --- {item.contactmail}
            <a
              href={item.contentform}
              target="_blank"
              rel="noopener noreferrer"
              className="mainbox__list__a"
            >
              Voir plus
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
          className="dossierdepresse__content__btn dossieruser__btn dossierdepresse__btn "
          onClick={onClick}
          id={`btnRetour__${number}`}
        >
          Retour
        </button>
      </div>
    </div>
  );
}

export default DemandesAd;
