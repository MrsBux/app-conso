import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Filtre from "./Filtre";
import BouteilleCard from "./BouteilleCard";
import ModalT from "../ModalT";

import ch9R from "../../assets/ch9R.webp";
import ch9B from "../../assets/ch9B.webp";
import lirac from "../../assets/lirac.webp";
import viognier from "../../assets/viognier.webp";
import pitchotte from "../../assets/pitchotte.webp";
import Form from "react-bootstrap/Form";

import BtnAjouter from "../BtnAjouter";

import "../../style/css/catalogue.css";

function Catalogue() {
  const vins = [
    {
      id: 1,
      image: ch9B,
      couleur: "blanc",
      nom: "Châteauneuf-du-Pape Blanc",
      AOC: "Châteauneuf du Pape",
      prix: 25,
      millesime: 2022,
      quantite: 4,
    },
    {
      id: 2,
      image: ch9R,
      couleur: "rouge",
      nom: "Châteauneuf-du-Pape Rouge",
      AOC: "Châteauneuf du Pape",
      prix: 25,
      millesime: 2020,
      quantite: 1,
    },
    {
      id: 3,
      image: ch9R,
      couleur: "rouge",
      nom: "Châteauneuf-du-Pape Rouge",
      AOC: "Châteauneuf du Pape",
      prix: 28,
      millesime: 2019,
      quantite: 1,
    },
    {
      id: 4,
      image: ch9R,
      couleur: "rouge",
      nom: "Châteauneuf-du-Pape Rouge",
      AOC: "Châteauneuf du Pape",
      prix: 28,
      millesime: 2018,
      quantite: 1,
    },
    {
      id: 5,
      image: lirac,
      couleur: "rouge",
      nom: "Lirac, grand cru classé des côtes du rhônes",
      AOC: "Lirac",
      prix: 15,
      millesime: 2022,
      quantite: 1,
    },
    {
      id: 6,
      image: viognier,
      couleur: "blanc",
      nom: "100% Viogner",
      AOC: "Vin de france",
      prix: 12,
      millesime: 2023,
      quantite: 1,
    },
    {
      id: 7,
      image: pitchotte,
      couleur: "rouge",
      nom: "La Pitchotte",
      AOC: "Vin de france",
      prix: 8,
      millesime: 2023,
      quantite: 1,
    },
  ];

  const filtres = [
    { filtreName: "Blanc" },
    { filtreName: "Rouge" },
    { filtreName: "Châteauneuf du Pape" },
    { filtreName: "Lirac" },
    { filtreName: "Vin de France" },
  ];

  // État pour stocker les vins filtrés et sélectionner la bouteille
  const [filteredVins, setFilteredVins] = useState(vins);
  const [selectedBottle, setSelectedBottle] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("Tous");

  // Fonction pour gérer le filtrage des vins
  const handleFilterClick = (filterName) => {
    setSelectedBottle(0);
    setSelectedFilter(filterName);

    if (filterName === "Tous" || filterName === null) {
      setFilteredVins(vins);
    } else {
      const filtered = vins.filter((vin) => {
        if (filterName === "Blanc") {
          return vin.couleur === "blanc";
        }
        if (filterName === "Rouge") {
          return vin.couleur === "rouge";
        }
        if (filterName === "Lirac") {
          return vin.AOC === "Lirac";
        }
        if (filterName === "Vin de France") {
          return vin.AOC === "Vin de france";
        }
        if (filterName === "Châteauneuf du Pape") {
          return vin.AOC === "Châteauneuf du Pape";
        }
        return false;
      });
      setFilteredVins(filtered);
    }
  };

  // Fonction pour sélectionner une bouteille
  const handleSelect = (selectedIndex, e) => {
    setSelectedBottle(selectedIndex);
  };

  // Fonction pour gérer le clic sur le bouton Ajouter
  const handleAdmiBtn = () => {
    console.log("click");
  };

  return (
    <section className="catalogue">
      {/* Affichage des filtres */}
      <div className="catalogue__filtres">
        {/* Filtre "Tous" */}
        <Filtre
          filtreName={"Tous"}
          options={["Tous"]}
          isSelected={selectedFilter === "Tous"}
          onClick={() => handleFilterClick("Tous")}
        />

        {/* Autres filtres */}
        {filtres.map((item, index) => (
          <Filtre
            key={index}
            filtreName={item.filtreName}
            options={item.options}
            isSelected={selectedFilter === item.filtreName}
            onClick={() => handleFilterClick(item.filtreName)}
          />
        ))}
      </div>

      {/* Affichage des bouteilles */}
      <div className="catalogue__bouteilles">
        {filteredVins.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={item.nom}
            className="catalogue__bouteilles__bt"
            onClick={() => setSelectedBottle(index)}
          />
        ))}
      </div>

      {/* Modal d'ajout */}
      <ModalT
        title={"Ajouter un nouveau vin"}
        btnShow={<BtnAjouter onClick={handleAdmiBtn} />}
        modalContent={
          <Form className="form__ajout__vins form__ajout">
            {/* Contenu du formulaire */}
          </Form>
        }
        btnname={"Retour"}
      />

      {/* Carousel de bouteilles */}
      <div className="catalogue__bouteille">
        <Carousel
          slide={false}
          activeIndex={selectedBottle}
          onSelect={handleSelect}
          className="catalogue__bouteilles__carousel"
        >
          {filteredVins.map((vin, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={vin.image}
                alt={vin.nom}
                onClick={() => setSelectedBottle(index)}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Affichage de la carte de la bouteille sélectionnée */}
      {/* Affichage de la carte de la bouteille sélectionnée */}
      {selectedBottle !== null &&
        selectedBottle >= 0 &&
        selectedBottle < filteredVins.length && (
          <BouteilleCard
            id={filteredVins[selectedBottle].id}
            img_btlle={filteredVins[selectedBottle].image}
            name={filteredVins[selectedBottle].nom}
            couleur={filteredVins[selectedBottle].couleur}
            millesime={filteredVins[selectedBottle].millesime}
            AOC={filteredVins[selectedBottle].AOC}
            prix={filteredVins[selectedBottle].prix}
            quantite={filteredVins[selectedBottle].quantite}
          />
        )}
    </section>
  );
}

export default Catalogue;
