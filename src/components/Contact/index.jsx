import React from "react";
import { Link } from "react-router-dom";
import "../../style/css/contact.css";
import FormContact from "../FormContact"; // Importer le composant de formulaire
import ModalT from "../ModalT";
import FormInscriptionNL from "./FormInscriptionNL";

function Contact() {
  const handleClick = () => {
    window.location.href = "/login";
  };

  return (
    <div className="contact">
      <h2 className="contact__title">RESTONS EN CONTACT</h2>
      <div className="contact__box">
        <FormContact />
        <div className="contact__box__btns">
          <div className="contact__box__btns__1">
            <h5 className="contact__box__btns__1__h">
              Créer un compte client fidélité / Se connecter à son compte
            </h5>{" "}
            <button
              className="contact__box__btns__1__btn btnc"
              onClick={() => (window.location.href = "/login")}
            >
              {" "}
              Compte
            </button>
          </div>
          <div className="contact__box__btns__2">
            <h5 className="contact__box__btns__2__h">
              S'abonner à la newsletter
            </h5>
            <ModalT
              btnShow={"Newsletter"}
              id={"contact__box__btns__2__btn"}
              modalContent={<FormInscriptionNL />}
              title={"Inscription à la Newsletter ! "}
              btnname={"Je valide"}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
