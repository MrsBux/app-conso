import React from "react";
import bch2020 from "../../assets/bch2020.webp";
import bch2017 from "../../assets/bch2017.webp";
import bchR2018 from "../../assets/bchR2018.webp";
import ModalT from "../ModalT";

import "../../style/css/dashboardboard.css";

function DashboardBoardAdmin({
  lastd,
  numberofclients,
  lastcommande,
  bookings,
}) {
  return (
    <section className="board">
      <div className="board__box">
        <div className="board__box__card1 board__box__card">
          <h5 className="board__box__card1__title"> Dernières demandes</h5>
          <p className="board__box__card1__lastc"> Dernière demande {lastd}</p>
          <ModalT
            btnShow={<div className="board__box__card1__btn">Voir toutes</div>}
            modalContent={"Toutes les demandes"}
          />
        </div>
        <div className="board__box__card2 board__box__card">
          <h5 className="board__box__card2__title">{numberofclients}43</h5>
          <p className="board__box__card2__p">users</p>{" "}
          <ModalT
            btnShow={<div className="board__box__card2__btn"> Voir tous</div>}
            modalContent={"Users"}
          />
        </div>
        <div className="board__box__card3   board__box__card">
          <h5 className="board__box__card3__title"> Dernières commandes</h5>
          <p className="board__box__card3__pn">
            {" "}
            Dernière commande
            {lastcommande}
          </p>

          <ModalT
            btnShow={<div className="board__box__card1__btn"> Voir toutes</div>}
            modalContent={"commandes"}
          />
        </div>
        <div className="board__box__card4  board__box__card">
          <h5 className="board__box__card4__title"> Réservations</h5>
          <a href="" className="board__box__card4__invit">
            {" "}
            Booking
            {bookings}
          </a>

          <ModalT
            btnShow={<div className="board__box__card4__btn"> Voir toutes</div>}
            modalContent={"Réservations"}
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
