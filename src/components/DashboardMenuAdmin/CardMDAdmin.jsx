import React from "react";
import "../../style/css/cardMD.css";

function CardMDAdmin({ name, onclick }) {
  return (
    <button className="cardmd" onClick={onclick}>
      {name}
    </button>
  );
}
export default CardMDAdmin;
