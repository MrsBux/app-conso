import React from "react";
import Form from "react-bootstrap/Form";
import "../style/css/form.css";

function FormContact() {
  return (
    <Form className="form">
      <h3 className="form__title"> Une question ? Ecrivez-nous !</h3>

      <Form.Group className="form__groupe" controlId="email_contact_home">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <div className="form__identite">
        <Form.Group
          className="form__identite__groupe"
          controlId="nom_contact_home"
        >
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="Nom" />
        </Form.Group>

        <Form.Group
          className="form__identite__groupe"
          controlId="prenom_contact_home"
        >
          <Form.Label>Prénom</Form.Label>
          <Form.Control type="text" placeholder="Prénom" />
        </Form.Group>
      </div>

      <Form.Group className="form__groupe" controlId="message_contact_home">
        <Form.Label>Votre message</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Entrez votre message"
        />
      </Form.Group>
    </Form>
  );
}

export default FormContact;
