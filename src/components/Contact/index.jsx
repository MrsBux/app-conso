import React from "react";
import { Link } from "react-router-dom";
import "../../style/css/contact.css";
import FormContact from "../FormContact"; // Importer le composant de formulaire

function Contact() {
  return (
    <div className="contact">
      <h2 className="contact__title">RESTONS EN CONTACT</h2>
      <div className="contact__box">
        <FormContact />
        <div className="contact__box__btns">
          <div className="contact__box__btns__1">
            <Link to="/login">
              <h5 className="contact__box__btns__1__h">
                Créer un compte client fidélité / Se connecter à son compte
              </h5>{" "}
            </Link>
            <button className="contact__box__btns__1__btn btnc"> C</button>
          </div>
          <div className="contact__box__btns__2">
            <h5 className="contact__box__btns__2__h">
              S'abonner à la newsletter
            </h5>
            <button className="contact__box__btns__2__btn btnc"> N </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
