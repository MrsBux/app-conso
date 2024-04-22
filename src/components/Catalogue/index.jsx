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
import BtnSupprimer from "../BtnSupprimer";
import BtnModifier from "../BtnModifier";

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

  const handleAdmiBtn = () => {
    console.log("click");
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
        <ModalT
          title={"Ajouter un nouveau vin"}
          btnShow={<BtnAjouter onClick={handleAdmiBtn} />}
          modalContent={
            <Form className="form__ajout__vins form__ajout">
              <Form.Group className="form__groupe" controlId="image__ajoutvin">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" accept="image/*" />
              </Form.Group>

              <Form.Group className="form__groupe" controlId="nom__ajoutvin">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="Nom du vin" />
              </Form.Group>

              <Form.Group className="form__groupe" controlId="AOC__ajoutvin">
                <Form.Label>AOC</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Appellation d'Origine Contrôlée"
                />
              </Form.Group>

              <Form.Group className="form__groupe" controlId="prix__ajoutvin">
                <Form.Label>Prix</Form.Label>
                <Form.Control type="number" placeholder="Prix du vin" />
              </Form.Group>

              <Form.Group
                className="form__groupe"
                controlId="millesime__ajoutvin"
              >
                <Form.Label>Millésime</Form.Label>
                <Form.Control type="number" placeholder="Millésime du vin" />
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
