import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ModalT from "../ModalT";
import CardMD from "./CardMDAdmin";
import "../../style/css/dashboardmenu.css";

function DashboardMenuAdmin() {
  const sections = [
    { name: "Listes des vins et partenaires", contentmod: "Content" },
    { name: "Toutes les demandes utilisateurs", contentmod: "Content" },
    { name: "Mes actions", contentmod: "Content" },
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
            <CardMD key={index} name={item.name} contentmod={item.contentmod} />
          ))}
        </div>

        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="#/action-1">Tableau de Bord</Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            Listes des vins et commandes
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">Demandes utilisateurs</Dropdown.Item>{" "}
          <Dropdown.Item href="#/action-4">Mentions légales</Dropdown.Item>{" "}
          <Dropdown.Item href="#/action-5">Se déconnecter</Dropdown.Item>{" "}
          <Dropdown.Item href="#/action-6">Tous droits réservés</Dropdown.Item>{" "}
        </DropdownButton>
      </div>
      <div className="menuD__divers">
        <ModalT
          btnShow={<p className="menuD__divers__ml">Mentions Légales</p>}
          modalContent={"Mentions légales"}
        />
        <button className="menuD__divers__btn" onClick={handleClick}>
          {" "}
          Se déconnecter
        </button>
        <p className="menuD__divers__td"> Tous droits réservés.</p>
      </div>
    </aside>
  );
}

export default DashboardMenuAdmin;
