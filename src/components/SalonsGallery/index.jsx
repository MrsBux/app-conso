import React, { useState, useEffect } from "react";
import CardSalon from "./CardSalon";
import Filtre from "../Catalogue/Filtre";

import logo from "../../assets/logoallstarwine.webp";
import logo2 from "../../assets/logopetitpatio.webp";
import logo3 from "../../assets/logovinotq.webp";
import logo4 from "../../assets/logobeige.webp";

import "../../style/css/salongallery.css";

import ch9R12 from "../../assets/ch9R12.webp";

function SalonGallery() {
  const [visibleSalon, setVisibleSalon] = useState();
  const [isMobileS, setIsMobileS] = useState(window.innerWidth <= 400);

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
        )}
      </div>
    </div>
  );
}

export default SalonGallery;
