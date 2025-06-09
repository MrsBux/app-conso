import React, { useState, useEffect } from "react";
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
  functionpostaction,
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
  const [emailUser, setEmailUser] = useState("");

  useEffect(() => {
    getEmail();
  }, []);

  const getEmail = () => {
    const email = localStorage.getItem("email"); // Use a string key instead of a variable

    if (email) {
      setEmailUser(email);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const deleteSalon = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `https://domconso-d13067f1e717.herokuapp.com/api/salons/Delete/${salonId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete this salon");
      }

      alert("Salon supprimé !");

      clearAll();
      window.locatin.href = "/salons";

      return await response.json();
    } catch (error) {
      console.error("Error deleting salon:", error);
      throw error;
    }
  };

  const clearAll = () => {
    setFormData({
      name: "",
      description: "",
      debut: "",
      fin: "",
      region: "",
      localisation: "",
      logoUrl: null,
      invitation: null,
    });
  };

  const updateSalon = async () => {
    const token = localStorage.getItem("token");

    try {
      const url = `https://domconso-d13067f1e717.herokuapp.com/api/salons/Put/${salonId}`;

      console.log(url, "url");
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      console.log(formData, "formData");

      if (!response.ok) {
        throw new Error("Failed to create salon");
      }

      const data = await response.json();
      alert("Salon Modifié");

      //clearAll();
      //window.locatin.href = "/salons";

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

  const handleDownload = async () => {
    try {
      const response = await fetch(
        `https://domconso-d13067f1e717.herokuapp.com/api/salons/${salonId}/download`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erreur lors du téléchargement");
      }

      const blob = await response.blob();
      const fileName =
        response.headers
          .get("Content-Disposition")
          ?.split("filename=")[1]
          ?.replace(/"/g, "") || "invitation.pdf";

      // Vérification du type MIME
      if (blob.type !== "application/pdf") {
        console.warn(`Type de fichier inattendu : ${blob.type}`);
      }

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      console.log(
        `Fichier téléchargé : ${fileName}, Taille : ${blob.size} octets`
      );
    } catch (error) {
      console.error("Erreur de téléchargement :", error);
      alert(`Erreur lors du téléchargement : ${error.message}`);
    }
  };
  const handleAskInvit = async () => {
    try {
      const jsonReq = {
        name: name,
        email: emailUser,
      };

      const url = `https://domconso-d13067f1e717.herokuapp.com/api/forminvit/post`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonReq), // Correctly stringify the body
      });

      alert("Invitation demandée, surveillez vos mails !");

      const data = await response.json();
    } catch (error) {
      console.error("Error while sending the form", error);
      throw error;
    }
  };

  return (
    <div
      className={`cardSalon ${isCardFlipped ? "flipped" : ""}`}
      onMouseEnter={() => setIsCardFlipped(true)}
      onMouseLeave={() => setIsCardFlipped(false)}
    >
      <div className="cardSalon__front">
        <p className="cardSalon__front__name">{name}</p>
      </div>
      <div className="cardSalon__back">
        <p className="cardSalon__back__p">
          <strong>{`${formatDate(debut)} - ${formatDate(fin)}`}</strong>
        </p>
        <p className="cardSalon__back__p">
          <strong>Région: </strong> {region}
        </p>
        <p className="cardSalon__back__p">
          <strong>Localisation: </strong> {localisation}
        </p>
        <ModalT
          btnShow={<p className="cardSalon__back__p"> + </p>}
          id={"none2"}
          title={name}
          modalContent={
            <div className="modalt box">
              <p>{name}</p>
              <p>{type}</p>
              <p>{localisation}</p>
              <p>
                <strong>Dates: </strong>
                {`${formatDate(debut)} - ${formatDate(fin)}`}
              </p>
              <p>{description}</p>

              <div className="div__box">
                <div className="div__box" style={{ marginRight: "40px" }}>
                  {invitation ? (
                    <button
                      className="modalt__txt__btn testbtn"
                      onClick={handleDownload}
                    >
                      Invitation
                    </button>
                  ) : (
                    <ModalT
                      btnShow={
                        <button className="modalt__txt__btn testbtn">
                          Invitation
                        </button>
                      }
                      id={"none2"}
                      title={name}
                      modalContent={
                        <Form>
                          <Form.Group className="form__groupe" controlId="name">
                            <Form.Label>Nom du salon</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Nom du salon"
                              value={name}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          <Form.Group className="form__groupe" controlId="name">
                            <Form.Label>
                              Email ou recevoir l'invitation{" "}
                            </Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Entrez votre email"
                              value={emailUser || ""}
                              onChange={handleChange}
                            />
                          </Form.Group>

                          <button
                            className="btn__submit"
                            onClick={handleAskInvit}
                          >
                            {" "}
                            Envoyer la demande !
                          </button>
                        </Form>
                      }
                      btnname={"Fermer"}
                    />
                  )}{" "}
                </div>
                <ModalT
                  btnShow={<BtnModifier />}
                  title={"Modifier le salon"}
                  modalContent={
                    <Form className="form__ajout__salon form__ajout">
                      <Form.Group className="form__groupe" controlId="name">
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
                        />
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
