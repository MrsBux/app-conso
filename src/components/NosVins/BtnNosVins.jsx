import React from "react";
import "../../style/css/btnnosvins.css";

function BtnNosvins({ txtBtnNosVins, id }) {
  return (
    <button className="btnNV" id={id}>
      {txtBtnNosVins}
    </button>
  );
}

export default BtnNosvins;
