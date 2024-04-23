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
      image: ch9B,
      couleur: "blanc",
      nom: "Châteauneuf-du-Pape Blanc",
      AOC: "Châteauneuf du Pape",
      prix: 25,
      millésime: 2022,
    },
    {
      image: ch9R,
      couleur: "rouge",
      nom: "Châteauneuf-du-Pape Rouge",
      AOC: "Châteauneuf du Pape",
      prix: 25,
      millésime: 2020,
    },
    {
      image: ch9R,
      couleur: "rouge",
      nom: "Châteauneuf-du-Pape Rouge",
      AOC: "Châteauneuf du Pape",
      prix: 28,
      millésime: 2019,
    },
    {
      image: ch9R,
      couleur: "rouge",
      nom: "Châteauneuf-du-Pape Rouge",
      AOC: "Châteauneuf du Pape",
      prix: 28,
      millésime: 2018,
    },
    {
      image: lirac,
      couleur: "rouge",
      nom: "Lirac",
      AOC: "Lirac, grand cru classé des côtes du rhônes",
      prix: 15,
      millésime: 2022,
    },
    {
      image: viognier,
      couleur: "blanc",
      nom: "100% Viogner",
      AOC: "Vin de france",
      prix: 12,
      millésime: 2023,
    },
    {
      image: pitchotte,
      couleur: "rouge",
      nom: "La Pitchotte",
      AOC: "Vin de france",
      prix: 8,
      millésime: 2023,
    },
  ];

  const filtres = [
    { filtreName: "couleur", options: ["rouge", "blanc"] },
    {
      filtreName: "Millésimes",
      options: [2016, 2018, 2019, 2020, 2021, 2022, 2023],
    },
    { filtreName: "Prix", options: ["0-10", "10-20", "20-30", "30+"] },
    {
      filtreName: "Appelation",
      options: ["Châteauneuf du Pape", "Lirac", "Vin de France"],
    },
  ];

  // État pour stocker les vins filtrés et sélectionner la bouteille
  const [filteredVins, setFilteredVins] = useState(vins);
  const [selectedBottle, setSelectedBottle] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("Tous");

  // Fonction pour gérer le filtrage des vins
  const handleFilterClick = (filterName, option) => {
    setSelectedBottle(0);
    setSelectedFilter(filterName);

    // Filtrer les vins en fonction de l'option sélectionnée
    if (option === null || option === "Tous") {
      setFilteredVins(vins); // Afficher tous les vins si "Tous" est sélectionné
    } else {
      console.log("Avant filtrage :", vins); // Afficher les vins avant le filtrage

      const filtered = vins.filter((vin) => {
        console.log(option);
        console.log(vin.couleur);
        console.log("Vin couleur :", vin.couleur); // Ajouter ce console.log
        return vin.couleur == option;
      });
      console.log("Après filtrage :", filtered); // Afficher les vins après le filtrage
      setFilteredVins(filtered); // Afficher les vins de la couleur sélectionnée
    }
  };

  const handleFilterSelection = (selectedOption) => {
    // Traiter la valeur de l'option sélectionnée comme vous le souhaitez
    console.log("Option sélectionnée :", selectedOption);
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
          onFilterClick={handleFilterClick} // Passer la fonction handleFilterClick comme prop
          onFilterSelection={handleFilterSelection}
        />

        {/* Autres filtres */}
        {filtres.map((item, index) => (
          <Filtre
            key={index}
            filtreName={item.filtreName}
            options={item.options}
            isSelected={selectedFilter === item.filtreName}
            onFilterClick={handleFilterClick} // Passer la fonction handleFilterClick comme prop
            onFilterSelection={handleFilterSelection} // Passer la fonction handleFilterSelection comme prop
          />
        ))}
      </div>

      {/* Affichage des bouteilles */}
      <div className="catalogue__bouteilles">
        {filteredVins.map((vin, index) => (
          <img
            key={index}
            src={vin.image}
            alt={vin.nom}
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
            name={filteredVins[selectedBottle].nom}
            AOC={filteredVins[selectedBottle].AOC}
            prix={`${filteredVins[selectedBottle].prix} euros`}
          />
        )}
    </section>
  );
}

export default Catalogue;
