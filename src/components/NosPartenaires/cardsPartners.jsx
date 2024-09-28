import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import "../../style/css/cardpartner.css";
import ModalT from "../ModalT";
import BtnSupprimer from "../BtnSupprimer";
import BtnModifier from "../BtnModifier";

function CardPartner({
  id,
  logoPUrl,
  name,
  contactUrl,
  type,
  localisation,
  description,
}) {
  const navigate = useNavigate();
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name,
    contactUrl,
    type,
    localisation,
    description,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDelete = () => {
    const token = localStorage.getItem("token");

    fetch(
      `https://domconso-d13067f1e717.herokuapp.com/api/partners/Delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la suppression du partenaire");
        }
        return response.json();
      })
      .then(() => {
        alert("Partenaire supprimé");
        navigate("/");
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression du partenaire :", error);
        setError(error.message);
      });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    const form = event.target;
    const formData = new FormData(form);

    fetch(
      `https://domconso-d13067f1e717.herokuapp.com/api/partners/Put/${id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(
              `Erreur lors de la mise à jour du partenaire: ${text}`
            );
          });
        }
        return response.json();
      })
      .then((data) => {
        alert("Partenaire mis à jour avec succès");
        window.location.reload();
      })
      .catch((error) => {
        console.error(
          "Erreur détaillée lors de la mise à jour du partenaire:",
          error
        );
        setError(error.message);
      });
  };

  return (
    <>
      <div
        className={`logo ${isCardFlipped ? "flipped" : ""} logop`}
        onMouseEnter={() => setIsCardFlipped(true)}
        onMouseLeave={() => setIsCardFlipped(false)}
      >
        <div className="logo">
          <ModalT
            btnShow={
              <div className="logo__front">
                <p className="logop__name">{name}</p>
              </div>
            }
            title={name}
            modalContent={
              <div className="modalt">
                <p>{contactUrl}</p>
                <p>{localisation}</p>
                <p>{type}</p>
                <p>{description}</p>
                <BtnSupprimer onClick={handleDelete} />
              </div>
            }
            btnname={"Retour"}
          />
          <ModalT
            btnShow={
              <div className="logo__back">
                <p className="logo__back__p">{name}</p>
              </div>
            }
            title={name}
            modalContent={
              <div className="modalt">
                <p>{name}</p>
                <p>{type}</p>
                <p>{description}</p>
                <p>{localisation}</p>
                <a href={contactUrl}>Site internet </a>
                <BtnSupprimer onClick={handleDelete} />
                <ModalT
                  title="Modifier le partenaire"
                  modalContent={
                    <div className="modalt">
                      <Form
                        onSubmit={handleUpdate}
                        className="form__ajout__partenaire form__ajout"
                      >
                        <Form.Group className="form__groupe" controlId="name">
                          <Form.Label>Nom</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            placeholder="Nom du partenaire"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </Form.Group>

                        <Form.Group
                          className="form__groupe"
                          controlId="description"
                        >
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                            as="textarea"
                            name="description"
                            placeholder="Description"
                            value={formData.description}
                            onChange={handleInputChange}
                          />
                        </Form.Group>

                        <Form.Group className="form__groupe" controlId="type">
                          <Form.Label>Catégorie</Form.Label>
                          <Form.Control
                            as="select"
                            name="type"
                            value={formData.type}
                            onChange={handleInputChange}
                          >
                            <option>Restaurateur</option>
                            <option>Caviste</option>
                            <option>Importateur</option>
                            <option>Autre</option>
                          </Form.Control>
                        </Form.Group>

                        <Form.Group
                          className="form__groupe"
                          controlId="localisation"
                        >
                          <Form.Label>Localisation</Form.Label>
                          <Form.Control
                            type="text"
                            name="localisation"
                            placeholder="Localisation du partenaire"
                            value={formData.localisation}
                            onChange={handleInputChange}
                          />
                        </Form.Group>

                        <Form.Group
                          className="form__groupe"
                          controlId="contactUrl"
                        >
                          <Form.Label>URL de contact</Form.Label>
                          <Form.Control
                            type="url"
                            name="contactUrl"
                            placeholder="https://example.com"
                            value={formData.contactUrl}
                            onChange={handleInputChange}
                          />
                        </Form.Group>

                        <Form.Group className="form__groupe" controlId="logo">
                          <Form.Label>Logo</Form.Label>
                          <Form.Control
                            type="file"
                            name="logo"
                            accept="image/*"
                          />
                        </Form.Group>

                        <button className="btn__submit" type="submit">
                          Mettre à jour
                        </button>
                      </Form>
                      {error && <p className="error-message">{error}</p>}
                    </div>
                  }
                  btnShow={<BtnModifier />}
                  btnname={"Retour"}
                />
              </div>
            }
            btnname={"Retour"}
          />
        </div>
      </div>
    </>
  );
}

export default CardPartner;
