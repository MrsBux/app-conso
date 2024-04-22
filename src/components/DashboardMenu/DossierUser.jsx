import React, { useState } from "react";
import "../../style/css/dossierdepresse.css";

import Factures from "./Factures";
import Commandes from "./Commandes";

function DossierUser() {
  const factures = [
    { name: "name 1", date: new Date(2024, 4, 1), file: "", montant: 30 },
    { name: "name 2", date: new Date(2024, 5, 1), file: "", montant: 120 },
    { name: "name 3", date: new Date(2024, 4, 8), file: "", montant: 60 },
  ];

  const commandes = [
    { name: "name 1", date: new Date(2024, 3, 1), file: "" },
    { name: "name 2", date: new Date(2024, 4, 1), file: "" },
    { name: "name 3", date: new Date(2024, 3, 8), file: "" },
  ];

  const [visibleComponent, setVisibleComponent] = useState(null);

  const handleClick = (component) => {
    setVisibleComponent(component);
  };

  const handleReturnClick = (component) => {
    setVisibleComponent(null);
  };

  return (
    <div className="dossieruser dossierdepresse">
      {!visibleComponent && ( // Afficher les boutons seulement si visibleComponent est null
        <>
          <button
            className="dossierdepresse__btn dossieruser__btn"
            onClick={() =>
              handleClick(
                <Commandes commandes={commandes} onClick={handleReturnClick} />
              )
            }
          >
            Toutes les commandes
          </button>
          <button
            className="dossierdepresse__btn  dossieruser__btn"
            onClick={() =>
              handleClick(
                <Factures factures={factures} onClick={handleReturnClick} />
              )
            }
          >
            Toutes les factures
          </button>
        </>
      )}
      <div className="dossieruser__content">{visibleComponent}</div>
    </div>
  );
}

export default DossierUser;
