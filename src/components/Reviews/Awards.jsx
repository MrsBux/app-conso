import React, { useState, useEffect } from "react";
import "../../style/css/dossierdepresse.css";
import "../../style/css/pressandprices.css";

import Form from "react-bootstrap/Form";
import BtnAjouter from "../BtnAjouter";
import BtnSupprimer from "../BtnSupprimer";
import ModalT from "../ModalT";

function Awards({ onClick }) {
  const [awards, setAwards] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    handleAll();
  }, []);

  const handleAll = () => {
    fetch(`https://domconso-d13067f1e717.herokuapp.com/api/prix/All`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des récompenses");
        }
        return response.json();
      })
      .then((data) => {
        setAwards(data);
      })
      .catch((error) => {
        console.error(
          "Il y a eu une erreur lors de la récupération des récompenses :",
          error
        );
      });
  };

  const sortedAwards = awards
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const displayedAwards = showAll ? sortedAwards : sortedAwards.slice(0, 6);

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handlePost = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const token = localStorage.getItem("token");

    fetch(`https://domconso-d13067f1e717.herokuapp.com/api/prix/New`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la création de la récompense");
        }
        return response.json();
      })
      .then((data) => {
        setAwards([...awards, data]);
        window.location.href = "/gallery";
      })
      .catch((error) => {
        console.error("Erreur lors de la création de la récompense :", error);
      });
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");

    fetch(`https://domconso-d13067f1e717.herokuapp.com/api/prix/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la suppression de la récompense");
        }
        return response.json();
      })
      .then((data) => {
        setAwards(awards.filter((item) => item.id !== id));
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de la récompense:", error);
      });
  };

  return (
    <div className="awards mainbox">
      <h4 className="mainbox__title">Récompenses & Notes</h4>

      <ModalT
        title={"Ajouter une nouvelle récompense"}
        btnShow={<BtnAjouter onClick={handleToggleShowAll} />}
        modalContent={
          <Form
            className="form__ajout__recompense form__ajout"
            onSubmit={handlePost}
          >
            <Form.Group
              className="form__groupe"
              controlId="name__ajoutrecompense"
            >
              <Form.Label>Nom de la récompense</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Nom de la récompense"
                required
              />
            </Form.Group>

            <Form.Group
              className="form__groupe"
              controlId="vin__ajoutrecompense"
            >
              <Form.Label>Vin</Form.Label>
              <Form.Control
                type="text"
                name="vin"
                placeholder="Nom du vin"
                required
              />
            </Form.Group>

            <Form.Group
              className="form__groupe"
              controlId="date__ajoutrecompense"
            >
              <Form.Label>Date de la récompense</Form.Label>
              <Form.Control
                type="date"
                name="date"
                placeholder="Date de la récompense"
                required
              />
            </Form.Group>

            <Form.Group
              className="form__groupe"
              controlId="lien__ajoutrecompense"
            >
              <Form.Label>Lien</Form.Label>
              <Form.Control
                type="text"
                name="lien"
                placeholder="Lien vers la récompense"
                required
              />
            </Form.Group>

            <button className="btn__submit" type="submit">
              Créer
            </button>
          </Form>
        }
        btnname={"Retour"}
      />

      <ul className="mainbox__list">
        {displayedAwards.map((item) => (
          <li key={item.id} className="mainbox__list__li">
            {item.name} --- {item.vin} ---{" "}
            {new Date(item.date).toLocaleDateString()} ---
            <a
              href={item.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="mainbox__list__a"
            >
              Voir plus
            </a>
            <BtnSupprimer onClick={() => handleDelete(item._id)} />
          </li>
        ))}
      </ul>

      <div className="mainbox__btns">
        <button
          className="dossierdepresse__content__btn dossierdepresse__btn"
          onClick={onClick}
        >
          Retour
        </button>

        <button
          className="awards__showmore-btn dossierdepresse__btn"
          onClick={handleToggleShowAll}
        >
          {showAll ? "Voir moins" : "Voir plus"}
        </button>
      </div>
    </div>
  );
}

export default Awards;
