import React, { useState, useEffect } from "react";
import "../../style/css/dossierdepresse.css";

import Awards from "./Awards";
import Press from "./Press";

function DossierDePresse() {
  const prix = [
    {
      name: "Médaille d'argent Concours Orange",
      vin: "Ch9 2019",
      date: new Date(2024, 4, 1),
      lien: "https://www.google.com",
    },
    {
      name: "92 - WineAdvocate",
      vin: " Ch9 2020",
      date: new Date(2024, 2, 10),
      lien: "https://www.google.com",
    },
    {
      name: "Médaille d'or Terre de vins",
      vin: "Lirac 2023",
      date: new Date(2024, 3, 10),
      lien: "https://www.google.com",
    },
  ];

  const [visibleComponent, setVisibleComponent] = useState(null);

  const handleClick = (component) => {
    setVisibleComponent(component);
  };

  const handleReturnClick = (component) => {
    setVisibleComponent(null);
  };

  return (
    <div className="dossierdepresse">
      {!visibleComponent && ( // Afficher les boutons seulement si visibleComponent est null
        <>
          <button
            className="dossierdepresse__btn"
            onClick={() => handleClick(<Press onClick={handleReturnClick} />)}
          >
            Revue de presse
          </button>
          <button
            className="dossierdepresse__btn"
            onClick={() =>
              handleClick(<Awards prix={prix} onClick={handleReturnClick} />)
            }
          >
            Récompenses
          </button>
        </>
      )}
      <div className="dossierdepresse__content">{visibleComponent}</div>
    </div>
  );
}

export default DossierDePresse;
