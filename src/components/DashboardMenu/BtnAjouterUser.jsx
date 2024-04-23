import React from "react";
import "../../style/css/btnuser.css";

function BtnAjouterUser({ onClick }) {
  return (
    <button className={"btnuser"} onClick={onClick}>
      Ajouter +
    </button>
  );
}

export default BtnAjouterUser;
