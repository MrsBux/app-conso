import React from "react";
import bch2020 from "../../assets/bch2020.webp";
import bch2017 from "../../assets/bch2017.webp";
import bchR2018 from "../../assets/bchR2018.webp";
import ModalT from "../ModalT";
import Invitations from "./Invitations";

import Factures from "../DashboardMenu/Factures";

import "../../style/css/dashboardboard.css";

function DashboardBoard({
  lastc,
  numberofpoints,
  prenom,
  nom,
  email,
  datei,
  vincoeur,
}) {
  const handleBtn = () => {
    console.log("click");
  };

  const factures = [
    { name: "name 1", date: new Date(2024, 4, 1), file: "", montant: 30 },
    { name: "name 2", date: new Date(2024, 5, 1), file: "", montant: 120 },
    { name: "name 3", date: new Date(2024, 4, 8), file: "", montant: 60 },
  ];

  const invitations = [
    { name: "name 1", date: new Date(2024, 4, 1), file: "" },
    { name: "name 2", date: new Date(2024, 5, 1), file: "" },
    { name: "name 3", date: new Date(2024, 4, 8), file: "" },
  ];

  return (
    <section className="board">
      <div className="board__box">
        <div className="board__box__card1 board__box__card">
          <h5 className="board__box__card1__title"> Dernière commande</h5>
          <p className="board__box__card1__lastc"> Dernière commande {lastc}</p>
          <ModalT
            title={"Toutes les factures"}
            btnShow={<div className="board__box__card1__btn">Voir toutes</div>}
            modalContent={<Factures factures={factures} onClick={handleBtn} />}
            btnname={"Fermer"}
          />
        </div>
        <div className="board__box__card2 board__box__card">
          <h5 className="board__box__card2__title">{numberofpoints}273</h5>
          <p className="board__box__card2__p"> pts</p>
          <ModalT
            title={"Programme de fidélité"}
            btnShow={
              <div className="board__box__card2__btn">
                {" "}
                Programme de fidélité
              </div>
            }
            modalContent={
              <div>
                <p>Bienvenue dans notre programme de fidélité exclusif! </p>
                <p>
                  Chez nous, chaque achat compte et vous rapproche de
                  délicieuses récompenses. Voici comment cela fonctionne :
                </p>
                <ul>
                  <li>
                    <strong>1 point par euro dépensé</strong>: Chaque euro
                    dépensé lors de vos achats vous rapporte 1 point. Plus vous
                    achetez, plus vous accumulez de points.
                  </li>
                  <li>
                    <strong>250 points</strong>: Vin de France offert ou frais
                    de livraison gratuits.
                  </li>
                  <li>
                    <strong>500 points</strong>: Lirac offert ou frais de
                    livraison gratuits.
                  </li>
                  <li>
                    <strong>750 points</strong>: Châteauneuf-du-Pape offert.
                  </li>
                  <li>
                    <strong>1000 points</strong>: Prestation surprise au choix.
                  </li>
                </ul>
                <p>
                  C'est simple : plus vous achetez, plus vous êtes récompensé!{" "}
                </p>{" "}
                <p>
                  Profitez de nos vins exceptionnels tout en bénéficiant
                  d'avantages exclusifs grâce à notre programme de fidélité.{" "}
                </p>{" "}
                <p>
                  Commencez dès aujourd'hui et découvrez le plaisir de la
                  dégustation récompensée!
                </p>
              </div>
            }
            btnname={"Fermer"}
          />
        </div>
        <div className="board__box__card3   board__box__card">
          <h5 className="board__box__card3__title"> Mon compte</h5>
          <div className="board__box__card3__px">
            <div className="board__box__card3__px__name">
              <p className="board__box__card3__px__prenom  board__box__card3__px">
                {" "}
                Camille
                {prenom}
              </p>
              <p className="board__box__card3__px__nom  board__box__card3__px">
                {" "}
                Siesse
                {nom}
              </p>
            </div>
          </div>
          <p className="board__box__card3__email board__box__card3__px">
            {" "}
            camille.siesse@gmail.com
            {email}
          </p>
          <p className="board__box__card3__dateinscription board__box__card3__px">
            {datei} 12/04/2024
          </p>
          <p className="board__box__card3__vincoeur board__box__card3__px">
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
          </a>

          <ModalT
            btnShow={<div className="board__box__card4__btn">Voir toutes</div>}
            modalContent={
              <Invitations invitations={invitations} onClick={handleBtn} />
            }
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

export default DashboardBoard;
