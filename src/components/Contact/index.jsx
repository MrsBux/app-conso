import React from "react";
import { Link } from "react-router-dom";
import "../../style/css/contact.css";
import FormContact from "../FormContact"; // Importer le composant de formulaire
import ModalT from "../ModalT";

function Contact() {
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
            <Link to="/login">
              <button className="contact__box__btns__1__btn btnc"> C</button>
            </Link>
          </div>
          <div className="contact__box__btns__2">
            <h5 className="contact__box__btns__2__h">
              S'abonner à la newsletter
            </h5>
            <ModalT
              btnShow={
                <button className="contact__box__btns__2__btn btnc"> N </button>
              }
              modalContent={"Hello"}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
