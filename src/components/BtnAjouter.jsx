import React, { useState } from "react";
import "../style/css/btnadmin.css";

function BtnAjouter({ onClick }) {
  const [isAdminConnected, setIsAdminConnect] = useState(false);

  return (
    <button
      className={`btnadmin ${isAdminConnected ? "isAdminConnectedClass" : ""}`}
      onClick={onClick}
    >
      Ajouter +
    </button>
  );
}

export default BtnAjouter;