import React from "react";
import "../../style/css/contact.css";
import FormContact from "../FormContact"; // Importer le composant de formulaire

function Contact() {
  const formFields = [
    {
      controlId: "email_contact_home",
      type: "email",
      placeholder: "name@example.fr",
      label: "Email",
    },
    {
      controlId: "nom_contact_home",
      type: "text",
      placeholder: "Nom",
      label: "Nom",
    },
    {
      controlId: "prenom_contact_home",
      type: "text",
      placeholder: "Prénom",
      label: "Prénom",
    },
    {
      controlId: "message_contact_home",
      type: "text",
      placeholder: "Votre message",
      label: "Votre message",
    },
  ];

  return (
    <div className="contact">
      <h2 className="contact__title">RESTONS EN CONTACT</h2>
      <div className="contact__box">
        <FormContact />
        <div className="contact__box__btns">
          <div className="contact__box__btns__1">
            <h5 className="contact__box__btns__1__h">
              Créer un compte client fidélité / Se connecter à son compte
            </h5>
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
