import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

import "../../style/css/filtre.css";

function Filtre({ filtreName, options, onFilterClick, onFilterSelection }) {
  // Déclaration de l'état pour gérer l'ouverture/fermeture du menu
  const [isOpen, setIsOpen] = useState(false);
  // Déclaration de l'état pour stocker les options sélectionnées
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Fonction pour basculer l'état d'ouverture du menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fonction pour basculer l'état de sélection d'une option
  const toggleOption = (option) => {
    // Vérifie si l'option est déjà sélectionnée
    const isSelected = selectedOptions.includes(option);

    setSelectedOptions((prevSelectedOptions) => {
      if (isSelected) {
        // Si l'option est déjà sélectionnée, la retire des options sélectionnées
        const updatedOptions = prevSelectedOptions.filter(
          (selected) => selected !== option
        );
        console.log(`FselectedOptions after removal__${updatedOptions}`);
        return updatedOptions;
      } else {
        // Sinon, ajoute l'option aux options sélectionnées
        const updatedOptions = [...prevSelectedOptions, option];
        console.log(`FselectedOptions after addition__ ${updatedOptions}`);
        return updatedOptions;
      }
    });

    // Appel de la fonction onFilterClick du composant parent avec le nom du filtre et l'option sélectionnée
    onFilterClick(filtreName, option);
    // Appel de la fonction onFilterSelection du composant parent avec l'option sélectionnée
    onFilterSelection(option);
  };

  return (
    <div className="filtres">
      {/* Bouton pour ouvrir/fermer le menu */}
      <button className={`filtres__btn`} onClick={toggleMenu}>
        {filtreName}
      </button>
      {/* Affichage du menu si isOpen est true */}
      {isOpen && (
        <div className="filtres__menu">
          <Form>
            {/* Affichage des options sous forme de cases à cocher */}
            {options.map((option, index) => (
              <Form.Check
                key={index}
                inline
                label={option}
                type="checkbox"
                id={`checkbox-${index}`}
                // La case à cocher est cochée si l'option est sélectionnée
                checked={selectedOptions.includes(option)}
                // Appel de la fonction toggleOption lorsqu'on clique sur une case à cocher
                onChange={() => toggleOption(option)}
              />
            ))}
          </Form>
        </div>
      )}
    </div>
  );
}

export default Filtre;
