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
import pitpdf from "../../assets/pdf/pit.pdf";
import ch9rpdf from "../../assets/pdf/ch9r.pdf";
import lirpdf from "../../assets/pdf/lirac.pdf";
import viopdf from "../../assets/pdf/vio.pdf";
import ch9bpdf from "../../assets/pdf/ch9b.pdf";
import Btn from "../Btn";

function Catalogue() {
  const filtres = [
    { filtreName: "Blanc" },
    { filtreName: "Rouge" },
    { filtreName: "Châteauneuf du Pape" },
    { filtreName: "Lirac" },
    { filtreName: "Vin de France" },
  ];

  const vins = [
    {
      id: 1,
      image: ch9B,
      couleur: "Blanc",
      nom: "Châteauneuf du Pape Blanc",
      AOC: "Châteauneuf du Pape",
      prix: 25,
      volume: "75cl",
      millesime: 2022,
      degustation: "Dégustation",
      degustationVideo: "https://www.youtube.com/watch?v=oz7RerYHmkk",
      pdf: ch9bpdf,
    },
    {
      id: 2,
      image: ch9R,
      couleur: "Rouge",
      nom: "Châteauneuf du Pape Rouge",
      AOC: "Châteauneuf du Pape",
      prix: 25,
      volume: "75cl",
      millesime: 2020,
      degustationVideo: "https://www.youtube.com/watch?v=oz7RerYHmkk",
      pdf: ch9rpdf,
    },
    {
      id: 3,
      image: ch9R,
      couleur: "Rouge",
      nom: "Châteauneuf du Pape Rouge",
      AOC: "Châteauneuf du Pape",
      prix: 28,
      volume: "75cl",
      millesime: 2019,
      degustationVideo:
        "https://www.youtube.com/watch?v=oz7RerYHmkk&list=RDoz7RerYHmkk&start_radio=1",
      pdf: ch9rpdf,
    },
    {
      id: 5,
      image: lirac,
      couleur: "Rouge",
      nom: "Lirac, Cru Classé des Côtes-du-Rhône",
      AOC: "Lirac",
      volume: "75cl",
      prix: 15,
      millesime: 2022,
      degustationVideo:
        "https://www.youtube.com/watch?v=oz7RerYHmkk&list=RDoz7RerYHmkk&start_radio=1",
      pdf: lirpdf,
    },
    {
      id: 6,
      image: viognier,
      couleur: "Blanc",
      nom: "100% Viogner",
      AOC: "Vin de france",
      prix: 12,
      volume: "75cl",
      millesime: 2023,
      degustationVideo:
        "https://www.youtube.com/watch?v=oz7RerYHmkk&list=RDoz7RerYHmkk&start_radio=1",
      pdf: viopdf,
    },
    {
      id: 7,
      image: pitchotte,
      couleur: "Rouge",
      nom: "La Pitchotte",
      AOC: "Vin de france",
      volume: "75cl",
      prix: 8,
      millesime: 2023,
      degustationVideo:
        "https://www.youtube.com/watch?v=oz7RerYHmkk&list=RDoz7RerYHmkk&start_radio=1",
      pdf: pitpdf,
    },
  ];

  const [filteredVins, setFilteredVins] = useState(vins);
  const [selectedBottle, setSelectedBottle] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("Tous");

  const handleFilterClick = (filterName) => {
    setSelectedBottle(0);
    setSelectedFilter(filterName);

    if (filterName === "Tous" || filterName === null) {
      setFilteredVins(vins);
    } else {
      const filtered = vins.filter((vin) => {
        if (filterName === "Blanc") return vin.couleur === "Blanc";
        if (filterName === "Rouge") return vin.couleur === "Rouge";
        if (filterName === "Lirac") return vin.AOC === "Lirac";
        if (filterName === "Vin de France") return vin.AOC === "Vin de france";
        if (filterName === "Châteauneuf du Pape")
          return vin.AOC === "Châteauneuf du Pape";
        return false;
      });
      setFilteredVins(filtered);
    }
  };

  const handleSelect = (selectedIndex, e) => setSelectedBottle(selectedIndex);

  return (
    <section className="catalogue">
      <div className="catalogue__filtres">
        <Filtre
          filtreName={"Tous"}
          options={["Tous"]}
          isSelected={selectedFilter === "Tous"}
          onClick={() => handleFilterClick("Tous")}
        />
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
            volume={filteredVins[selectedBottle].volume}
            degustation={filteredVins[selectedBottle].degustation}
            degustationVideo={filteredVins[selectedBottle].degustationVideo}
            pdf={filteredVins[selectedBottle].pdf}
          />
        )}

      <Btn
        txt_btnG={"Je file voir mon panier !"}
        onclick={() => (window.location.href = "/panier")}
      />
    </section>
  );
}

export default Catalogue;
