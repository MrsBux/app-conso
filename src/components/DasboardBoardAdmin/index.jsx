import React from "react";
import bch2020 from "../../assets/bch2020.webp";
import bch2017 from "../../assets/bch2017.webp";
import bchR2018 from "../../assets/bchR2018.webp";
import ModalT from "../ModalT";
import BtnSupprimer from "../BtnSupprimer";
import BtnModifier from "../BtnModifier";

import DemandesAd from "../DashboardMenuAdmin/DossierDemandesAdmin/DemandesAd";
import CommandesAd from "../DashboardMenuAdmin/DossierDemandesAdmin/CommandesAd";
import BookingAd from "../DashboardMenuAdmin/DossierDemandesAdmin/BookingAd";

import "../../style/css/dashboardboard.css";

function DashboardBoardAdmin({}) {
  const handleAdmiBtn = () => {
    console.log("click");
  };

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
  const lastd = demandesdiv.slice(0, 1);

  const users = [
    {
      email: "user1@example.com",
      points: 4,
      name: "John",
      firstName: "Doe",
      address: "123 Main Street",
    },
    {
      email: "user2@example.com",
      points: 478,
      name: "Alice",
      firstName: "Smith",
      address: "456 Elm Street",
    },
    {
      email: "user3@example.com",
      points: 324,
      name: "Bob",
      firstName: "Johnson",
      address: "789 Oak Street",
    },
    {
      email: "user4@example.com",
      points: 142,
      name: "Emily",
      firstName: "Brown",
      address: "321 Pine Street",
    },
    {
      email: "user5@example.com",
      points: 22,
      name: "Michael",
      firstName: "Taylor",
      address: "654 Cedar Street",
    },
    {
      email: "user6@example.com",
      points: 221,
      name: "Sophia",
      firstName: "Martinez",
      address: "987 Maple Street",
    },
    {
      email: "user7@example.com",
      points: 2211,
      name: "Oliver",
      firstName: "Garcia",
      address: "246 Birch Street",
    },
  ];

  const numberofusers = users.length;

  const commandes = [
    { name: "name 1", date: new Date(2024, 3, 1), content: "1 ch9 rouge" },
    { name: "name 2", date: new Date(2024, 4, 1), content: "1 lirac" },
    { name: "name 3", date: new Date(2024, 3, 8), content: "2 pitchottes" },
  ];

  const lastc = commandes.slice(0, 1);

  const bookings = [
    {
      name: "name A",
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

  const lastb = bookings.slice(0, 1);
  return (
    <section className="board">
      <div className="board__box">
        <div className="board__box__card1 board__box__card">
          <h5 className="board__box__card1__title"> Dernières demandes</h5>
          <div className="board__box__card1__lastc">
            {lastd.map((item, index) => (
              <li key={index} className="mainbox__list__li">
                {item.nameForm} --- {item.name} ---{" "}
                {item.date.toLocaleDateString()} ---
                {item.contactmail}
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
          </div>
          <ModalT
            btnShow={<div className="board__box__card1__btn">Voir toutes</div>}
            title={"Demandes utilisateurs"}
            modalContent={
              <DemandesAd
                demandes={demandesdiv}
                onClick={handleAdmiBtn}
                number={1}
              />
            }
            btnname={"Retour"}
          />
        </div>

        <div className="board__box__card2 board__box__card">
          <h5 className="board__box__card2__title">{numberofusers}</h5>
          <p className="board__box__card2__p">users</p>{" "}
          <ModalT
            title={"Fichier Client"}
            btnShow={<div className="board__box__card2__btn"> Voir tous</div>}
            modalContent={
              <div className="listofusers">
                {users.map((item, index) => (
                  <li key={index} className="mainbox__list__li">
                    {item.name} --- {item.firstName} --- {item.points} points
                    --- {item.email} <BtnSupprimer />{" "}
                    <BtnModifier id="btnmodifadmin" />
                  </li>
                ))}
              </div>
            }
            btnname={"Fermer"}
          />
        </div>

        <div className="board__box__card3   board__box__card">
          <h5 className="board__box__card3__title"> Dernières commandes</h5>
          <div className="board__box__card3__pn">
            {lastc.map((item, index) => (
              <li key={index} className="mainbox__list__li">
                {item.name} --- {item.date.toLocaleDateString()} ---
                {item.contactmail}
                <a
                  href={item.contacttel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mainbox__list__a"
                >
                  Voir détails
                </a>
              </li>
            ))}
          </div>

          <ModalT
            title={"Toutes les commandes"}
            btnShow={<div className="board__box__card1__btn"> Voir toutes</div>}
            modalContent={
              <CommandesAd
                commandes={commandes}
                onClick={handleAdmiBtn}
                number={1}
              />
            }
            btnname={"Retour"}
          />
        </div>

        <div className="board__box__card4  board__box__card">
          <h5 className="board__box__card4__title"> Réservations</h5>
          <div className="board__box__card4__box">
            {lastb.map((item, index) => (
              <li key={index} className="mainbox__list__li">
                {item.name} --- {item.datepresta.toLocaleDateString()} ---
                {item.prestation}
                <a
                  href={item.content}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mainbox__list__a"
                >
                  Voir le détail
                </a>
              </li>
            ))}
          </div>

          <ModalT
            title={"Toutes les réservations"}
            btnShow={<div className="board__box__card4__btn"> Voir toutes</div>}
            modalContent={
              <BookingAd
                bookings={bookings}
                onClick={handleAdmiBtn}
                number={1}
              />
            }
            btnname={"Fermer"}
          />
        </div>
      </div>

      <div className="board__deco">
        <img src={bch2017} alt="bch" className="board__deco__img"></img>
        <img src={bchR2018} alt="bch" className="board__deco__img"></img>{" "}
        <img src={bch2020} alt="bch" className="board__deco__img"></img>{" "}
        <img src={bch2017} alt="bch" className="board__deco__img"></img>
        <img src={bch2017} alt="bch" className="board__deco__img"></img>
        <img src={bchR2018} alt="bch" className="board__deco__img"></img>{" "}
        <img src={bch2020} alt="bch" className="board__deco__img"></img>{" "}
        <img src={bch2017} alt="bch" className="board__deco__img"></img>
      </div>
    </section>
  );
}

export default DashboardBoardAdmin;
