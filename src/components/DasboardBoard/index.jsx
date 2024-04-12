import React from "react";
import bch2020 from "../../assets/bch2020.webp";
import bch2017 from "../../assets/bch2017.webp";
import bchR2018 from "../../assets/bchR2018.webp";

import "../../style/css/dashboardboard.css";

function DashboardBoard({
  lastc,
  numberofpoints,
  prenom,
  nom,
  email,
  datei,
  vincoeur,
  invits,
}) {
  return (
    <section className="board">
      <div className="board__box">
        <div className="board__box__card1 board__box__card">
          <h5 className="board__box__card1__title"> Dernière commande</h5>
          <p className="board__box__card1__lastc"> Dernière commande {lastc}</p>
          <button className="board__box__card1__btn">Voir toutes</button>
        </div>
        <div className="board__box__card2 board__box__card">
          <h5 className="board__box__card2__title">{numberofpoints}273</h5>
          <p className="board__box__card2__p"> pts</p>
          <button className="board__box__card2__btn">
            {" "}
            Programme de fidélité
          </button>
        </div>
        <div className="board__box__card3   board__box__card">
          <h5 className="board__box__card3__title"> Mon compte</h5>
          <div className="board__box__card3__pn">
            <p className="board__box__card3__pn__prenom  board__box__card3__p">
              {" "}
              Camille
              {prenom}
            </p>
            <p className="board__box__card3__pn__nom  board__box__card3__p">
              {" "}
              Siesse
              {nom}
            </p>
          </div>
          <p className="board__box__card3__email board__box__card3__p">
            {" "}
            camille.siesse@gmail.com
            {email}
          </p>
          <p className="board__box__card3__dateinscription board__box__card3__p">
            {datei} 12/04/2024
          </p>
          <p className="board__box__card3__vincoeur board__box__card3__p">
            Mon vin préféré :{vincoeur}
          </p>
        </div>
        <div className="board__box__card4  board__box__card">
          <h5 className="board__box__card4__title">
            {" "}
            Mes invitations sur le salons
          </h5>
          <a href="" className="board__box__card4__invit">
            {" "}
            Invits
            {invits}
          </a>

          <button className="board__box__card4__btn">Voir toutes</button>
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

export default DashboardBoard;
