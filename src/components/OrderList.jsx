import React from "react";

const OrderList = ({ orders }) => {
  function formatDate(dateString) {
    // Vérifier si dateString est valide
    if (!dateString) return "Date non disponible";

    try {
      const date = new Date(dateString);
      // Vérifier si la date est valide
      if (isNaN(date.getTime())) return "Date invalide";

      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    } catch (error) {
      console.error("Erreur lors du formatage de la date:", error);
      return "Erreur de date";
    }
  }

  // Tri des commandes de la plus récente à la plus ancienne
  // Correction: utiliser le champ "Date" (majuscule) qui est référencé dans le formatDate et l'affichage
  const sortedOrders = [...orders].sort((a, b) => {
    const dateA = new Date(a.Date || 0); // Utiliser 0 comme fallback si a.Date est undefined
    const dateB = new Date(b.Date || 0); // Utiliser 0 comme fallback si b.Date est undefined
    return dateB - dateA; // Inversé pour trier de la plus récente à la plus ancienne
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
