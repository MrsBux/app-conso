import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "../style/css/login.css";
import btle from "../assets/ch9R.webp";
import btle2 from "../assets/ch9R15.webp";
import { useAuth } from "../store/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://domconso-d13067f1e717.herokuapp.com/api/user/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const tokenExpiry = new Date().getTime() + 6 * 60 * 60 * 1000;
        login("user", data.userId, data.tokenUser, tokenExpiry);
        alert("Connexion reussie");
        navigate("/");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Login failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErrorMessage("An error occurred during login");
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
        </button>
        <Link to="/signup">
          <p className="login__register">Créer un compte</p>
        </Link>
      </Form>
    </div>
  );
}

export default Login;
