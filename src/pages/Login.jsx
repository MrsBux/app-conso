import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "../style/css/login.css";
import btle from "../assets/ch9R.webp";
import btle2 from "../assets/ch9R15.webp";

function Login() {
  const handleSubmit = () => {
    console.log("Click Sbmit");
  };

  return (
    <div className="login" onSubmit={handleSubmit}>
      <div className="login__btlles">
        <img
          src={btle}
          alt="bouteille de chateauneuf du pape"
          className="login__btlles__img"
        ></img>
        <img
          src={btle2}
          alt="goulot de la bouteille"
          className="login__btlles__img img2"
        ></img>
      </div>

      <Form className="login__form">
        <h3 className="login__form__title"> Se connecter</h3>

        <Form.Group className="login__form__groupe">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            id="email_login"
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>

        <Form.Group className="login__form__groupe">
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="password_login"
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <button
          name={"Envoyer"}
          className="login__form__btn btnG"
          type="submit"
        >
          Se connecter{" "}
        </button>
        <Link to="/signup">
          <p className="login__register"> Créer un compte</p>{" "}
        </Link>
      </Form>
    </div>
  );
}

export default Login;
