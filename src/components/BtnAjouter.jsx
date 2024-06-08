import React, { useState, useEffect } from "react";
import "../style/css/btnadmin.css";
import { isTokenPresent } from "../store/auth"; // Import the token verification function

function BtnAjouter({}) {
  const [isAdminConnected, setIsAdminConnected] = useState(false);

  useEffect(() => {
    setIsAdminConnected(isTokenPresent());
  }, []);

  return (
    <div
      className={`btnadmin ${isAdminConnected ? "isAdminConnectedClass" : ""}`}
    >
      Ajouter +
    </div>
  );
}

export default BtnAjouter;
