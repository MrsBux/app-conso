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
  console.log("🔵 CardSalon - Props reçues:", {
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
  });

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

  console.log("🟡 CardSalon - État initial formData:", formData);

  useEffect(() => {
    console.log("🟢 CardSalon - useEffect appelé");
    getEmail();
  }, []);

  const getEmail = () => {
    console.log("📧 getEmail - Début");
    const email = localStorage.getItem("email");
    console.log("📧 getEmail - Email récupéré:", email);

    if (email) {
      setEmailUser(email);
      console.log("📧 getEmail - Email défini dans l'état:", email);
    } else {
      console.log("📧 getEmail - Aucun email trouvé dans localStorage");
    }
  };

  // Fonction corrigée pour gérer les différents types d'inputs
  const handleChange = (e) => {
    console.log("🔄 handleChange - Début");
    const { id, value, files, type } = e.target;
    console.log("🔄 handleChange - Données:", { id, value, files, type });

    if (type === "file") {
      console.log("📁 handleChange - Fichier détecté:", files[0]);
      setFormData((prevFormData) => {
        const newData = {
          ...prevFormData,
          [id]: files[0], // Pour les fichiers
        };
        console.log("📁 handleChange - Nouveau formData (fichier):", newData);
        return newData;
      });
    } else {
      console.log("📝 handleChange - Texte/autre détecté:", value);
      setFormData((prevFormData) => {
        const newData = {
          ...prevFormData,
          [id]: value, // Pour les autres inputs
        };
        console.log("📝 handleChange - Nouveau formData (texte):", newData);
        return newData;
      });
    }
  };

  // Fonction corrigée pour gérer l'email dans le formulaire d'invitation
  const handleEmailChange = (e) => {
    console.log("✉️ handleEmailChange - Début");
    const newEmail = e.target.value;
    console.log("✉️ handleEmailChange - Nouvel email:", newEmail);
    setEmailUser(newEmail);
  };

  const deleteSalon = async () => {
    console.log("🗑️ deleteSalon - Début");
    console.log("🗑️ deleteSalon - salonId:", salonId);

    const token = localStorage.getItem("token");
    console.log(
      "🗑️ deleteSalon - Token:",
      token ? "Token présent" : "Pas de token"
    );

    try {
      const url = `https://domconso-d13067f1e717.herokuapp.com/api/salons/Delete/${salonId}`;
      console.log("🗑️ deleteSalon - URL:", url);

      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("🗑️ deleteSalon - Response status:", response.status);
      console.log("🗑️ deleteSalon - Response ok:", response.ok);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("🗑️ deleteSalon - Erreur response:", errorText);
        throw new Error("Failed to delete this salon");
      }

      console.log("🗑️ deleteSalon - Succès!");
      alert("Salon supprimé !");
      clearAll();
      window.location.href = "/salons";
    } catch (error) {
      console.error("🗑️ deleteSalon - Erreur catch:", error);
      throw error;
    }
  };

  const clearAll = () => {
    console.log("🧹 clearAll - Nettoyage du formulaire");
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
    console.log("🧹 clearAll - Formulaire nettoyé");
  };

  // Fonction corrigée pour l'update avec FormData pour les fichiers
  const updateSalon = async () => {
    console.log("✏️ updateSalon - Début");
    console.log("✏️ updateSalon - formData actuel:", formData);

    const token = localStorage.getItem("token");
    console.log(
      "✏️ updateSalon - Token:",
      token ? "Token présent" : "Pas de token"
    );

    try {
      const url = `https://domconso-d13067f1e717.herokuapp.com/api/salons/Put/${salonId}`;
      console.log("✏️ updateSalon - URL:", url);

      // Créer FormData pour gérer les fichiers
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("debut", formData.debut);
      formDataToSend.append("fin", formData.fin);
      formDataToSend.append("region", formData.region);
      formDataToSend.append("localisation", formData.localisation);

      console.log("✏️ updateSalon - Données de base ajoutées au FormData");

      // Ajouter les fichiers s'ils existent
      if (formData.logoUrl) {
        formDataToSend.append("logoUrl", formData.logoUrl);
        console.log("✏️ updateSalon - Logo ajouté:", formData.logoUrl.name);
      }
      if (formData.invitation) {
        formDataToSend.append("invitation", formData.invitation);
        console.log(
          "✏️ updateSalon - Invitation ajoutée:",
          formData.invitation.name
        );
      }

      // Afficher le contenu du FormData
      console.log("✏️ updateSalon - Contenu FormData:");
      for (let [key, value] of formDataToSend.entries()) {
        console.log(`  ${key}:`, value);
      }

      console.log("✏️ updateSalon - Envoi de la requête...");
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          // Ne pas définir Content-Type pour FormData, le navigateur le fait automatiquement
        },
        body: formDataToSend,
      });

      console.log("✏️ updateSalon - Response status:", response.status);
      console.log("✏️ updateSalon - Response ok:", response.ok);

      if (!response.ok) {
        const errorData = await response.text();
        console.error("✏️ updateSalon - Erreur response:", errorData);
        throw new Error(`Failed to update salon: ${errorData}`);
      }

      const data = await response.json();
      console.log("✏️ updateSalon - Données de réponse:", data);
      alert("Salon Modifié");
      clearAll();
      window.location.reload();
      return data;
    } catch (error) {
      console.error("✏️ updateSalon - Erreur catch:", error);
      alert(`Erreur lors de la modification: ${error.message}`);
      throw error;
    }
  };

  function formatDate(dateString) {
    console.log("📅 formatDate - Date d'entrée:", dateString);
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    console.log("📅 formatDate - Date formatée:", formattedDate);
    return formattedDate;
  }

  const handleDownload = async () => {
    console.log("📥 handleDownload - Début");
    console.log("📥 handleDownload - salonId:", salonId);

    try {
      const url = `https://domconso-d13067f1e717.herokuapp.com/api/salons/${salonId}/download`;
      console.log("📥 handleDownload - URL:", url);

      const token = localStorage.getItem("token");
      console.log(
        "📥 handleDownload - Token:",
        token ? "Token présent" : "Pas de token"
      );

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("📥 handleDownload - Response status:", response.status);
      console.log("📥 handleDownload - Response ok:", response.ok);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("📥 handleDownload - Erreur response:", errorData);
        throw new Error(errorData.message || "Erreur lors du téléchargement");
      }

      const blob = await response.blob();
      console.log("📥 handleDownload - Blob créé:", blob.size, "octets");

      const fileName =
        response.headers
          .get("Content-Disposition")
          ?.split("filename=")[1]
          ?.replace(/"/g, "") || "invitation.pdf";

      console.log("📥 handleDownload - Nom du fichier:", fileName);

      if (blob.type !== "application/pdf") {
        console.warn(
          `📥 handleDownload - Type de fichier inattendu : ${blob.type}`
        );
      }

      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(downloadUrl);

      console.log("📥 handleDownload - Téléchargement terminé");
      console.log(
        `📥 handleDownload - Fichier téléchargé : ${fileName}, Taille : ${blob.size} octets`
      );
    } catch (error) {
      console.error("📥 handleDownload - Erreur catch:", error);
      alert(`Erreur lors du téléchargement : ${error.message}`);
    }
  };

  const handleAskInvit = async () => {
    console.log("📮 handleAskInvit - Début");
    console.log("📮 handleAskInvit - Nom du salon:", name);
    console.log("📮 handleAskInvit - Email utilisateur:", emailUser);

    try {
      const jsonReq = {
        name: name,
        email: emailUser,
      };
      console.log("📮 handleAskInvit - Données à envoyer:", jsonReq);

      const url = `https://domconso-d13067f1e717.herokuapp.com/api/forminvit/post`;
      console.log("📮 handleAskInvit - URL:", url);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonReq),
      });

      console.log("📮 handleAskInvit - Response status:", response.status);
      console.log("📮 handleAskInvit - Response ok:", response.ok);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("📮 handleAskInvit - Erreur response:", errorText);
        throw new Error("Erreur lors de l'envoi de la demande");
      }

      console.log("📮 handleAskInvit - Succès!");
      alert("Invitation demandée, surveillez vos mails !");
      const data = await response.json();
      console.log("📮 handleAskInvit - Données de réponse:", data);
    } catch (error) {
      console.error("📮 handleAskInvit - Erreur catch:", error);
      alert(`Erreur lors de l'envoi: ${error.message}`);
      throw error;
    }
  };

  console.log("🔵 CardSalon - Rendu du composant");

  return (
    <div
      className={`cardSalon ${isCardFlipped ? "flipped" : ""}`}
      onMouseEnter={() => {
        console.log("🖱️ Mouse enter - Card flip activé");
        setIsCardFlipped(true);
      }}
      onMouseLeave={() => {
        console.log("🖱️ Mouse leave - Card flip désactivé");
        setIsCardFlipped(false);
      }}
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
                      onClick={() => {
                        console.log("🔘 Bouton téléchargement cliqué");
                        handleDownload();
                      }}
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
                            onClick={() => {
                              console.log(
                                "🔘 Bouton demande invitation cliqué"
                              );
                              handleAskInvit();
                            }}
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
                        onClick={() => {
                          console.log("🔘 Bouton modifier salon cliqué");
                          updateSalon();
                        }}
                      >
                        Submit
                      </button>
                    </Form>
                  }
                  btnname={"Retour"}
                />
                <BtnSupprimer
                  onClick={() => {
                    console.log("🔘 Bouton supprimer salon cliqué");
                    deleteSalon();
                  }}
                />
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
