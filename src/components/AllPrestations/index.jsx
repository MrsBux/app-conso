import React from "react";
import BtnNV from "../NosVins/BtnNosVins";
import ModalT from "../ModalT";
import ReservationForm from "../ReservationsForm";

import "../../style/css/allprestations.css";

import glass from "../../assets/verre.webp";

function AllPrestations() {
  const txtP = [
    { txtbtn: "Dégustation au caveau!" },
    { txtbtn: "Dégustation au caveau en groupe" },
    { txtbtn: "Restropective complète de nos millésimes (2009-2023)" },
    { txtbtn: "Bouteilles personnalisables" },
    { txtbtn: "Journées accord mets & vins" },
    { txtbtn: "Visite complète du domaine, masterclass dégustation" },
    { txtbtn: "J'offre une prestation" },
    { txtbtn: "Créer une prestation sur mesure" },
    { txtbtn: "Visite et deégustation dans les vignes" },
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
          <p className="allprestations__btn btnG">
            {" "}
            Réserver votre prestation !
          </p>
        }
        modalContent={<ReservationForm />}
        btnname={"Retour"}
        title={"Réserver votre prestation"}
      />
    </div>
  );
}
export default AllPrestations;
