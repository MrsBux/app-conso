import React, { useState } from "react";
import "../style/css/btnadmin.css";

function BtnModifier({ onClick }) {
  const [isAdminConnected, setIsAdminConnect] = useState(false);

  return (
    <button
      className={`btnadmin ${isAdminConnected ? "isAdminConnectedClass" : ""}`}
      onClick={onClick}
    >
      Modifier
    </button>
  );
}

export default BtnModifier;
