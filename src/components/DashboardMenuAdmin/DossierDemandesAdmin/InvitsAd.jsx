import React, { useState } from "react";
import "../../../style/css/dossierdepresse.css";
import "../../../style/css/pressandprices.css";

function InvitsAd({ invits, onClick }) {
  const [showAll, setShowAll] = useState(false);
  const sortedInvits = invits.slice().sort((a, b) => b.date - a.date);
  const displayedInvits = showAll ? sortedInvits : sortedInvits.slice(0, 6);

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="invits d mainbox">
      <h4 className="mainbox__title">
        Toutes les demandes d'invitations aux salons
      </h4>

      <ul className="mainbox__list">
        {displayedInvits.map((item, index) => (
          <li key={index} className="mainbox__list__li">
            {item.name} --- {item.salonname} ---{" "}
            {item.datesalon.toLocaleDateString()} ---
            {item.dateform.toLocaleDateString()}--- {item.contactmail} ---{" "}
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
        >
          Retour
        </button>
      </div>
    </div>
  );
}

export default InvitsAd;
