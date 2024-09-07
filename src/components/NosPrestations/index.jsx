import React from "react";
import { Link } from "react-router-dom";
import "../../style/css/nosprestations.css";
import picturePrestations from "../../assets/prestationimg.webp";
import Btn from "../Btn";
import ModalT from "../ModalT";
import ReservationForm from "../ReservationsForm";

function NosPrestations() {
  const handleclick = () => {
    window.location.href = "/prestations";
  };

  return (
    <div className="nosprestations">
      <div className="nosprestations__box">
        {" "}
        <h2 className="nosprestations__box__title"> NOS PRESTATIONS</h2>
        <p className="nosprestations__box__p">
          Au cœur de notre domaine viticole, nous offrons une palette de
          prestations conçues pour enrichir votre expérience oenologique et vous
          immerger dans l'univers fascinant de la vigne et du vin. Que vous
          soyez seul, en petit groupe ou en grande assemblée, nos dégustations
          s'adaptent à vos envies, allant de sessions intimes au caveau à des
          explorations oenologiques approfondies, révélant les subtilités de nos
          crus.
        </p>
        <p className="nosprestations__box__p">
          Plongez au cœur de notre terroir avec une visite guidée : parcourez
          les vignes qui étendent leurs racines dans une terre chargée
          d'histoire, explorez les caves où repose le fruit de notre labeur, et
          découvrez les secrets de notre domaine, véritable écrin de
          savoir-faire ancestral. Pour une expérience immersive, nous proposons
          des dégustations directement au sein des vignes, là où le vin prend
          racine, ou optez pour un accord mets et vins, un véritable ballet
          gustatif où chaque bouchée et chaque gorgée se répondent en harmonie.
        </p>
        <p className="nosprestations__box__p">
          Soucieux de répondre à vos attentes les plus spécifiques, nos
          prestations sont entièrement personnalisables. Et pour partager cette
          passion, quoi de mieux qu'un bon cadeau ? Offrez une expérience
          inoubliable, une porte ouverte sur l'univers du vin, à travers nos
          différentes activités.
        </p>
        <div className="nosprestations__box__btns">
          <Btn txt_btnG={"En savoir plus !"} onclick={handleclick} />

          <ModalT
            btnShow={"Réserver votre prestation"}
            id={"btnG"}
            modalContent={<ReservationForm />}
            title={<h3>Demande de réservation</h3>}
            btnname="retour"
          />
        </div>
      </div>

      <img src={picturePrestations} className="nosprestations__img"></img>
    </div>
  );
}

export default NosPrestations;
