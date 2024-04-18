import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function ReservationForm() {
  const [prestation, setPrestation] = useState("");
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez gérer l'envoi de la demande de réservation, par exemple, en envoyant les données à un backend
    console.log({
      prestation,
      date,
      heure,
      email,
      nom,
      telephone,
    });

    setPrestation("");
    setDate("");
    setHeure("");
    setEmail("");
    setNom("");
    setTelephone("");
  };

  return (
    <div className="reservation-form">
      <p>
        Choisissez la prestation qui vous convient, sélectionnez la date et
        l'heure, nous vous recontactons pour vous confirmer votre réservation et
        nous nous occupons des détails!
      </p>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="prestation">
          <Form.Label>Choisissez une prestation :</Form.Label>
          <Form.Control
            as="select"
            value={prestation}
            onChange={(e) => setPrestation(e.target.value)}
          >
            <option value="">-- Sélectionnez --</option>
            <option value="Prestation 1">
              Désgutation au caveau (Gratuite)
            </option>
            <option value="Prestation 2">
              Dégustation en grand groupe au caveau (+8 personnes) (5€/ par
              personne)
            </option>
            <option value="Prestation 3">
              Rétrospective complète et analyse des vins du domaine (25€/ par
              personne (à partir de 6personnes))
            </option>
            <option value="Prestation 4">
              Repas accord mets et vins (à partir de 35€ par personne)
            </option>
            <option value="Prestation 5">
              Visite complète du domaine, master class et dégustation (à partir
              de 30€ par personne)
            </option>
            <option value="Prestation 6">
              Visite et dégustation directement dans la vigne (à partir de 40€
              par personne)
            </option>
            <option value="Prestation 7">
              Prestation 100% personnalisable{" "}
            </option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label>Choisissez une date :</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="heure">
          <Form.Label>Choisissez une heure :</Form.Label>
          <Form.Control
            type="time"
            value={heure}
            onChange={(e) => setHeure(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Adresse email :</Form.Label>
          <Form.Control
            type="email"
            placeholder="Entrez votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="telephone">
          <Form.Label>Numéro de téléphone :</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Entrez votre numéro de téléphone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="nom">
          <Form.Label>Votre nom :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrez votre nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </Form>
    </div>
  );
}

export default ReservationForm;
