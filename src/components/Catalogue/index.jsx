import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Filtre from "./Filtre";
import BouteilleCard from "./BouteilleCard";

import ch9R from "../../assets/ch9R.webp";
import ch9B from "../../assets/ch9B.webp";
import lirac from "../../assets/lirac.webp";
import viognier from "../../assets/viognier.webp";
import pitchotte from "../../assets/pitchotte.webp";

import "../../style/css/catalogue.css";

function Catalogue() {
  const vins = [
    {
      image: ch9B,
      nom: "Châteauneuf-du-Pape Blanc",
      AOC: "Châteauneuf du Pape",
      prix: 25,
      millésime: 2022,
    },
    {
      image: ch9R,
      nom: "Châteauneuf-du-Pape Rouge",
      AOC: "Châteauneuf du Pape",
      prix: 25,
      millésime: 2020,
    },
    {
      image: ch9R,
      nom: "Châteauneuf-du-Pape Rouge",
      AOC: "Châteauneuf du Pape",
      prix: 28,
      millésime: 2019,
    },
    {
      image: ch9R,
      nom: "Châteauneuf-du-Pape Rouge",
      AOC: "Châteauneuf du Pape",
      prix: 28,
      millésime: 2018,
    },
    {
      image: lirac,
      nom: "Lirac",
      AOC: "Lirac, grand cru classé des côtes du rhônes",
      prix: 15,
      millésime: 2022,
    },
    {
      image: viognier,
      nom: "100% Viogner",
      AOC: "Vin de france",
      prix: 12,
      millésime: 2023,
    },
    {
      image: pitchotte,
      nom: "La Pitchotte",
      AOC: "Vin de france",
      prix: 8,
      millésime: 2023,
    },
  ];

  const filtres = [
    { filtreName: "Couleur" },
    { filtreName: "Millésimes" },
    { filtreName: "Prix" },
    { filtreName: "Appelation" },
  ];

  const [selectedBottle, setSelectedBottle] = useState(0);

  const [selectedFilter, setSelectedFilter] = useState("Tous");

  const handleFilterClick = (filterName) => {
    setSelectedBottle(0);
    setSelectedFilter(filterName);
  };

  const handleSelect = (selectedIndex, e) => {
    setSelectedBottle(selectedIndex);
  };

  return (
    <section className="catalogue">
      <div className="catalogue__filtres">
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

      <div className="catalogue__bouteilles">
        {vins.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={item.nom}
            className="catalogue__bouteilles__bt"
            onClick={() => setSelectedBottle(index)}
          ></img>
        ))}{" "}
      </div>

      <div className="catalogue__bouteille">
        <Carousel
          slide={false}
          activeIndex={selectedBottle}
          onSelect={handleSelect}
          className="catalogue__bouteilles__carousel"
        >
          {vins.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={item.image}
                alt={item.nom}
                onClick={() => setSelectedBottle(index)}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {selectedBottle !== null && (
        <BouteilleCard
          name={vins[selectedBottle].nom}
          AOC={vins[selectedBottle].AOC}
          prix={`${vins[selectedBottle].prix} euros `}
        />
      )}
    </section>
  );
}

export default Catalogue;
