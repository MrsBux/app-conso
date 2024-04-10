import React, { useState, useEffect } from "react";
import Filtre from "../Catalogue/Filtre";
import CardPartner from "./cardsPartners";
import logopp from "../../assets/logopetitpatio.webp";
import logoasw from "../../assets/logoallstarwine.webp";
import logovintq from "../../assets/logovinotq.webp";
import "../../style/css/nospartenaires.css";

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

  const visiblePartners = partners.slice(0, visiblePartner);

  const filtres = [
    { filtreName: "Type" },
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
        )}
      </div>
    </div>
  );
}

export default NosPartenaires;
