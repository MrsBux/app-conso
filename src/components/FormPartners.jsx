import react from "react";
import Form from "react-bootstrap/Form";
import "../style/css/formpartners.css";

function FormPartners() {
  return (
    <Form className="formpartner">
      <h3 className="formpartner__title"> DEVENIR PARTENAIRE?</h3>

      <Form.Group className="formpartner__groupe" controlId="email_partner">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <div className="formpartner__identite">
        <Form.Group
          className="formpartner__identite__groupe"
          controlId="nom_partner"
        >
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="Nom" />
        </Form.Group>

        <Form.Group
          className="formpartner__identite__groupe"
          controlId="prenom_partner"
        >
          <Form.Label>Prénom</Form.Label>
          <Form.Control type="text" placeholder="Prénom" />
        </Form.Group>
      </div>

      <Form.Group
        className="formpartner__groupe"
        controlId="profession_partner"
      >
        <Form.Label>Profession</Form.Label>
        <Form.Control type="text" placeholder="Profession" />
      </Form.Group>

      <Form.Group className="formpartner__groupe" controlId="message_partner">
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

export default FormPartners;
