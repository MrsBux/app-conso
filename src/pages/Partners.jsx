import React, { useState, useEffect } from "react";
import TabTools from "../components/TabTools/index";
import Filtre from "../components/Catalogue/Filtre";
import NosPartenaires from "../components/NosPartenaires";
import FormPartners from "../components/FormPartners";

import viognier13 from "../assets/viognier13.webp";
import lirac12 from "../assets/lirac12.webp";

import "../style/css/partners.css";

function Partners() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);

  const filtres = [
    { filtreName: "Localisation" },
    { filtreName: "Restaurateurs" },
    { filtreName: "Caviste" },
    { filtreName: "Importateur" },
    { filtreName: "Autre" },
  ];

  const [selectedFilter, setSelectedFilter] = useState("Tous");

  const handleFilterClick = (filterName) => {
    setSelectedFilter(filterName);
  };

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
            <NosPartenaires />

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
