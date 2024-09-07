import React, { useState, useEffect } from "react";
import Actualite from "./actualite";
import "../../style/css/nosactus.css";
import Form from "react-bootstrap/Form";
import BtnAjouter from "../BtnAjouter";
import ModalT from "../ModalT";

function NosActus({ isAuthenticated }) {
  const [visibleActus, setVisibleActus] = useState(4);
  const [actus, setActus] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/actu/All")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des actualités");
        }
        return response.json();
      })
      .then((data) => {
        setActus(data);
      })
      .catch((error) => {
        console.error(
          "Il y a eu une erreur lors de la récupération des actualités :",
          error
        );
      });
  }, []);

  const handleVoirPlusClick = () => {
    setVisibleActus(actus.length);
  };

  const handleVoirMoinsClick = () => {
    setVisibleActus(4);
  };

  const handlePost = (formData) => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:3000/api/actu/New", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la création de l'actualité");
        }
        return response.json();
      })
      .then((data) => {
        // Traitez la réponse si nécessaire

        // Mettre à jour l'état des actualités si nécessaire
        setActus(data);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Erreur lors de la création de l'actualité :", error);
      });
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");

    fetch(`http://localhost:3000/api/actu/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la suppression de l'actualité");
        }
        return response.json();
      })
      .then((data) => {
        // Traitez la réponse si nécessaire

        // Mettre à jour l'état des actualités si nécessaire
        setActus(data);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de l'actualité :", error);
      });
  };

  return (
    <div className="nosactus">
      {actus.length > 4 && (
        <div className="nosactus__btn">
          {visibleActus < actus.length ? (
            <button
              id="btnV"
              name={"Voir plus ->"}
              className="nosactus__btn__b btnG"
              onClick={handleVoirPlusClick}
            >
              Voir plus
            </button>
          ) : (
            <button
              id="btnM"
              name={"Voir moins <-"}
              className="nosactus__btn__b btnG"
              onClick={handleVoirMoinsClick}
            >
              Voir moins{" "}
            </button>
          )}
        </div>
      )}

      {isAuthenticated && (
        <ModalT
          title={"Ajouter une nouvelle actu"}
          btnShow={<BtnAjouter />}
          id={"none"}
          modalContent={
            <Form className="form__ajout__actu form__ajout">
              <Form.Group className="form__groupe" controlId="date__ajoutactu">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="date" />
              </Form.Group>

              <Form.Group className="form__groupe" controlId="title__ajoutactu">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="title" />
              </Form.Group>

              <Form.Group className="form__groupe" controlId="text__ajoutactu">
                <Form.Label>Contenu</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="texte actu" />
              </Form.Group>
              <button
                className="btn__submit"
                type="submit"
                onClick={(event) => {
                  event.preventDefault(); // Empêche le rechargement de la page par défaut
                  const formData = {
                    // Récupération des valeurs du formulaire
                    date: event.target.form[0].value,
                    title: event.target.form[1].value,
                    text: event.target.form[2].value,
                  };
                  handlePost(formData); // Appel de la fonction handlePost avec les données du formulaire
                }}
              >
                Submit
              </button>
            </Form>
          }
          btnname={"Retour"}
        />
      )}

      <div className="nosactus__box">
        {actus.slice(0, visibleActus).map((item, index) => (
          <Actualite
            key={index}
            id={item._id}
            date={item.date}
            title={item.title}
            text={item.text}
            handleDelete={() => handleDelete(item._id)} // Correction ici
          />
        ))}
      </div>
    </div>
  );
}

export default NosActus;
