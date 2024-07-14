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
  const [visibleSalon, setVisibleSalon] = useState(4);
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
      const response = await fetch(`http://localhost:3000/api/salons/`);
      if (!response.ok) {
        throw new Error("Failed to fetch salons");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching salons:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchSalons = async () => {
      try {
        const data = await getAllSalons();
        setSalons(data);
        setFilteredSalons(data); // Initialise filteredSalons avec tous les salons
        console.log("Salons fetched:", data); // Log des salons récupérés
      } catch (error) {
        console.error("Error fetching salons:", error);
        // Gérer l'erreur, par exemple en affichant un message à l'utilisateur
      }
    };

    fetchSalons();
  }, []);

  const newSalons = async () => {
    try {
      console.log(formData);
      const url = "http://localhost:3000/api/salons/New";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create salon");
      }

      const data = await response.json();
      console.log("Salon created:", data); // Log du salon créé
      return data;
    } catch (error) {
      console.error("Error creating salon:", error);
      throw error;
    }
  };

  const handleAdmiBtn = () => {
    console.log("Administrative button clicked");
  };

  const handleToggleVisibility = () => {
    setVisibleSalon((visible) => (visible === 4 ? salons.length : 4));
    console.log("Toggle visibility");
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

    console.log("Filter clicked:", filterName); // Log du filtre cliqué
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));

    console.log("Form data changed:", id, value); // Log du changement de données du formulaire
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await newSalons();
      alert("Salon ajouté");
      window.location.reload(); // Recharger la page après l'ajout
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

              <Form.Group className="form__groupe" controlId="logoUrl">
                <Form.Label>Logo du salon</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                />
              </Form.Group>

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
