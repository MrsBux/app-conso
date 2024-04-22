import React, { useState } from "react";
import "../style/css/btnadmin.css";

function BtnSupprimer({ onClick }) {
  const [isAdminConnected, setIsAdminConnect] = useState(true);

  return (
    <button
      className={`btnadmin ${isAdminConnected ? "isAdminConnectedClass" : ""}`}
      onClick={onClick}
    >
      Supprimer -
    </button>
  );
}

export default BtnSupprimer;
