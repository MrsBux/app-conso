import react from "react";
import Filtre from "../Catalogue/Filtre";
import "../../style/css/filtrespartenaires.css";

function FiltrePartenaire({ filtreName, isSelected, onClick }) {
  return (
    <div className="filtrespartnaires">
      <img></img>

      <Filtre
        filtreName={filtreName}
        isSelected={isSelected}
        onClick={onClick}
      />
    </div>
  );
}

export default FiltrePartenaire;
