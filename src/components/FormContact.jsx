import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../style/css/form.css";

function FormContact() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      nom,
      prenom,
      email,
      message,
    };

    try {
      const response = await fetch(
        "http://localhost:3000/api/formcontact/post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire");
      }

      setStatusMessage("Formulaire soumis avec succès !");
      setNom("");
      setPrenom("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      setStatusMessage("Erreur lors de l'envoi du formulaire.");
    }
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <h3 className="form__title">Une question ? Écrivez-nous !</h3>

      <Form.Group className="form__groupe" controlId="email_contact_home">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <div className="form__identite">
        <Form.Group
          className="form__identite__groupe"
          controlId="nom_contact_home"
        >
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          className="form__identite__groupe"
          controlId="prenom_contact_home"
        >
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </Form.Group>
      </div>

      <Form.Group className="form__groupe" controlId="message_contact_home">
        <Form.Label>Votre message</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Entrez votre message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>

      {statusMessage && <div className="form__status">{statusMessage}</div>}

      <button type="submit" id="btnGV">
        Envoyer
      </button>
    </Form>
  );
}

export default FormContact;
