import React, { useState, useEffect } from "react";
import bch2020 from "../../assets/bch2020.webp";
import bch2017 from "../../assets/bch2017.webp";
import bchR2018 from "../../assets/bchR2018.webp";
import ModalT from "../ModalT";
import BtnSupprimer from "../BtnSupprimer";
import BtnModifier from "../BtnModifier";

import DemandesAd from "../DashboardMenuAdmin/DossierDemandesAdmin/DemandesAd";
import BookingAd from "../DashboardMenuAdmin/DossierDemandesAdmin/BookingAd";
import OrderList from "../OrderList";
import BookingList from "../BookingList";

import "../../style/css/dashboardboard.css";

function DashboardBoardAdmin({}) {
  const [numberofUsers, setNumberofUsers] = useState(0);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState({});
  const [lastOrder, setLastOrder] = useState({});
  const [bookings, setBookings] = useState({});
  const [lastBooking, setLastBooking] = useState({});

  useEffect(() => {
    handleCount();
    getUsers();
    getOrders();
    getBookings();
  }, []);
  const handleAdmiBtn = () => {
    console.log("click");
  };

  const handleCount = async () => {
    console.log("Comptage des utilisateurs...");

    try {
      const response = await fetch("http://localhost:3000/api/user/count");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setNumberofUsers(data.userCount);
      console.log(`Nombre d'utilisateurs : ${data.userCount}`);
    } catch (err) {
      console.error(
        "Une erreur s'est produite lors du comptage des utilisateurs:",
        err
      );
    }
  };

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/user/all");
      const data = await response.json();
      setUsers(data);
      console.log(data);
      console.log(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  };

  const getOrders = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/order/All");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("data : ", data);
      setOrders(data);
      console.log(orders);
      setLastOrder(data[0]);
      console.log(lastOrder);
    } catch (err) {
      console.error(
        "Une erreur s'est produite lors du comptage des commandes:",
        err
      );
    }
  };

  const getBookings = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/formbooking/All");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("data : ", data);
      setBookings(data);
      console.log(bookings);
      setLastBooking(data[0]);
      console.log(lastBooking);
    } catch (err) {
      console.error(
        "Une erreur s'est produite lors du comptage des commandes:",
        err
      );
    }
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
          <h5 className="board__box__card2__title">{numberofUsers}</h5>
          <p className="board__box__card2__p">users</p>{" "}
          <ModalT
            title={"Fichier Client"}
            btnShow={<div className="board__box__card2__btn"> Voir tous</div>}
            modalContent={
              <div className="listofusers">
                {users.map((item, index) => (
                  <li key={index} className="mainbox__list__li">
                    {item.name} --- {item.firstName} --- {item.points} points
                    --- {item.email}{" "}
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
            <li key={lastOrder._id} className="mainbox__list__li">
              {lastOrder.nom} -{lastOrder.email} - numéro de commande :
              {lastOrder._id}
            </li>
          </div>

          <ModalT
            title={"Toutes les commandes"}
            btnShow={<div className="board__box__card1__btn"> Voir toutes</div>}
            modalContent={<OrderList orders={orders} />}
            btnname={"Retour"}
          />
        </div>

        <div className="board__box__card4  board__box__card">
          <h5 className="board__box__card4__title"> Réservations</h5>
          <div className="board__box__card4__box">
            <li key={lastBooking._id} className="mainbox__list__li">
              {lastBooking.nom} ---
              {lastBooking.prestation}
            </li>
          </div>

          <ModalT
            title={"Toutes les réservations"}
            btnShow={<div className="board__box__card4__btn"> Voir toutes</div>}
            modalContent={<BookingList bookings={bookings} />}
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
