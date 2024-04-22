import React, { useState } from "react";
import "../../../style/css/dossierdepresse.css";

import DemandesAd from "./DemandesAd";
import CommandesAd from "./CommandesAd";
import BookingAd from "./BookingAd";
import InvitsAd from "./InvitsAd";

function DossierAdmin() {
  const commandes = [
    {
      name: "name 1",
      date: new Date(2024, 4, 1),
      detail: " 1 lirac 2 pitchottes",
      montant: 30,
    },
    {
      name: "name 2",
      date: new Date(2024, 5, 1),
      detail: " 6 chateauneuf 2019",
      montant: 150,
    },
    {
      name: "name 3",
      date: new Date(2024, 4, 8),
      detail: "2 chateauneuf 2018",
      montant: 60,
    },
  ];

  const bookings = [
    {
      name: "name 1",
      prestation: "Degust",
      datepresta: new Date(2024, 5, 1),
      dateform: new Date(2024, 3, 1),
      contactmail: "email@test.fr",
      contacttel: "06 09 09 08 07",
    },
    {
      name: "name 2",
      prestation: "Degust",
      datepresta: new Date(2024, 5, 1),
      dateform: new Date(2024, 3, 1),
      contactmail: "email@test.fr",
      contacttel: "06 09 09 08 07",
    },
    {
      name: "name 3",
      prestation: "Degust",
      datepresta: new Date(2024, 5, 1),
      dateform: new Date(2024, 3, 1),
      contactmail: "email@test.fr",
      contacttel: "06 09 09 08 07",
    },
  ];

  const invits = [
    {
      name: "name 1",
      salonname: "Degust",
      datesalon: new Date(2024, 3, 1),
      dateform: new Date(2024, 3, 1),
      contactmail: "email@test.fr",
    },
    {
      name: "name 1",
      salonname: "Degust",
      datesalon: new Date(2024, 5, 1),
      dateform: new Date(2024, 3, 1),
      contactmail: "email@test.fr",
    },
    {
      name: "name 1",
      salonname: "Degust",
      datesalon: new Date(2024, 5, 1),
      dateform: new Date(2024, 7, 1),
      contactmail: "email@test.fr",
    },
  ];

  const demandesdiv = [
    {
      nameForm: "name form",
      name: "Nom",
      date: new Date(2024, 3, 1),
      contactmail: "email@test.fr",
      contentform: "blabla",
    },
    {
      nameForm: "name form",
      name: "Nom",
      date: new Date(2024, 3, 1),
      contactmail: "email@test.fr",
      contentform: "blabla",
    },
    {
      nameForm: "name form",
      name: "Nom",
      date: new Date(2024, 3, 1),
      contactmail: "email@test.fr",
      contentform: "blabla",
    },
    {
      nameForm: "name form",
      name: "Nom",
      date: new Date(2024, 3, 1),
      contactmail: "email@test.fr",
      contentform: "blabla",
    },
    {
      nameForm: "name form",
      name: "Nom",
      date: new Date(2024, 3, 1),
      contactmail: "email@test.fr",
      contentform: "blabla",
    },
    {
      nameForm: "name form",
      name: "Nom",
      date: new Date(2024, 3, 1),
      contactmail: "email@test.fr",
      contentform: "blabla",
    },
    {
      nameForm: "name form",
      name: "Nom",
      date: new Date(2024, 3, 1),
      contactmail: "email@test.fr",
      contentform: "blabla",
    },
    {
      nameForm: "name form",
      name: "Nom",
      date: new Date(2024, 3, 1),
      contactmail: "email@test.fr",
      contentform: "blabla",
    },
    {
      nameForm: "name form",
      name: "Nom",
      date: new Date(2024, 3, 1),
      contactmail: "email@test.fr",
      contentform: "blabla",
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
    <div className="dossieradmin dossierdepresse">
      {!visibleComponent && ( // Afficher les boutons seulement si visibleComponent est null
        <>
          <button
            className="dossierdepresse__btn dossieradmin__btn"
            onClick={() =>
              handleClick(
                <CommandesAd
                  commandes={commandes}
                  onClick={handleReturnClick}
                />
              )
            }
          >
            Toutes les commandes
          </button>

          <button
            className="dossierdepresse__btn  dossieradmin__btn"
            onClick={() =>
              handleClick(
                <DemandesAd
                  demandes={demandesdiv}
                  onClick={handleReturnClick}
                />
              )
            }
          >
            Toutes les demandes diverses
          </button>

          <button
            className="dossierdepresse__btn  dossieradmin__btn"
            onClick={() =>
              handleClick(
                <BookingAd bookings={bookings} onClick={handleReturnClick} />
              )
            }
          >
            Toutes les réservations
          </button>

          <button
            className="dossierdepresse__btn  dossieradmin__btn"
            onClick={() =>
              handleClick(
                <InvitsAd invits={invits} onClick={handleReturnClick} />
              )
            }
          >
            Toutes les demandes d'invitations
          </button>
        </>
      )}
      <div className="dossieradmin__content">{visibleComponent}</div>
    </div>
  );
}

export default DossierAdmin;
