import React, { useState } from "react";
import "../style/css/btnadmin.css";

function BtnLogOut({ onClick }) {
  const [isAdminConnected, setIsAdminConnect] = useState(false);

  return (
    <button
      className={`btnadminlogout ${
        isAdminConnected ? "isAdminConnectedClassLog" : ""
      }`}
      onClick={onClick}
    >
      Se déconnecter
    </button>
  );
}

export default BtnLogOut;
