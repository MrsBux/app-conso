import React, { useState, useEffect } from "react";
import "../../style/css/dossierdepresse.css";
import "../../style/css/pressandprices.css";

import Form from "react-bootstrap/Form";
import BtnAjouter from "../BtnAjouter";
import ModalT from "../ModalT";
import BtnSupprimer from "../BtnSupprimer";

function Press({ onClick }) {
  const [press, setPress] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [lien, setLien] = useState("");

  useEffect(() => {
    handleAll();
  }, []);

  const handleAll = () => {
    fetch(`https://domconso-d13067f1e717.herokuapp.com/api/press/All`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des actualités");
        }
        return response.json();
      })
      .then((data) => {
        setPress(data);
      })
      .catch((error) => {
        console.error(
          "Il y a eu une erreur lors de la récupération des actus de presse :",
          error
        );
      });
  };

  const sortedPress = press
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const displayedPress = showAll ? sortedPress : sortedPress.slice(0, 6);

  const handleAdmiBtn = () => {
    console.log("click");
  };

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handlePost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("date", date);
    formData.append("lien", lien);

    const token = localStorage.getItem("token");

    fetch(`https://domconso-d13067f1e717.herokuapp.com/api/press/New`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la création de l'actu press");
        }
        return response.json();
      })
      .then((data) => {
        alert("item press créé avec succès !");
        setPress([...press, data]);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Erreur lors de la création de l'actualité :", error);
      });
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");

    fetch(`https://domconso-d13067f1e717.herokuapp.com/api/press/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la suppression de la press");
        }
        return response.json();
      })
      .then((data) => {
        alert("Item supprimé avec succès ");
        setPress(press.filter((item) => item.id !== id));

        window.location.href = "/gallery";
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de la press:", error);
      });
  };

  return (
    <div className="press mainbox">
      <h4 className="mainbox__title">Revue de presse </h4>

      <ModalT
        title={"Ajouter une nouvelle mention"}
        btnShow={<BtnAjouter onClick={handleAdmiBtn} />}
        modalContent={
          <Form className="form__ajout__mention form__ajout">
            <Form.Group className="form__groupe" controlId="name__ajoutmention">
              <Form.Label>Nom de la mention</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Nom de la mention"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="form__groupe" controlId="date__ajoutmention">
              <Form.Label>Date de la mention</Form.Label>
              <Form.Control
                type="date"
                name="date"
                placeholder="Date de la mention"
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="form__groupe" controlId="lien__ajoutmention">
              <Form.Label>Lien</Form.Label>
              <Form.Control
                type="text"
                name="lien"
                placeholder="Lien vers la mention"
                onChange={(e) => setLien(e.target.value)}
                required
              />
            </Form.Group>

            <button className="btn__submit" type="submit" onClick={handlePost}>
              Créer
            </button>
          </Form>
        }
        btnname={"Retour"}
      />

      <ul className="mainbox__list">
        {displayedPress.map((item) => (
          <li key={item.id} className="mainbox__list__li">
            {item.name} --- {new Date(item.date).toLocaleDateString()} ---
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
          className="press__showmore-btn dossierdepresse__btn"
          onClick={handleToggleShowAll}
        >
          {showAll ? "Voir moins" : "Voir plus"}
        </button>

        <button
          className="dossierdepresse__content__btn dossierdepresse__btn"
          onClick={onClick}
        >
          Retour
        </button>
      </div>
    </div>
  );
}

export default Press;
