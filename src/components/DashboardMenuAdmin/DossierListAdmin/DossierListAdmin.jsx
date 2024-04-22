import React, { useState } from "react";
import "../../../style/css/dossierdepresse.css";

import LiPartnersAd from "./ListePartnersAdmin";
import LiWinesAd from "./ListeWinesAdmin";
import LiSalonsAd from "./ListeSalonsAdmin";

import ch9R from "../../../assets/ch9R.webp";
import ch9B from "../../../assets/ch9B.webp";
import lirac from "../../../assets/lirac.webp";
import viognier from "../../../assets/viognier.webp";
import pitchotte from "../../../assets/pitchotte.webp";

import logopp from "../../../assets/logopetitpatio.webp";
import logoasw from "../../../assets/logoallstarwine.webp";
import logovintq from "../../../assets/logovinotq.webp";

import logo from "../../../assets/logoallstarwine.webp";
import logo2 from "../../../assets/logopetitpatio.webp";
import logo3 from "../../../assets/logovinotq.webp";
import logo4 from "../../../assets/logobeige.webp";

function DossierListAdmin() {
  const vins = [
    {
      image: ch9B,
      nom: "Châteauneuf-du-Pape Blanc",
      AOC: "Châteauneuf du Pape",
      prix: 25,
      millesime: 2022,
    },
    {
      image: ch9R,
      nom: "Châteauneuf-du-Pape Rouge",
      AOC: "Châteauneuf du Pape",
      prix: 25,
      millesime: 2020,
    },
    {
      image: ch9R,
      nom: "Châteauneuf-du-Pape Rouge",
      AOC: "Châteauneuf du Pape",
      prix: 28,
      millesime: 2019,
    },
    {
      image: ch9R,
      nom: "Châteauneuf-du-Pape Rouge",
      AOC: "Châteauneuf du Pape",
      prix: 28,
      millesime: 2018,
    },
    {
      image: lirac,
      nom: "Lirac",
      AOC: "Lirac, grand cru classé des côtes du rhônes",
      prix: 15,
      millesime: 2022,
    },
    {
      image: viognier,
      nom: "100% Viogner",
      AOC: "Vin de france",
      prix: 12,
      millesime: 2023,
    },
    {
      image: pitchotte,
      nom: "La Pitchotte",
      AOC: "Vin de france",
      prix: 8,
      millesime: 2023,
    },
  ];

  const salons = [
    {
      name: "Les Printemps des vins",
      logo: logo,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo2,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo3,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo4,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo3,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo2,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo2,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",
      logo: logo4,
      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
  ];

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

  const [visibleComponent, setVisibleComponent] = useState(null);

  const handleClick = (component) => {
    setVisibleComponent(component);
  };

  const handleReturnClick = (component) => {
    setVisibleComponent(null);
  };

  return (
    <div className="dossieradmin dossierdepresse">
      {!visibleComponent && ( // Afficher les boutons seulement si visibleComponent est null
        <>
          <button
            className="dossierdepresse__btn dossieradmin__btn"
            onClick={() =>
              handleClick(
                <LiWinesAd wines={vins} onClick={handleReturnClick} />
              )
            }
          >
            Tous les vins
          </button>

          <button
            className="dossierdepresse__btn  dossieradmin__btn"
            onClick={() =>
              handleClick(
                <LiSalonsAd salons={salons} onClick={handleReturnClick} />
              )
            }
          >
            Tous les salons
          </button>

          <button
            className="dossierdepresse__btn dossieradmin__btn"
            onClick={() =>
              handleClick(
                <LiPartnersAd partners={partners} onClick={handleReturnClick} />
              )
            }
          >
            Tous les partenaires
          </button>
        </>
      )}
      <div className="dossieradmin__content">{visibleComponent}</div>
    </div>
  );
}

export default DossierListAdmin;
