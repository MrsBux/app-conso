import React from "react";
import "../../style/css/btnnosvins.css";
import { Link } from "react-router-dom";

function BtnNosvins({ txtBtnNosVins, id, page, handleClick }) {
  return (
    <Link to={page}>
      <button className="btnNV" id={id} onClick={handleClick}>
        {txtBtnNosVins}
      </button>
    </Link>
  );
}

export default BtnNosvins;
