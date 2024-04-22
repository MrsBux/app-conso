import React, { useState, useEffect } from "react";
import Filtre from "../Catalogue/Filtre";
import CardPartner from "./cardsPartners";
import logopp from "../../assets/logopetitpatio.webp";
import logoasw from "../../assets/logoallstarwine.webp";
import logovintq from "../../assets/logovinotq.webp";
import "../../style/css/nospartenaires.css";

import ModalT from "../ModalT";
import Form from "react-bootstrap/Form";

import BtnAjouter from "../BtnAjouter";

function NosPartenaires() {
  const [visiblePartner, setVisiblePartner] = useState();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    // Initialize visiblePartner based on isMobile
    setVisiblePartner(isMobile ? 4 : partners.length);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const partners = [
    {
      name: "Le Petit Patio",
      description: "restaurant à orange",
      contact: "https://au-petit-patio-orange.eatbu.com/?lang=fr",
      category: "restaurateur",
      localisation: 84,
      logo: logopp,
    },
    {
      name: "La vinothèque des alpes",
      description: "Caviste dans les alpes",
      contact: "https://www.lavinothequedesalpes.fr/",
      category: "caviste",
      localisation: 38,
      logo: logovintq,
    },
    {
      name: "AllStarWine",
      description: "Revendeur US",
      contact:
        "https://www.allstarwine.com/wines/Domaine-La-Consonniere-Chateauneuf-Du-Pape-2019-w5680855kz",
      category: "caviste",
      localisation: 0,
      logo: logoasw,
    },
    {
      name: "Le Petit Patio",
      description: "restaurant à orange",
      contact: "https://au-petit-patio-orange.eatbu.com/?lang=fr",
      category: "restaurateur",
      localisation: 84,
      logo: logopp,
    },
    {
      name: "La vinothèque des alpes",
      description: "Caviste dans les alpes",
      contact: "https://www.lavinothequedesalpes.fr/",
      category: "caviste",
      localisation: 38,
      logo: logovintq,
    },
    {
      name: "AllStarWine",
      description: "Revendeur US",
      contact:
        "https://www.allstarwine.com/wines/Domaine-La-Consonniere-Chateauneuf-Du-Pape-2019-w5680855kz",
      category: "caviste",
      localisation: 0,
      logo: logoasw,
    },
    {
      name: "Le Petit Patio",
      description: "restaurant à orange",
      contact: "https://au-petit-patio-orange.eatbu.com/?lang=fr",
      category: "restaurateur",
      localisation: 84,
      logo: logopp,
    },
    {
      name: "La vinothèque des alpes",
      description: "Caviste dans les alpes",
      contact: "https://www.lavinothequedesalpes.fr/",
      category: "caviste",
      localisation: 38,
      logo: logovintq,
    },
    {
      name: "AllStarWine",
      description: "Revendeur US",
      contact:
        "https://www.allstarwine.com/wines/Domaine-La-Consonniere-Chateauneuf-Du-Pape-2019-w5680855kz",
      category: "caviste",
      localisation: 0,
      logo: logoasw,
    },
    {
      name: "Le Petit Patio",
      description: "restaurant à orange",
      contact: "https://au-petit-patio-orange.eatbu.com/?lang=fr",
      category: "restaurateur",
      localisation: 84,
      logo: logopp,
    },
    {
      name: "La vinothèque des alpes",
      description: "Caviste dans les alpes",
      contact: "https://www.lavinothequedesalpes.fr/",
      category: "caviste",
      localisation: 38,
      logo: logovintq,
    },
    {
      name: "AllStarWine",
      description: "Revendeur US",
      contact:
        "https://www.allstarwine.com/wines/Domaine-La-Consonniere-Chateauneuf-Du-Pape-2019-w5680855kz",
      category: "caviste",
      localisation: 0,
      logo: logoasw,
    },
    {
      name: "La vinothèque des alpes",
      description: "Caviste dans les alpes",
      contact: "https://www.lavinothequedesalpes.fr/",
      category: "caviste",
      localisation: 38,
      logo: logovintq,
    },
    {
      name: "AllStarWine",
      description: "Revendeur US",
      contact:
        "https://www.allstarwine.com/wines/Domaine-La-Consonniere-Chateauneuf-Du-Pape-2019-w5680855kz",
      category: "caviste",
      localisation: 0,
      logo: logoasw,
    },
    {
      name: "Le Petit Patio",
      description: "restaurant à orange",
      contact: "https://au-petit-patio-orange.eatbu.com/?lang=fr",
      category: "restaurateur",
      localisation: 84,
      logo: logopp,
    },
    {
      name: "La vinothèque des alpes",
      description: "Caviste dans les alpes",
      contact: "https://www.lavinothequedesalpes.fr/",
      category: "caviste",
      localisation: 38,
      logo: logovintq,
    },
    {
      name: "AllStarWine",
      description: "Revendeur US",
      contact:
        "https://www.allstarwine.com/wines/Domaine-La-Consonniere-Chateauneuf-Du-Pape-2019-w5680855kz",
      category: "caviste",
      localisation: 0,
      logo: logoasw,
    },
  ];

  const handleToggleVisibility = () => {
    setVisiblePartner((visible) => (visible === 4 ? partners.length : 4));
  };

  const handleAdmiBtn = () => {
    console.log("click");
  };

  const visiblePartners = partners.slice(0, visiblePartner);

  const filtres = [
    { filtreName: "Localisation" },
    { filtreName: "Restaurateurs" },
    { filtreName: "Caviste" },
    { filtreName: "Importateur" },
    { filtreName: "Autre" },
  ];

  const handleFiltersClick = () => {
    console.log("click");
  };

  return (
    <div className="nospartenaires">
      <h2 className="nospartenaires__title"> NOS PARTENAIRES</h2>
      <div className="nospartenaires__filtresmobiles">
        <Filtre
          filtreName={"Tous"}
          onClick={handleFiltersClick}
          isSelected={false}
        />
      </div>
      <div className="nospartenaires__gallery">
        {visiblePartners.map((item, index) => (
          <CardPartner key={index} logo={item.logo} name={item.name} />
        ))}
        {isMobile && (
          <button
            className="nospartenaires__gallery__btn"
            onClick={handleToggleVisibility}
          >
            {visiblePartner === 4 ? "Voir plus" : "Voir moins"}
          </button>
        )}{" "}
        <ModalT
          title={"Ajouter un nouveau partenaire"}
          btnShow={<BtnAjouter onClick={handleAdmiBtn} />}
          modalContent={
            <Form className="form__ajout__partenaire form__ajout">
              <Form.Group
                className="form__groupe"
                controlId="name__ajoutpartenaire"
              >
                <Form.Label>Nom du partenaire</Form.Label>
                <Form.Control type="text" placeholder="Nom du partenaire" />
              </Form.Group>

              <Form.Group
                className="form__groupe"
                controlId="description__ajoutpartenaire"
              >
                <Form.Label>Description du partenaire</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description du partenaire"
                />
              </Form.Group>

              <Form.Group
                className="form__groupe"
                controlId="contact__ajoutpartenaire"
              >
                <Form.Label>Site web du partenaire</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Site web du partenaire"
                />
              </Form.Group>

              <Form.Group
                className="form__groupe"
                controlId="category__ajoutpartenaire"
              >
                <Form.Label>Catégorie du partenaire</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Catégorie du partenaire"
                />
              </Form.Group>

              <Form.Group
                className="form__groupe"
                controlId="localisation__ajoutpartenaire"
              >
                <Form.Label>Localisation du partenaire</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Localisation du partenaire"
                />
              </Form.Group>

              <Form.Group
                className="form__groupe"
                controlId="logo__ajoutpartenaire"
              >
                <Form.Label>Logo du partenaire</Form.Label>
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

export default NosPartenaires;
