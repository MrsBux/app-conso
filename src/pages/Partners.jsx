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

const filtres = [
  { filtreName: "Restaurateur" },
  { filtreName: "Caviste" },
  { filtreName: "Importateur" },
  { filtreName: "Autre" },
];

function Partners() {
  const [partners, setPartners] = useState([]);
  const [filteredPartners, setFilteredPartners] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("Tous");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/partners/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des partenaires");
        }
        return response.json();
      })
      .then((data) => {
        setPartners(data);
        setFilteredPartners(data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des partenaires :",
          error
        );
        setError(error.message);
      });
  }, []);

  useEffect(() => {
    if (selectedFilter === "Tous") {
      setFilteredPartners(partners);
    } else {
      const filtered = partners.filter(
        (partner) =>
          partner.category.toLowerCase() === selectedFilter.toLowerCase()
      );
      setFilteredPartners(filtered);
    }
  }, [partners, selectedFilter]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFilterClick = (filterName) => {
    setSelectedFilter(filterName);
  };

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
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
            partners={filteredPartners || []}
            selectedFilter={selectedFilter}
            onFilterClick={handleFilterClick}
          />
          <div className="partenaires__filtresbox">
            <img
              src={viognier13}
              alt="Goulot bouteille Viognier"
              className="partenaires__filtresbox__img"
            />
            <div className="partenaires__filtresbox__box">
              <Filtre
                filtreName="Tous"
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
          />
          <FormPartners />
        </section>
      </div>
    </main>
  );
}

export default Partners;
