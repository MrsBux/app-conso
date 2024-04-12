import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import CardMD from "./CardMD";
import "../../style/css/dashboardmenu.css";

function DashboardMenu() {
  const sections = [
    { name: "Tableau de bord" },
    { name: "Toutes mes commandes et factures" },
    { name: "Informations personnelles" },
  ];

  const handleClick = () => {
    console.log("click");
  };

  return (
    <aside className="menuD">
      <div className="menuD__box">
        <h6 className="menuD__box__title">Menu de navigation</h6>
        <div className="menuD__box__sections">
          {sections.map((item, index) => (
            <CardMD key={index} name={item.name} onclick={handleClick} />
          ))}
        </div>

        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="#/action-1">Tableau de Bord</Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            Toutes mes commandes et factures
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            Informations personnelles
          </Dropdown.Item>{" "}
          <Dropdown.Item href="#/action-4">Mentions légales</Dropdown.Item>{" "}
          <Dropdown.Item href="#/action-5">Se déconnecter</Dropdown.Item>{" "}
          <Dropdown.Item href="#/action-6">Besoin d'aide ?</Dropdown.Item>{" "}
          <Dropdown.Item href="#/action-7">Tous droits réservés</Dropdown.Item>{" "}
        </DropdownButton>
      </div>
      <div className="menuD__divers">
        <p className="menuD__divers__ml">Mentions Légales</p>
        <button className="menuD__divers__btn" onClick={handleClick}>
          {" "}
          Se déconnecter
        </button>
        <a href="" className="menuD__divers__ahelp">
          {" "}
          Besoin d'aide ?
        </a>
        <p className="menuD__divers__td"> Tous droits réservés.</p>
      </div>
    </aside>
  );
}

export default DashboardMenu;
