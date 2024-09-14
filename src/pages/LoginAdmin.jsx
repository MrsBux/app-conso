import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "../style/css/loginadmin.css";
import btle from "../assets/ch9B.webp";
import btle2 from "../assets/ch9B15r.webp";

function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const tokenExpiry = localStorage.getItem("tokenExpiry");
    const currentTime = new Date().getTime();

    if (token && tokenExpiry && currentTime < tokenExpiry) {
      setIsLoggedIn(true);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiry");
      setIsLoggedIn(false);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://domconso-d13067f1e717.herokuapp.com/api/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();

        // Store the token in local storage with an expiration time of 6 hours
        const tokenExpiry = new Date().getTime() + 6 * 60 * 60 * 1000; // 6 hours in milliseconds
        localStorage.setItem("token", data.token);
        localStorage.setItem("tokenExpiry", tokenExpiry);
        localStorage.setItem("type", "adm");

        // Update state
        setIsLoggedIn(true);

        // Redirect or handle successful login
        window.location.href = "/dashboardadmin"; // Change the URL to your desired route
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
        setErrorMessage(errorData.error || "Login failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErrorMessage("An error occurred during login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiry");
    localStorage.removeItem("type");
    setIsLoggedIn(false);
    window.location.href = "/loginadmin"; // Redirect to login page
  };

  return (
    <div className="loginadmin">
      <div className="loginadmin__btlles">
        <img
          src={btle}
          alt="bouteille de chateauneuf du pape"
          className="loginadmin__btlles__img"
        />
        <img
          src={btle2}
          alt="goulot de la bouteille"
          className="loginadmin__btlles__img imgadmin2"
        />
      </div>

      {isLoggedIn ? (
        <div className="loginadmin__deco">
          {" "}
          <Link to="/home">
            <button
              className="loginadmin__deco__btn btnG"
              onClick={handleLogout}
            >
              Déconnexion
            </button>{" "}
          </Link>
        </div>
      ) : (
        <Form className="loginadmin__form" onSubmit={handleSubmit}>
          <h3 className="loginadmin__form__title">Se connecter</h3>

          <Form.Group className="loginadmin__form__groupe">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              id="inputemail"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="loginadmin__form__groupe">
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
            <div className="loginadmin__form__error">{errorMessage}</div>
          )}

          <button
            name="Envoyer"
            className="loginadmin__form__btn btnG"
            type="submit"
          >
            Se connecter
          </button>
        </Form>
      )}
    </div>
  );
}

export default LoginAdmin;
