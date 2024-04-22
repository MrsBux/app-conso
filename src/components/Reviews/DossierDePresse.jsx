import React, { useState } from "react";
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

  const press = [
    {
      name: "Article Terre de Vins",
      date: new Date(2022, 6, 7),
      lien: "https://www.google.com",
    },
    {
      name: "Mention Blog",
      date: new Date(2024, 1, 4),
      lien: "https://www.google.com",
    },
    {
      name: "Reportage la Provence",
      date: new Date(2023, 2, 12),
      lien: "https://www.google.com",
    },
    {
      name: "Article Terre de Vins",
      date: new Date(2022, 6, 7),
      lien: "https://www.google.com",
    },
    {
      name: "Mention Blog",
      date: new Date(2024, 1, 4),
      lien: "https://www.google.com",
    },
    {
      name: "Reportage la Provence",
      date: new Date(2023, 2, 12),
      lien: "https://www.google.com",
    },
    {
      name: "Article Terre de Vins",
      date: new Date(2022, 6, 7),
      lien: "https://www.google.com",
    },
    {
      name: "Mention Blog",
      date: new Date(2024, 1, 4),
      lien: "https://www.google.com",
    },
    {
      name: "Reportage la Provence",
      date: new Date(2023, 2, 12),
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
            onClick={() =>
              handleClick(<Press press={press} onClick={handleReturnClick} />)
            }
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
