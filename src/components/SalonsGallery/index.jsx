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
  const [visibleSalon, setVisibleSalon] = useState();
  const [isMobileS, setIsMobileS] = useState(window.innerWidth <= 400);

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

  const salons = [
    {
      name: "Les Printemps des vins",
      logo: logo,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo2,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo3,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo4,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo3,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo2,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo2,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo4,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
  ];

  const filtres = [
    { filtreName: "Date" },
    { filtreName: "Localisation" },
    { filtreName: "Type" },
  ];

  const handleToggleVisibility = () => {
    setVisibleSalon((visible) => (visible === 4 ? salons.length : 4));
  };
  const [selectedFilter, setSelectedFilter] = useState("Tous");

  const handleFilterClick = (filterName) => {
    setSelectedFilter(filterName);
  };

  const visibleSalons = salons.slice(0, visibleSalon);

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
            name={item.name}
            logo={item.logo}
            date={item.date}
            localisation={item.localisation}
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
        <BtnModifier onClick={handleAdmiBtn} />
        <BtnSupprimer onClick={handleAdmiBtn} />
      </div>
    </div>
  );
}

export default SalonGallery;
