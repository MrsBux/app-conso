import react from "react";
import Filtre from "../Catalogue/Filtre";
import "../../style/css/filtrespartenaires.css";
import viognier13 from "../../assets/viognier13.webp";

function FiltrePartenaire({ filtreName, isSelected, onClick }) {
  return (
    <div className="filtrespartenaires">
      <img
        src={viognier13}
        alt="Goulot bouteille Viognier"
        className="filtrespartenaires__img"
      ></img>
      <div className="filtrespartenaires__box">
        <Filtre
          filtreName={filtreName}
          isSelected={isSelected}
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export default FiltrePartenaire;
