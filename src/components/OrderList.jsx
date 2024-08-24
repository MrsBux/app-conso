import React from "react";

const OrderList = ({ orders }) => {
  return (
    <div className="order-list">
      {orders.map((order) => (
        <div key={order._id} className="order-item">
          <h5>Commande ID: {order._id}</h5>
          {order.date ? <p> Date :{order.date.toLocaleDateString()}</p> : null}

          {order.statut ? <p> Statut : {order.statut}</p> : null}
          <p>
            Client: {order.nom} {order.prenom}
          </p>
          <p>Email: {order.email}</p>
          <p>Adresse: {order.adresse}</p>
          <p>Total: {order.totalPrice}€</p>
          <p>Type de paiement: {order.paiementType}</p>
          <p>Type de livraison: {order.deliveryType}</p>
          <h6>Vins commandés:</h6>
          <ul>
            {order.wine.map((item, index) => (
              <li key={index}>
                {item.wineName} - Quantité: {item.quantite}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default OrderList;
