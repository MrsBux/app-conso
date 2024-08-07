import React, { useState, useEffect } from "react";
import "../style/css/btnadmin.css";
import { isTokenPresent } from "../store/auth"; // Import the token verification function

function BtnModifier({ onClick }) {
  const [isAdminConnected, setIsAdminConnected] = useState(false);

  useEffect(() => {
    setIsAdminConnected(isTokenPresent());
  }, []);

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
