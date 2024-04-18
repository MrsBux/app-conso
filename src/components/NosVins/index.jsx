import React from "react";
import BtnNosvins from "./BtnNosVins";
import "../../style/css/nosvins.css";
import nosVins from "../../assets/nosVins.webp";

function NosVins() {
  const txt = [
    { txtbtn: "J'en veux !", page: "/gallery" },
    { txtbtn: "Où est-ce que je peux en trouver?", page: "/partners" },
    { txtbtn: "Tester votre palais !" },
    { txtbtn: "GFV3", page: "/prestations" },
    { txtbtn: "Venez déguster en salon!", page: "/salons" },
  ];

  return (
    <div className="nosvins">
      <h2 className="nosvins__title"> NOS VINS</h2>
      <img src={nosVins} className="nosvins__img"></img>
      <div className="nosvins__btns">
        {txt.map((item, index) => (
          <BtnNosvins
            key={index}
            txtBtnNosVins={item.txtbtn}
            id={`btnNV__${index}`}
            page={item.page}
          />
        ))}
      </div>
    </div>
  );
}

export default NosVins;
