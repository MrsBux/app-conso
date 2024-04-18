import React from "react";
import BtnNV from "../NosVins/BtnNosVins";
import ModalT from "../ModalT";

import "../../style/css/allprestations.css";

import glass from "../../assets/verre.webp";

function AllPrestations() {
  const txtP = [
    { txtbtn: "Dégustation au caveau!0" },
    { txtbtn: "Dégustation au caveau en groupe1" },
    { txtbtn: "Restropective complète de nos millésimes (2009-2023)2" },
    { txtbtn: "Bouteilles personnalisables3" },
    { txtbtn: "Journées accord mets & vins4" },
    { txtbtn: "Visite complète du domaine, masterclass dégustation5" },
    { txtbtn: "J'offre une prestation6" },
    { txtbtn: "Créer une prestation sur mesure7" },
    { txtbtn: "Visite et deégustation dans les vignes8" },
    { txtbtn: "9" },
    { txtbtn: "10" },
  ];

  return (
    <div className="allprestations">
      <img src={glass} className="allprestations__img"></img>
      <div className="allprestations__all">
        {txtP.map((item, index) => (
          <BtnNV
            key={index}
            txtBtnNosVins={item.txtbtn}
            id={`btnNVP__${index}`}
          />
        ))}
      </div>

      <ModalT
        btnShow={
          <button className="allprestations__btn btnG">
            {" "}
            Réserver votre prestation !
          </button>
        }
        modalContent={"Réservations prestations"}
      />
    </div>
  );
}
export default AllPrestations;
