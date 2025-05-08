import React from "react";

const OrderList = ({ orders }) => {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // Tri des commandes de la plus ancienne à la plus récente
  const sortedOrders = [...orders].sort((a, b) => {
    const dateA = new Date(a.Date);
    const dateB = new Date(b.Date);
    return dateA - dateB;
  });

  return (
    <div className="order-list">
      {sortedOrders.map((order) => (
        <div key={order._id} className="order-item">
          <h5>Commande ID: {order._id}</h5>
          {order.date ? <p>Date : {order.date.toLocaleDateString()}</p> : null}
          {order.statut ? <p>Statut : {order.statut}</p> : null}
          <p>
            Client: {order.nom} {order.prenom}
          </p>
          <p>Email: {order.email}</p>
          <p>Adresse: {order.adresse}</p>

          <p> Code Postal {order.codePostal}</p>
          <p>Ville : {order.ville}</p>
          <p>Total: {order.totalPrice}€</p>
          <p>Type de paiement: {order.paiementType}</p>
          <p>Date : {formatDate(order.Date)}</p>
          <p>Type de livraison: {order.deliveryType}</p>
          <h6>Vins commandés:</h6>
          <ul>
            {order.wine.map((item, index) => (
              <li key={index}>
                {item.wineName} - Quantité: {item.quantite} - Millésime :{" "}
                {item.wineMillesime}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
