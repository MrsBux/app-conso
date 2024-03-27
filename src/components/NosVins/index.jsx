import React from "react";
import BtnNosvins from "./BtnNosVins";
import "../../style/css/nosvins.css";
import nosVins from "../../assets/nosVins.webp";

function NosVins() {
  const txt = [
    { txtbtn: "J'en veux !0" },
    { txtbtn: "Où est-ce que je peux en trouver?1" },
    { txtbtn: "Tester votre palais !2" },
    { txtbtn: "GFV3" },
    { txtbtn: "Venez déguster en salon!4" },
  ];

  return (
    <div className="nosvins">
      <h2> NOS VINS</h2>
      <img src={nosVins} className="nosvins__img"></img>
      <div className="nosvins__btns">
        {txt.map((item, index) => (
          <BtnNosvins
            key={index}
            txtBtnNosVins={item.txtbtn}
            id={`btnNV__${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default NosVins;
