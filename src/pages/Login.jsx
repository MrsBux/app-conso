import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "../style/css/login.css";
import btle from "../assets/ch9R.webp";
import btle2 from "../assets/ch9R15.webp";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      email: email,
      password: password,
    };

    fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la connexion au compte");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("tokenUser", data.tokenUser);
        const idUser = data.userId;
        window.location.href = `/dashboard/${idUser}`;
      })
      .catch((error) => {
        console.error("Erreur lors de la connexion au compte :", error);
      });
  };

  return (
    <div className="login">
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

      <Form className="login__form" onSubmit={handleSubmit}>
        <h3 className="login__form__title"> Se connecter</h3>

        <Form.Group className="login__form__groupe">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="login__form__groupe">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
