import React, { useState } from "react";
import "../../style/css/cardsalon.css";
import ModalT from "../ModalT";
import BtnSupprimer from "../BtnSupprimer";
import BtnModifier from "../BtnModifier";
import Form from "react-bootstrap/Form";

function CardSalon({
  salonId,
  logoUrl,
  name,
  description,
  localisation,
  region,
  type,
  invitation,
  invitationBlob,
  debut,
  fin,
}) {
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [formData, setFormData] = useState({
    name: name,
    description: description,
    debut: debut,
    fin: fin,
    region: region,
    localisation: localisation,
    logoUrl: null,
    invitation: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("click");
  };

  const deleteSalon = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/salons/Delete/${salonId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete this salon");
      }

      console.log("salon supprimé");
      alert("Salon supprimé !");
      window.location.reload();
      return await response.json();
    } catch (error) {
      console.error("Error deleting salon:", error);
      throw error;
    }
  };

  const updateSalon = async () => {
    try {
      console.log(formData);
      const url = `http://localhost:3000/api/salons//Put/${salonId}`;
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create salon");
      }

      const data = await response.json();
      alert("Salon Modifié");
      window.location.reload();
      return data;
    } catch (error) {
      console.error("Error creating salon:", error);
      throw error;
    }
  };

  function formatDate(dateString) {
    // Crée un nouvel objet Date à partir de la chaîne de date
    const date = new Date(dateString);

    // Récupère le jour, le mois et l'année de la date
    const day = date.getDate().toString().padStart(2, "0"); // padStart ajoute un '0' devant si nécessaire
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // +1 car getMonth() renvoie de 0 à 11
    const year = date.getFullYear();

    // Retourne la date formatée sous forme de chaîne de caractères
    return `${day}-${month}-${year}`;
  }

  const handleDownload = () => {
    if (invitationBlob) {
      const url = window.URL.createObjectURL(invitationBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${name}_invitation.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <div
      className={`cardSalon ${isCardFlipped ? "flipped" : ""}`}
      onMouseEnter={() => setIsCardFlipped(true)}
      onMouseLeave={() => setIsCardFlipped(false)}
    >
      <div className="cardSalon__front">
        <img src={logoUrl} className="cardSalon__front__img" alt="Salon Logo" />
        <p className="cardSalon__front__name">{name}</p>
      </div>
      <div className="cardSalon__back">
        <p className="cardSalon__back__p">
          <strong>Dates : </strong>{" "}
          {`${formatDate(debut)} - ${formatDate(fin)}`}
        </p>
        <p className="cardSalon__back__p">
          <strong>Région : </strong> {region}
        </p>
        <p className="cardSalon__back__p">
          <strong>Localisation : </strong> {localisation}
        </p>
        <ModalT
          btnShow={<p className="cardSalon__back__p"> + </p>}
          id={"none2"}
          title={name}
          modalContent={
            <div className="modalt box">
              <p>{name}</p>
              <p>{type}</p>
              <img src={logoUrl} alt="Salon" />
              <p>{localisation}</p>
              <p>
                <strong>Dates : </strong>{" "}
                {`${formatDate(debut)} - ${formatDate(fin)}`}
              </p>
              <p>{description}</p>
              <button className="modalt__txt__btn" onClick={handleDownload}>
                Télécharger ou demander votre invitation
              </button>
              <div className="div__box">
                <ModalT
                  btnShow={<BtnModifier />}
                  title={"Modifier le salon"}
                  modalContent={
                    <Form className="form__ajout__salon form__ajout">
                      <Form.Group
                        className="form__groupe"
                        controlId="name"
                        onSubmit={updateSalon}
                      >
                        <Form.Label>Nom du salon</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Nom du salon"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group
                        className="form__groupe"
                        controlId="description"
                      >
                        <Form.Label>Description du salon</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Description du salon"
                          value={formData.description}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="form__groupe" controlId="debut">
                        <Form.Label>Date de début</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Date de début"
                          value={formData.debut}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="form__groupe" controlId="fin">
                        <Form.Label>Date de fin</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Date de fin"
                          value={formData.fin}
                          onChange={handleChange}
                        />{" "}
                      </Form.Group>

                      <Form.Group className="form__groupe" controlId="region">
                        <Form.Label>Région</Form.Label>
                        <Form.Control
                          as="select"
                          value={formData.region}
                          onChange={handleChange}
                        >
                          <option value="">Sélectionner une région</option>
                          <option value="Auvergne-Rhône-Alpes">
                            Auvergne-Rhône-Alpes
                          </option>
                          <option value="Bourgogne-Franche-Comté">
                            Bourgogne-Franche-Comté
                          </option>
                          <option value="Bretagne">Bretagne</option>
                          <option value="Centre-Val de Loire">
                            Centre-Val de Loire
                          </option>
                          <option value="Corse">Corse</option>
                          <option value="Grand Est">Grand Est</option>
                          <option value="Hauts-de-France">
                            Hauts-de-France
                          </option>
                          <option value="Île-de-France">Île-de-France</option>
                          <option value="Normandie">Normandie</option>
                          <option value="Nouvelle-Aquitaine">
                            Nouvelle-Aquitaine
                          </option>
                          <option value="Occitanie">Occitanie</option>
                          <option value="Pays de la Loire">
                            Pays de la Loire
                          </option>
                          <option value="PACA">PACA</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group
                        className="form__groupe"
                        controlId="localisation"
                      >
                        <Form.Label>Localisation du salon</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Localisation du salon"
                          value={formData.localisation}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="form__groupe" controlId="logoUrl">
                        <Form.Label>Logo du salon</Form.Label>
                        <Form.Control
                          type="file"
                          accept="image/*"
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group
                        className="form__groupe"
                        controlId="invitation"
                      >
                        <Form.Label>Invitation (PDF)</Form.Label>
                        <Form.Control
                          type="file"
                          accept=".pdf"
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <button className="btn__submit" onClick={updateSalon}>
                        Submit
                      </button>
                    </Form>
                  }
                  btnname={"Retour"}
                />
                <BtnSupprimer onClick={deleteSalon} />
              </div>
            </div>
          }
          btnname={"Retour"}
        />
      </div>
    </div>
  );
}

export default CardSalon;
