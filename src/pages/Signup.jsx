import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "../style/css/signup.css";
import btle from "../assets/lirac.webp";
import btle2 from "../assets/lirac13.webp";

function Signup() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page par défaut

    const formData = {
      email: event.target.elements.email_signup.value,
      password: event.target.elements.password_signup.value,
      firstname: event.target.elements.firstname.value,
      name: event.target.elements.name.value,
    };

    fetch(`https://domconso-d13067f1e717.herokuapp.com/api/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la création du compte");
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.token); // Stocke le token utilisateur dans le stockage local

        alert("Compte créé!");

        navigate("/login"); // Redirige vers la page de connexion après 3 secondes
      })
      .catch((error) => {
        console.error("Erreur lors de la création du compte :", error);
      });
  };

  return (
    <div className="signup">
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

      <Form className="signup__form" onSubmit={handleSubmit}>
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
            <Form.Control type="text" placeholder="Nom" id="name" />
          </Form.Group>

          <Form.Group className="form__identite__groupe signup__form__groupe">
            <Form.Label>Prénom</Form.Label>
            <Form.Control type="text" placeholder="Prénom" id="firstname" />
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
