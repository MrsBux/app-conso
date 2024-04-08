import React from "react";
import Form from "react-bootstrap/Form";
import "../../style/css/form.css";

function FormGFV() {
  return (
    <Form className="form__gfv">
      <h3 className="form__title__gfv">
        {" "}
        Envie de rejoindre l'aventure ? Rejoignez notre GFV !
      </h3>

      <Form.Group className="form__groupe" controlId="email_contact_gfv">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <div className="form__identite">
        <Form.Group
          className="form__identite__groupe"
          controlId="nom_contact_gfv"
        >
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="Nom" />
        </Form.Group>

        <Form.Group
          className="form__identite__groupe"
          controlId="prenom_contact_gfv"
        >
          <Form.Label>Prénom</Form.Label>
          <Form.Control type="text" placeholder="Prénom" />
        </Form.Group>
      </div>
    </Form>
  );
}

export default FormGFV;
