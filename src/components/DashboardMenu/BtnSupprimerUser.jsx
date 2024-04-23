import React from "react";
import "../../style/css/btnuser.css";

function BtnSupprimerUser({ onClick }) {
  return (
    <button className={"btnuser"} onClick={onClick}>
      Supprimer -
    </button>
  );
}

export default BtnSupprimerUser;
