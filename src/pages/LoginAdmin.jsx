import React from "react";
import Form from "react-bootstrap/Form";
import "../style/css/loginadmin.css";
import btle from "../assets/ch9B.webp";
import btle2 from "../assets/ch9B15r.webp";

function LoginAdmin() {
  const handleSubmit = () => {
    console.log("Click Sbmit");
  };

  return (
    <div className="loginadmin" onSubmit={handleSubmit}>
      <div className="loginadmin__btlles">
        <img
          src={btle}
          alt="bouteille de chateauneuf du pape"
          className="loginadmin__btlles__img"
        ></img>
        <img
          src={btle2}
          alt="goulot de la bouteille"
          className="loginadmin__btlles__img imgadmin2"
        ></img>
      </div>

      <Form className="loginadmin__form">
        <h3 className="loginadmin__form__title"> Se connecter</h3>

        <Form.Group className="loginadmin__form__groupe">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            id="inputemail"
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>

        <Form.Group className="loginadmin__form__groupe">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <button
          name={"Envoyer"}
          className="loginadmin__form__btn btnG"
          type="submit"
        >
          Se connecter{" "}
        </button>
      </Form>
    </div>
  );
}

export default LoginAdmin;
