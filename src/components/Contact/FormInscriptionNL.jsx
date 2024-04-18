import React from "react";
import Form from "react-bootstrap/Form";

function FormInscriptionNL() {
  return (
    <div className="FIN">
      {" "}
      <Form className="FIN__form">
        <p className="FIN__form__p">
          {" "}
          2 Newsletter par an et pas de spams, promis !
        </p>

        <Form.Group
          className="FIN__form__groupe"
          controlId="email_contact_home"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default FormInscriptionNL;
