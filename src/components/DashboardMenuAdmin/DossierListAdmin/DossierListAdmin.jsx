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
      id: 1,
      image: ch9B,
      couleur: "blanc",
      nom: "Châteauneuf-du-Pape Blanc",
      AOC: "Châteauneuf du Pape",
      prix: 25,
      volume: "75cl",
      millesime: 2022,
      degustationVideo:
        "https://www.youtube.com/watch?v=oz7RerYHmkk&list=RDoz7RerYHmkk&start_radio=1",
    },
    {
      id: 2,
      image: ch9R,
      couleur: "rouge",
      nom: "Châteauneuf-du-Pape Rouge",
      AOC: "Châteauneuf du Pape",
      prix: 25,
      volume: "75cl",
      millesime: 2020,
      degustationVideo:
        "https://www.youtube.com/watch?v=oz7RerYHmkk&list=RDoz7RerYHmkk&start_radio=1",
    },
    {
      id: 3,
      image: ch9R,
      couleur: "rouge",
      nom: "Châteauneuf-du-Pape Rouge",
      AOC: "Châteauneuf du Pape",
      prix: 28,
      volume: "75cl",
      millesime: 2019,
      degustationVideo:
        "https://www.youtube.com/watch?v=oz7RerYHmkk&list=RDoz7RerYHmkk&start_radio=1",
    },
    {
      id: 4,
      image: ch9R,
      couleur: "rouge",
      nom: "Châteauneuf-du-Pape Rouge",
      AOC: "Châteauneuf du Pape",
      volume: "75cl",
      prix: 28,
      millesime: 2018,
      degustationVideo:
        "https://www.youtube.com/watch?v=oz7RerYHmkk&list=RDoz7RerYHmkk&start_radio=1",
    },
    {
      id: 5,
      image: lirac,
      couleur: "rouge",
      nom: "Lirac, grand cru classé des côtes du rhônes",
      AOC: "Lirac",
      volume: "75cl",
      prix: 15,
      millesime: 2022,
      degustationVideo:
        "https://www.youtube.com/watch?v=oz7RerYHmkk&list=RDoz7RerYHmkk&start_radio=1",
    },
    {
      id: 6,
      image: viognier,
      couleur: "blanc",
      nom: "100% Viogner",
      AOC: "Vin de france",
      prix: 12,
      volume: "75cl",
      millesime: 2023,
      degustationVideo:
        "https://www.youtube.com/watch?v=oz7RerYHmkk&list=RDoz7RerYHmkk&start_radio=1",
    },
    {
      id: 7,
      image: pitchotte,
      couleur: "rouge",
      nom: "La Pitchotte",
      AOC: "Vin de france",
      volume: "75cl",
      prix: 8,
      millesime: 2023,
      degustationVideo:
        "https://www.youtube.com/watch?v=oz7RerYHmkk&list=RDoz7RerYHmkk&start_radio=1",
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
