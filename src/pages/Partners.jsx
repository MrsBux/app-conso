import React, { useState, useEffect } from "react";
import TabTools from "../components/TabTools/index";
import Filtre from "../components/Catalogue/Filtre";
import NosPartenaires from "../components/NosPartenaires";
import FormPartners from "../components/FormPartners";

import logopp from "../assets/logopetitpatio.webp";
import logoasw from "../assets/logoallstarwine.webp";
import logovintq from "../assets/logovinotq.webp";

import viognier13 from "../assets/viognier13.webp";
import lirac12 from "../assets/lirac12.webp";

import "../style/css/partners.css";

function Partners() {
  const partners = [
    {
      name: "Le Petit Patio",
      description: "restaurant à orange",
      contactUrl: "https://au-petit-patio-orange.eatbu.com/?lang=fr",
      category: "restaurateur",
      localisation: 84,
      logoPUrl: logopp,
    },
    {
      name: "La vinothèque des alpes",
      description: "Caviste dans les alpes",
      contactUrl: "https://www.lavinothequedesalpes.fr/",
      category: "caviste",
      localisation: 38,
      logoPUrl: logovintq,
    },
    {
      name: "AllStarWine",
      description: "Revendeur US",
      contactUrl:
        "https://www.allstarwine.com/wines/Domaine-La-Consonniere-Chateauneuf-Du-Pape-2019-w5680855kz",
      category: "caviste",
      localisation: 0,
      logoPUrl: logoasw,
    },
    {
      name: "Le Petit Patio",
      description: "restaurant à orange",
      contactUrl: "https://au-petit-patio-orange.eatbu.com/?lang=fr",
      category: "restaurateur",
      localisation: 84,
      logoPUrl: logopp,
    },
    {
      name: "La vinothèque des alpes",
      description: "Caviste dans les alpes",
      contactUrl: "https://www.lavinothequedesalpes.fr/",
      category: "caviste",
      localisation: 38,
      logoPUrl: logovintq,
    },
    {
      name: "AllStarWine",
      description: "Revendeur US",
      contactUrl:
        "https://www.allstarwine.com/wines/Domaine-La-Consonniere-Chateauneuf-Du-Pape-2019-w5680855kz",
      category: "caviste",
      localisation: 0,
      logoPUrl: logoasw,
    },
    {
      name: "Le Petit Patio",
      description: "restaurant à orange",
      contactUrl: "https://au-petit-patio-orange.eatbu.com/?lang=fr",
      category: "restaurateur",
      localisation: 84,
      logoPUrl: logopp,
    },
    {
      name: "La vinothèque des alpes",
      description: "Caviste dans les alpes",
      contactUrl: "https://www.lavinothequedesalpes.fr/",
      category: "caviste",
      localisation: 38,
      logoPUrl: logovintq,
    },
    {
      name: "AllStarWine",
      description: "Revendeur US",
      contactUrl:
        "https://www.allstarwine.com/wines/Domaine-La-Consonniere-Chateauneuf-Du-Pape-2019-w5680855kz",
      category: "caviste",
      localisation: 0,
      logoPUrl: logoasw,
    },
    {
      name: "Le Petit Patio",
      description: "restaurant à orange",
      contactUrl: "https://au-petit-patio-orange.eatbu.com/?lang=fr",
      category: "restaurateur",
      localisation: 84,
      logoPUrl: logopp,
    },
    {
      name: "La vinothèque des alpes",
      description: "Caviste dans les alpes",
      contactUrl: "https://www.lavinothequedesalpes.fr/",
      category: "caviste",
      localisation: 38,
      logoPUrl: logovintq,
    },
    {
      name: "AllStarWine",
      description: "Revendeur US",
      contactUrl:
        "https://www.allstarwine.com/wines/Domaine-La-Consonniere-Chateauneuf-Du-Pape-2019-w5680855kz",
      category: "caviste",
      localisation: 0,
      logoPUrl: logoasw,
    },
    {
      name: "La vinothèque des alpes",
      description: "Caviste dans les alpes",
      contactUrl: "https://www.lavinothequedesalpes.fr/",
      category: "caviste",
      localisation: 38,
      logoPUrl: logovintq,
    },
  ];

  const [filteredPartners, setFilteredPartners] = useState(partners);
  const [selectedFilter, setSelectedFilter] = useState("Tous");

  const filtres = [
    { filtreName: "Restaurateur" },
    { filtreName: "Caviste" },
    { filtreName: "Importateur" },
    { filtreName: "Autre" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);

  const handleFilterClick = (filterName) => {
    setSelectedFilter(filterName);

    if (filterName === "Tous" || filterName === null) {
      setFilteredPartners(partners);
    } else {
      const filtered = partners.filter((partner) => {
        return partner.category === filterName.toLowerCase(); // Assurez-vous que les noms de catégorie sont en minuscules
      });
      setFilteredPartners(filtered);
    }
  };
  console.log(filteredPartners);
  return (
    <>
      {" "}
      <main>
        <TabTools
          sectionsPage={[
            { page: "partners-list", item: "Liste des partenaires" },
            { page: "partner-form", item: "Formulaire de contact" },
          ]}
        />
        <div className="partenaires">
          <section className="partenaires__box" id="partners-list">
            <NosPartenaires
              partners={filteredPartners}
              selectedFilter={selectedFilter}
              onFilterClick={handleFilterClick}
            />

            {/* Utilisez filteredPartners au lieu de partners */}
            <div className="partenaires__filtresbox">
              <img
                src={viognier13}
                alt="Goulot bouteille Viognier"
                className="partenaires__filtresbox__img"
              ></img>

              <div className="partenaires__filtresbox__box">
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
            </div>
          </section>

          <section className="partenaires__boxform" id="partner-form">
            <img
              src={lirac12}
              alt="Goulot Lirac"
              className="partenaires__boxform__img"
            ></img>

            <FormPartners />
          </section>
        </div>
      </main>
    </>
  );
}

export default Partners;
