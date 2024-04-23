import React, { useState } from "react";
import "../style/css/btnadmin.css";

function BtnAjouter({ onClick }) {
  const [isAdminConnected, setIsAdminConnect] = useState(false);

  return (
    <div
      className={`btnadmin ${isAdminConnected ? "isAdminConnectedClass" : ""}`}
      onClick={onClick}
    >
      Ajouter +
    </div>
  );
}

export default BtnAjouter;
