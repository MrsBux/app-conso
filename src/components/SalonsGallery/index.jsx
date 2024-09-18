import React, { useState, useEffect } from "react";
import CardSalon from "./CardSalon";
import Filtre from "../Catalogue/Filtre";
import BtnAjouter from "../BtnAjouter";
import ModalT from "../ModalT";
import Form from "react-bootstrap/Form";

import "../../style/css/salongallery.css";
import ch9R12 from "../../assets/ch9R12.webp";

function SalonGallery() {
  const [salons, setSalons] = useState([]);
  const [isMobileS, setIsMobileS] = useState(window.innerWidth <= 400);
  const [visibleSalon, setVisibleSalon] = useState(16);
  const [selectedFilter, setSelectedFilter] = useState("Tous");
  const [salonId, setSalonId] = useState();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    debut: "",
    fin: "",
    region: "",
    localisation: "",
    logoUrl: null,
    invitation: null,
  });

  const [filteredSalons, setFilteredSalons] = useState([]);

  const filtres = [
    { filtreName: "Tous" },
    { filtreName: "PACA" },
    { filtreName: "Hauts-de-France" },
    { filtreName: "Auvergne-Rhône-Alpes" },
    { filtreName: "Bretagne" },
    { filtreName: "Grand Est" },
    { filtreName: "Île-de-France" },
  ];

  const getAllSalons = async () => {
    try {
      const response = await fetch(
        `https://domconso-d13067f1e717.herokuapp.com/api/salons/`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch salons");
      }

      const data = await response.json();
      const salonsWithBlobs = await Promise.all(
        data.map(async (salon) => {
          if (salon.invitation) {
            const invitationBlob = await fetch(salon.invitation).then((res) =>
              res.blob()
            );
            return { ...salon, invitationBlob };
          }
          return salon;
        })
      );

      setSalons(salonsWithBlobs);
      setFilteredSalons(salonsWithBlobs);
    } catch (error) {
      console.error("Error fetching salons:", error);
      // Gérer l'erreur, par exemple en affichant un message à l'utilisateur
    }
  };

  useEffect(() => {
    getAllSalons();
  }, []);

  const newSalon = async () => {
    const token = localStorage.getItem("token");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("debut", formData.debut);
      formDataToSend.append("fin", formData.fin);
      formDataToSend.append("region", formData.region);
      formDataToSend.append("localisation", formData.localisation);
      formDataToSend.append("logoUrl", formData.logoUrl);
      formDataToSend.append("invitation", formData.invitation);

      const url = `https://domconso-d13067f1e717.herokuapp.com/api/salons/New`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Failed to create salon");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error creating salon:", error);
      throw error;
    }
  };

  const handleFilterClick = (filterName) => {
    setSelectedFilter(filterName);

    if (filterName === "Tous") {
      setFilteredSalons(salons); // Afficher tous les salons
    } else {
      const filtered = salons.filter((salon) => {
        return salon.region.toLowerCase() === filterName.toLowerCase();
      });
      setFilteredSalons(filtered); // Filtrer les salons par région sélectionnée
    }
  };

  const handleChange = (e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      setFormData((prevFormData) => ({
        ...prevFormData,
        [e.target.id]: file,
      }));
    } else {
      const { id, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await newSalon();
      alert("Salon ajouté");
      getAllSalons();
      // Recharger la page après l'ajout
    } catch (error) {
      console.error("Error submitting salon:", error);
      // Gérer l'erreur, par exemple en affichant un message à l'utilisateur
    }
  };

  const visibleSalons = filteredSalons.slice(0, visibleSalon);

  return (
    <div className="salongallery">
      <div className="salongallery__box">
        <img
          src={ch9R12}
          className="salongallery__box__img"
          alt="bouteille"
        ></img>
        <h3 className="salongallery__box__title"> Tous nos salons</h3>
      </div>

      <div className="salongallery__box1">
        {filtres.map((item, index) => (
          <Filtre
            key={index}
            filtreName={item.filtreName}
            isSelected={selectedFilter === item.filtreName}
            onClick={() => handleFilterClick(item.filtreName)}
          />
        ))}
      </div>

      <div className="salongallery__box2">
        {visibleSalons.map((item, index) => (
          <CardSalon
            key={index}
            salonId={item._id}
            name={item.name}
            logoUrl={item.logoUrl}
            description={item.description}
            localisation={item.localisation}
            region={item.region}
            debut={item.debut}
            fin={item.fin}
            invitation={item.invitation}
            invitationBlob={item.invitationBlob}
            functionpostaction={getAllSalons()}
          />
        ))}

        <ModalT
          title={"Ajouter un nouveau salon"}
          id="none3"
          btnShow={<BtnAjouter />}
          modalContent={
            <Form
              className="form__ajout__salon form__ajout"
              onSubmit={handleSubmit}
            >
              <Form.Group className="form__groupe" controlId="name">
                <Form.Label>Nom du salon</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nom du salon"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="form__groupe" controlId="description">
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
                  <option value="Hauts-de-France">Hauts-de-France</option>
                  <option value="Île-de-France">Île-de-France</option>
                  <option value="Normandie">Normandie</option>
                  <option value="Nouvelle-Aquitaine">Nouvelle-Aquitaine</option>
                  <option value="Occitanie">Occitanie</option>
                  <option value="Pays de la Loire">Pays de la Loire</option>
                  <option value="PACA">PACA</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="form__groupe" controlId="localisation">
                <Form.Label>Localisation du salon</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Localisation du salon"
                  value={formData.localisation}
                  onChange={handleChange}
                />
              </Form.Group>
              {/* 
              <Form.Group className="form__groupe" controlId="logoUrl">
                <Form.Label>Logo du salon</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                />
              </Form.Group> */}

              <Form.Group className="form__groupe" controlId="invitation">
                <Form.Label>Invitation (PDF)</Form.Label>
                <Form.Control
                  type="file"
                  accept=".pdf"
                  onChange={handleChange}
                />
              </Form.Group>

              <button className="btn__submit" type="submit">
                Submit
              </button>
            </Form>
          }
          btnname={"Retour"}
        />
      </div>
    </div>
  );
}

export default SalonGallery;
