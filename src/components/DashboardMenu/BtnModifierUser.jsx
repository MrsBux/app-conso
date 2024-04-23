import React from "react";
import "../../style/css/btnuser.css";

function BtnModifierUser({ onClick }) {
  return (
    <button className={"btnuser"} onClick={onClick}>
      Modfier
    </button>
  );
}

export default BtnModifierUser;
