import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../../style/css/form.css";

function FormGFV() {
  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [email, setEmail] = useState();
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      nom,
      prenom,
      email,
    };

    console.log(formData, "formData");

    try {
      const response = await fetch("http://localhost:3000/api/formGFV/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire");
      }
      alert("Formulaire envoyé !");
      setStatusMessage("Formulaire soumis avec succès !");
      setNom("");
      setPrenom("");
      setEmail("");
      window.location.reload();
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      setStatusMessage("Erreur lors de l'envoi du formulaire.");
    }
  };

  return (
    <Form className="form__gfv">
      <h3 className="form__title__gfv">
        {" "}
        Envie d'en savoir plus sur notre GFV ?
      </h3>

      <h4> Rentrez vos coordonnées et recevez la documentation explicative.</h4>

      <Form.Group className="form__groupe" controlId="email_contact_gfv">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <div className="form__identite">
        <Form.Group
          className="form__identite__groupe"
          controlId="nom_contact_gfv"
        >
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nom"
            onChange={(e) => setNom(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          className="form__identite__groupe"
          controlId="prenom_contact_gfv"
        >
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Prénom"
            onChange={(e) => setPrenom(e.target.value)}
          />
        </Form.Group>
      </div>
      <button id="btnGV" onClick={handleSubmit}>
        Envoyer
      </button>
    </Form>
  );
}

export default FormGFV;
