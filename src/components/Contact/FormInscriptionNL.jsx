import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function FormInscriptionNL() {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = { email };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/newssubs/post`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de l'inscription à la newsletter");
      }

      setStatusMessage("Inscription à la newsletter enregistrée !");
      setEmail("");
    } catch (error) {
      console.error("Erreur lors de l'inscription à la newsletter :", error);
      setStatusMessage("Erreur lors de l'inscription à la newsletter.");
    }
  };

  return (
    <div className="FIN">
      <Form className="FIN__form" onSubmit={handleSubmit}>
        <p className="FIN__form__p">
          2 Newsletter par an et pas de spams, promis !
        </p>

        <Form.Group
          className="FIN__form__groupe"
          controlId="email_contact_home"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        {statusMessage && <div className="FIN__status">{statusMessage}</div>}

        <button type="submit" className="btnG" id="btnform">
          Envoyer
        </button>
      </Form>
    </div>
  );
}

export default FormInscriptionNL;
