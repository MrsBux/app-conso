import React, { useState } from "react";
import "../style/css/btnadmin.css";

function BtnModifier({ onClick }) {
  const [isAdminConnected, setIsAdminConnect] = useState(false);

  return (
    <div
      className={`btnadmin ${isAdminConnected ? "isAdminConnectedClass" : ""}`}
      onClick={onClick}
    >
      Modifier
    </div>
  );
}

export default BtnModifier;
