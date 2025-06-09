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
    debut: debut ? debut.split("T")[0] : "", // Format correct pour input date
    fin: fin ? fin.split("T")[0] : "", // Format correct pour input date
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
    const email = localStorage.getItem("email");

    if (email) {
      setEmailUser(email);
    }
  };

  // Fonction corrigée pour gérer les différents types d'inputs
  const handleChange = (e) => {
    const { id, value, files, type } = e.target;

    if (type === "file") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: files[0], // Pour les fichiers
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: value, // Pour les autres inputs
      }));
    }
  };

  // Fonction corrigée pour gérer l'email dans le formulaire d'invitation
  const handleEmailChange = (e) => {
    setEmailUser(e.target.value);
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
      window.location.href = "/salons"; // Correction du typo
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

  // Fonction corrigée pour l'update avec FormData pour les fichiers
  const updateSalon = async () => {
    const token = localStorage.getItem("token");

    try {
      const url = `https://domconso-d13067f1e717.herokuapp.com/api/salons/Put/${salonId}`;

      // Créer FormData pour gérer les fichiers
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("debut", formData.debut);
      formDataToSend.append("fin", formData.fin);
      formDataToSend.append("region", formData.region);
      formDataToSend.append("localisation", formData.localisation);

      // Ajouter les fichiers s'ils existent
      if (formData.logoUrl) {
        formDataToSend.append("logoUrl", formData.logoUrl);
      }
      if (formData.invitation) {
        formDataToSend.append("invitation", formData.invitation);
      }

      console.log(url, "url");
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          // Ne pas définir Content-Type pour FormData, le navigateur le fait automatiquement
        },
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Failed to update salon: ${errorData}`);
      }

      const data = await response.json();
      alert("Salon Modifié");
      clearAll();
      window.location.reload(); // Correction du typo
      return data;
    } catch (error) {
      console.error("Error updating salon:", error);
      alert(`Erreur lors de la modification: ${error.message}`);
      throw error;
    }
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
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
        body: JSON.stringify(jsonReq),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi de la demande");
      }

      alert("Invitation demandée, surveillez vos mails !");
      const data = await response.json();
    } catch (error) {
      console.error("Error while sending the form", error);
      alert(`Erreur lors de l'envoi: ${error.message}`);
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
                          <Form.Group
                            className="form__groupe"
                            controlId="salonName"
                          >
                            <Form.Label>Nom du salon</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Nom du salon"
                              value={name}
                              readOnly // Le nom ne devrait pas être modifiable ici
                            />
                          </Form.Group>
                          <Form.Group
                            className="form__groupe"
                            controlId="email"
                          >
                            <Form.Label>
                              Email où recevoir l'invitation
                            </Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Entrez votre email"
                              value={emailUser || ""}
                              onChange={handleEmailChange} // Fonction séparée pour l'email
                            />
                          </Form.Group>

                          <button
                            type="button"
                            className="btn__submit"
                            onClick={handleAskInvit}
                          >
                            Envoyer la demande !
                          </button>
                        </Form>
                      }
                      btnname={"Fermer"}
                    />
                  )}
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

                      <button
                        type="button"
                        className="btn__submit"
                        onClick={updateSalon}
                      >
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
