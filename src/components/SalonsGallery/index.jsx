import React, { useState, useEffect } from "react";
import CardSalon from "./CardSalon";
import Filtre from "../Catalogue/Filtre";
import BtnAjouter from "../BtnAjouter";
import BtnModifier from "../BtnModifier";
import BtnSupprimer from "../BtnSupprimer";
import ModalT from "../ModalT";
import Form from "react-bootstrap/Form";

import logo from "../../assets/logoallstarwine.webp";
import logo2 from "../../assets/logopetitpatio.webp";
import logo3 from "../../assets/logovinotq.webp";
import logo4 from "../../assets/logobeige.webp";

import "../../style/css/salongallery.css";

import ch9R12 from "../../assets/ch9R12.webp";

function SalonGallery() {
  const salons = [
    {
      id: 1,
      name: "Les Printemps des vins",
      logoUrl: logo,
      region: "PACA",
      date: "8-10 avril 2024",

      localisation: "Châteaneuf du Pape (84)",
      invitation: "",
      debut: new Date(2024, 3, 10), // Les mois sont indexés à partir de 0, donc 4 représente mai
      fin: new Date(2024, 3, 12),
    },
    {
      id: 2,
      name: "Les Printemps des vins",
      logoUrl: logo2,
      region: "Bretagne",
      date: "8-10 avril 2024",

      localisation: "Châteaneuf du Pape (84)",
      invitation: "",
    },
    {
      id: 3,
      name: "Les Printemps des vins",
      logoUrl: logo3,
      region: "Île-de-France",
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
      invitation: "",
      debut: new Date(2024, 3, 10), // Les mois sont indexés à partir de 0, donc 4 représente mai
      fin: new Date(2024, 3, 12),
    },
    {
      id: 4,
      name: "Les Printemps des vins",
      logoUrl: logo4,
      region: "Auvergne-Rhône-Alpes",
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
      invitation: "",
      debut: new Date(2024, 3, 10), // Les mois sont indexés à partir de 0, donc 4 représente mai
      fin: new Date(2024, 3, 12),
    },
    {
      id: 5,
      name: "Les Printemps des vins",
      logoUrl: logo,
      region: "Hauts-de-France",
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
      invitation: "",
      debut: new Date(2024, 3, 10), // Les mois sont indexés à partir de 0, donc 4 représente mai
      fin: new Date(2024, 3, 12),
    },
    {
      id: 6,
      name: "Les Printemps des vins",
      logoUrl: logo,
      region: "PACA",
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
      invitation: "",
      debut: new Date(2024, 3, 10), // Les mois sont indexés à partir de 0, donc 4 représente mai
      fin: new Date(2024, 3, 12),
    },
    {
      id: 7,
      name: "Les Printemps des vins",
      logoUrl: logo2,
      region: "Bretagne",
      date: "8-10 avril 2024",
      debut: new Date(2024, 3, 10), // Les mois sont indexés à partir de 0, donc 4 représente mai
      fin: new Date(2024, 3, 12),
      localisation: "Châteaneuf du Pape (84)",
      invitation: "",
    },
    {
      id: 8,
      name: "Les Printemps des vins",
      logoUrl: logo3,
      region: "Île-de-France",
      date: "8-10 avril 2024",
      debut: new Date(2024, 3, 10), // Les mois sont indexés à partir de 0, donc 4 représente mai
      fin: new Date(2024, 3, 12),
      localisation: "Châteaneuf du Pape (84)",
      invitation: "",
    },
    {
      id: 9,
      name: "Les Printemps des vins",
      logoUrl: logo4,
      region: "Auvergne-Rhône-Alpes",
      debut: new Date(2024, 3, 10), // Les mois sont indexés à partir de 0, donc 4 représente mai
      fin: new Date(2024, 3, 12),
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
      invitation: "",
    },
    {
      id: 10,
      name: "Les Printemps des vins",
      logoUrl: logo,
      debut: new Date(2024, 3, 10), // Les mois sont indexés à partir de 0, donc 4 représente mai
      fin: new Date(2024, 3, 12),
      region: "Grand Nord",
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
      invitation: "",
    },
    {
      id: 11,
      name: "Les Printemps des vins",
      logoUrl: logo4,
      region: "Auvergne-Rhône-Alpes",
      date: "8-10 avril 2024",
      debut: new Date(2024, 3, 10), // Les mois sont indexés à partir de 0, donc 4 représente mai
      fin: new Date(2024, 3, 12),
      localisation: "Châteaneuf du Pape (84)",
      invitation: "",
    },
    {
      id: 12,
      name: "Les Printemps des vins",
      logoUrl: logo,
      date: "8-10 avril 2024",
      debut: new Date(2024, 3, 10), // Les mois sont indexés à partir de 0, donc 4 représente mai
      fin: new Date(2024, 3, 12),
      region: "Grand Nord",
      localisation: "Châteaneuf du Pape (84)",
      invitation: "",
    },
  ];

  const filtres = [
    { filtreName: "PACA" },
    { filtreName: "Hauts-de-France" },
    { filtreName: "Auvergne-Rhône-Alpes" },
    { filtreName: "Bretagne" },
    { filtreName: "Grand Est" },
    { filtreName: "Île-de-France" },
  ];

  const [visibleSalon, setVisibleSalon] = useState();
  const [isMobileS, setIsMobileS] = useState(window.innerWidth <= 400);
  const [filteredSalons, setFilteredSalons] = useState(salons);
  const [selectedFilter, setSelectedFilter] = useState("Tous");

  const handleAdmiBtn = () => {
    console.log("click");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileS(window.innerWidth <= 400);
    };

    window.addEventListener("resize", handleResize);

    setVisibleSalon(isMobileS ? 4 : salons.length);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileS]);

  const handleToggleVisibility = () => {
    setVisibleSalon((visible) => (visible === 4 ? salons.length : 4));
  };

  const handleFilterClick = (filterName) => {
    setSelectedFilter(filterName);

    if (filterName === "Tous" || filterName === null) {
      setFilteredSalons(salons);
    } else {
      const filtered = salons.filter((salon) => {
        return salon.region.toLowerCase() === filterName.toLowerCase(); // Convertir en minuscules pour une comparaison insensible à la casse
      });
      setFilteredSalons(filtered);
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
        <Filtre
          filtreName={"Tous"}
          isSelected={selectedFilter === "Tous"}
          onClick={() => handleFilterClick("Tous")}
        />
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
            id={item.id}
            name={item.name}
            logoUrl={item.logoUrl}
            date={item.date}
            localisation={item.localisation}
            region={item.region}
            debut={item.debut}
            fin={item.fin}
            invitation={item.invitation}
          />
        ))}
        {isMobileS && (
          <button
            className="salongallery__box2__btn"
            onClick={handleToggleVisibility}
          >
            {visibleSalon === 4 ? "Voir plus" : "Voir moins"}
          </button>
        )}{" "}
        <ModalT
          title={"Ajouter un nouveau salon"}
          id="none3"
          btnShow={<BtnAjouter onClick={handleAdmiBtn} />}
          modalContent={
            <Form className="form__ajout__salon form__ajout">
              <Form.Group className="form__groupe" controlId="name__ajoutsalon">
                <Form.Label>Nom du salon</Form.Label>
                <Form.Control type="text" placeholder="Nom du salon" />
              </Form.Group>

              <Form.Group className="form__groupe" controlId="date__ajoutsalon">
                <Form.Label>Date du salon</Form.Label>
                <Form.Control type="text" placeholder="Date du salon" />
              </Form.Group>

              <Form.Group
                className="form__groupe"
                controlId="localisation__ajoutsalon"
              >
                <Form.Label>Localisation du salon</Form.Label>
                <Form.Control type="text" placeholder="Localisation du salon" />
              </Form.Group>

              <Form.Group className="form__groupe" controlId="logo__ajoutsalon">
                <Form.Label>Logo du salon</Form.Label>
                <Form.Control type="file" accept="image/*" />
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
