import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "../style/css/signup.css";
import btle from "../assets/lirac.webp";
import btle2 from "../assets/lirac13.webp";

function Signup() {
  const handleSubmit = () => {
    console.log("Click Sbmit");
  };

  return (
    <div className="signup" onSubmit={handleSubmit}>
      <div className="signup__btlles">
        <img
          src={btle}
          alt="bouteille de chateauneuf du pape"
          className="signup__btlles__img"
        ></img>
        <img
          src={btle2}
          alt="goulot de la bouteille"
          className="signup__btlles__img img2"
        ></img>
      </div>

      <Form className="signup__form">
        <h3 className="signup__form__title"> Créer un compte client </h3>

        <Form.Group className="signup__form__groupe ">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            id="email_signup"
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>

        <div className="signup__form__groupe__id">
          <Form.Group className="form__identite__groupe signup__form__groupe">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Nom" id="nom_signup" />
          </Form.Group>

          <Form.Group className="form__identite__groupe signup__form__groupe">
            <Form.Label>Prénom</Form.Label>
            <Form.Control type="text" placeholder="Prénom" id="prenom_signup" />
          </Form.Group>
        </div>

        <Form.Group className="signup__form__groupe">
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="password_signup"
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <button
          name={"Envoyer"}
          className="signup__form__btn btnG"
          type="submit"
        >
          S'inscrire
        </button>
        <Link to="/login">
          <p className="signup__login"> J'ai déjà un compte </p>{" "}
        </Link>
      </Form>
    </div>
  );
}

export default Signup;
