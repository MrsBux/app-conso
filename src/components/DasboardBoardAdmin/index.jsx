import React, { useState, useEffect, useMemo } from "react";
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
  const [request, setRequest] = useState([]);
  const [lastRequest, setLastRequest] = useState({});

  useEffect(() => {
    handleCount();
    getUsers();
    getOrders();
    getBookings();
    getAllAskings();
  }, []);

  const sortedRequest = useMemo(() => {
    return [...request].sort((a, b) => new Date(b.Date) - new Date(a.Date));
  }, [request]);
  const handleAdmiBtn = () => {
    console.log("click");
  };

  const handleCount = async () => {
    console.log("Comptage des utilisateurs...");

    try {
      const response = await fetch(
        `https://domconso-d13067f1e717.herokuapp.com/api/user/count`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setNumberofUsers(data.userCount);
    } catch (err) {
      console.error(
        "Une erreur s'est produite lors du comptage des utilisateurs:",
        err
      );
    }
  };

  const getUsers = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `https://domconso-d13067f1e717.herokuapp.com/api/user/all`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  };

  const getOrders = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `https://domconso-d13067f1e717.herokuapp.com/api/order/All`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      setOrders(data);

      setLastOrder(data[data.length - 1]);
    } catch (err) {
      console.error(
        "Une erreur s'est produite lors du comptage des commandes:",
        err
      );
    }
  };

  const getBookings = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `https://domconso-d13067f1e717.herokuapp.com/api/formbooking/All`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      setBookings(data);

      setLastBooking(data[0]);
    } catch (err) {
      console.error(
        "Une erreur s'est produite lors du comptage des commandes:",
        err
      );
    }
  };

  const SortedRequestList = ({ requests }) => {
    const sortedRequest = [...requests].sort(
      (a, b) => new Date(b.Date) - new Date(a.Date)
    );
  };

  const getAllAskings = async () => {
    const token = localStorage.getItem("token");

    const routes = [
      "/api/formcontact/All",
      "/api/formGFV/All",
      "/api/forminvit/All",
      "/api/formpartner/All",
    ];

    try {
      const allData = await Promise.all(
        routes.map(async (route) => {
          const response = await fetch(
            `https://domconso-d13067f1e717.herokuapp.com${route}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (!response.ok) {
            throw new Error(
              `HTTP error! status: ${response.status} for route: ${route}`
            );
          }
          const data = await response.json();
          return data.map((item) => ({
            ...item,
            formType: route.split("/")[2],
          }));
        })
      );

      const combinedData = allData.flat();

      setRequest(combinedData);

      setLastRequest(combinedData[combinedData.length - 1]);
    } catch (err) {
      console.error(
        "Une erreur s'est produite lors de la récupération des données:",
        err
      );
    } finally {
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${day}/${month}/${year} à ${hours}:${minutes}`;
  };

  return (
    <section className="board">
      <div className="board__box">
        <div className="board__box__card1 board__box__card">
          <h5 className="board__box__card1__title"> Dernières demandes</h5>
          <div className="board__box__card1__lastc">
            Type : {lastRequest.type} - {lastRequest.nom} -{" "}
            {formatDate(lastRequest.Date)}
          </div>
          <ModalT
            btnShow={<div className="board__box__card1__btn">Voir toutes</div>}
            title={"Demandes utilisateurs"}
            modalContent={
              <div>
                {sortedRequest.map((item, index) => (
                  <div key={index}>
                    {item.type} - {item.nom} - {item.prenom} - {item.email} -{" "}
                    {formatDate(item.Date)} -{" "}
                    {item.message ? item.message : "aucun message"}{" "}
                  </div>
                ))}
              </div>
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
