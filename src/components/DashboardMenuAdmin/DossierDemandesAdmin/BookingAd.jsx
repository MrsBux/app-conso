import React, { useState } from "react";
import "../../../style/css/dossierdepresse.css";
import "../../../style/css/pressandprices.css";

function BookingAd({ bookings, onClick, number }) {
  const [showAll, setShowAll] = useState(false);
  const sortedBookings = bookings.slice().sort((a, b) => b.date - a.date);
  const displayedBookings = showAll
    ? sortedBookings
    : sortedBookings.slice(0, 6);

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  //     name: "name 3",
  //     prestation: "Degust",
  //     datepresta: new Date(2024, 5, 1),
  //     dateform: new Date(2024, 3, 1),
  //     contactmail: "email@test.fr",
  //     contacttel: "06 09 09 08 07",
  //   },

  return (
    <div className="factures mainbox">
      <h4 className="mainbox__title">Bookings</h4>

      <ul className="mainbox__list">
        {displayedBookings.map((item, index) => (
          <li key={index} className="mainbox__list__li">
            {item.name} --- {item.prestation} ---{" "}
            {item.datepresta.toLocaleDateString()} ---
            {item.dateform.toLocaleDateString()}--- {item.contactmail} ---{" "}
            {item.contacttel}
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
          className="dossierdepresse__content__btn dossieruser__btn dossierdepresse__btn dossierdepresse__btn"
          onClick={onClick}
          id={`btnRetour__${number}`}
        >
          Retour
        </button>
      </div>
    </div>
  );
}

export default BookingAd;
