import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "../style/css/login.css";
import btle from "../assets/ch9R.webp";
import btle2 from "../assets/ch9R15.webp";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("tokenUser");
    const tokenExpiry = localStorage.getItem("tokenUserExpiry");
    const currentTime = new Date().getTime();

    if (token && tokenExpiry && currentTime < tokenExpiry) {
      setIsLoggedIn(true);
    } else {
      localStorage.removeItem("tokenUser");
      localStorage.removeItem("tokenUserExpiry");
      setIsLoggedIn(false);
    }
  }, []);

  const navigate = useNavigate();
  // Redirection vers la page d'accueil
  navigate("/");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(
        `https://domconso-d13067f1e717.herokuapp.com/api/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la connexion au compte");
      }

      const data = await response.json();

      const tokenExpiry = new Date().getTime() + 6 * 60 * 60 * 1000; // 6 hours in milliseconds
      localStorage.setItem("tokenUser", data.tokenUser);
      localStorage.setItem("tokenUserExpiry", tokenExpiry);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("name", data.name);
      localStorage.setItem("email", email);
      localStorage.setItem("type", "user");

      const idUser = data.userId;
      setIsLoggedIn(true);
      alert("Connexion reussie");
    } catch (error) {
      console.error("Erreur lors de la connexion au compte :", error);
      setErrorMessage("Erreur lors de la connexion au compte");
    }
  };

  return (
    <div className="login">
      <div className="login__btlles">
        <img
          src={btle}
          alt="bouteille de chateauneuf du pape"
          className="login__btlles__img"
        />
        <img
          src={btle2}
          alt="goulot de la bouteille"
          className="login__btlles__img img2"
        />
      </div>

      <Form className="login__form" onSubmit={handleSubmit}>
        <h3 className="login__form__title">Se connecter</h3>
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
        {errorMessage && (
          <div className="login__form__error">{errorMessage}</div>
        )}
        <button name="Envoyer" className="login__form__btn btnG" type="submit">
          Se connecter
        </button>{" "}
        <Link to="/signup">
          <p className="login__register">Créer un compte</p>
        </Link>
      </Form>
    </div>
  );
}

export default Login;
