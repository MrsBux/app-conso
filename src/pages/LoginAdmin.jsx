import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../style/css/loginadmin.css";
import btle from "../assets/ch9B.webp";
import btle2 from "../assets/ch9B15r.webp";

function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);

        // Store the token in local storage
        localStorage.setItem("token", data.token);

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
    </div>
  );
}

export default LoginAdmin;
