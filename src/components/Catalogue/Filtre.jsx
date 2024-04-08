import React from "react";

import "../../style/css/filtre.css";

function Filtre({ filtreName, isSelected, onClick }) {
  return (
    <div className="filtres">
      <button
        className={`filtres__btn ${isSelected ? "clicked" : ""}`}
        onClick={onClick}
      >
        {filtreName}
      </button>
    </div>
  );
}

export default Filtre;
