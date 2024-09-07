import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../style/css/dossierdepresse.css";

function DossierUser() {
  const { userId } = useParams();

  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  const [visibleComponent, setVisibleComponent] = useState(null);

  useEffect(() => {
    getMyOrders();
  }, []);

  const getMyOrders = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/order/All");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      const filteredOrders = data.filter((order) => order.userId === userId);

      setOrders(filteredOrders);
    } catch (err) {
      console.error(
        "Une erreur s'est produite lors de la récupération des commandes :",
        err
      );
    } finally {
    }
  };

  const handleClick = (component) => {
    setVisibleComponent(component);
  };

  const handleReturnClick = (component) => {
    setVisibleComponent(null);
  };

  return (
    <div className="dossieruser dossierdepresse">
      {!visibleComponent && ( // Afficher les boutons seulement si visibleComponent est null
        <></>
      )}
      <div className="dossieruser__content">{visibleComponent}</div>
    </div>
  );
}

export default DossierUser;
