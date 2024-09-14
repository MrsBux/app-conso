import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../style/index.css";

function ReservationForm() {
  const [prestation, setPrestation] = useState("");
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      prestation,
      date,
      heure,
      email,
      nom,
      telephone,
    };

    fetch(`https://domconso-d13067f1e717.herokuapp.com/api/formbooking/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de l'envoi du formulaire");
        }
        return response.json();
      })
      .then((data) => {
        // Reset form fields after successful submission
        setPrestation("");
        setDate("");
        setHeure("");
        setEmail("");
        setNom("");
        setTelephone("");

        alert("Formulaire envoyé !");
      })
      .catch((error) => {
        console.error("Error during form submission:", error);
      });
  };

  return (
    <div className="reservation-form">
      <p className="formtxt">
        Choisissez la prestation qui vous convient, sélectionnez la date et
        l'heure, nous vous recontactons pour vous confirmer votre réservation et
        nous nous occupons des détails!
      </p>

      <p className="formwarning"> Attention, tous les champs sont requis !</p>

      <Form className="formmodal" onSubmit={handleSubmit}>
        <Form.Group controlId="prestation">
          <Form.Label>Choisissez une prestation :</Form.Label>
          <Form.Control
            as="select"
            value={prestation}
            onChange={(e) => setPrestation(e.target.value)}
          >
            <option value="">-- Sélectionnez --</option>
            <option value="Dégustation au caveau (Gratuite)">
              Dégustation au caveau (Gratuite)
            </option>
            <option value="Dégustation en grand groupe au caveau (+8 personnes) (5€/ par personne)">
              Dégustation en grand groupe au caveau (+8 personnes) (5€/ par
              personne)
            </option>
            <option value="Rétrospective complète et analyse des vins du domaine (25€/ par personne (à partir de 6 personnes))">
              Rétrospective complète et analyse des vins du domaine (25€/ par
              personne (à partir de 6 personnes))
            </option>
            <option value="Repas accord mets et vins (à partir de 35€ par personne)">
              Repas accord mets et vins (à partir de 35€ par personne)
            </option>
            <option value="Visite complète du domaine, master class et dégustation (à partir de 30€ par personne)">
              Visite complète du domaine, master class et dégustation (à partir
              de 30€ par personne)
            </option>
            <option value="Visite et dégustation directement dans la vigne (à partir de 40€ par personne)">
              Visite et dégustation directement dans la vigne (à partir de 40€
              par personne)
            </option>
            <option value="Prestation 100% personnalisable">
              Prestation 100% personnalisable
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
        <button type="submit" id="btnform">
          Envoyer
        </button>
      </Form>
    </div>
  );
}

export default ReservationForm;
