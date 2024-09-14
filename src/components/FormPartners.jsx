import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../style/css/formpartners.css";

function FormPartners() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      nom,
      prenom,
      email,
      profession,
      message,
    };

    console.log("formDta", formData);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/formpartner/post`,
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
      setProfession("");
      setMessage("");
      alert("Formulaire soumis avec succès");
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      setStatusMessage("Erreur lors de l'envoi du formulaire.");
    }
  };

  return (
    <Form className="formpartner" onSubmit={handleSubmit}>
      <h3 className="formpartner__title">DEVENIR PARTENAIRE?</h3>

      <Form.Group className="formpartner__groupe" controlId="email_partner">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <div className="formpartner__identite">
        <Form.Group
          className="formpartner__identite__groupe"
          controlId="nom_partner"
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
          className="formpartner__identite__groupe"
          controlId="prenom_partner"
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

      <Form.Group
        className="formpartner__groupe"
        controlId="profession_partner"
      >
        <Form.Label>Profession</Form.Label>
        <Form.Control
          type="text"
          placeholder="Profession"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="formpartner__groupe" controlId="message_partner">
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

export default FormPartners;
