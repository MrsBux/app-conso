// PanierContext.js

import React, { createContext, useState } from "react";

// Création contexte de panier

export const PanierContext = createContext({
  panier: [],
  ajouterAuPanier: () => {},
  retirerDuPanier: () => {},
  viderLePanier: () => {},
});

// Créer un fournisseur de contexte pour le panier
export const PanierProvider = ({ children }) => {
  const [panier, setPanier] = useState([]);

  // Fonctions pour ajouter, supprimer et vider le panier
  const ajouterAuPanier = (article, quantite) => {
    // Vérifiez si l'article est déjà dans le panier
    const articleIndex = panier.findIndex((item) => item.id === article.id);
    if (articleIndex !== -1) {
      // Si l'article est déjà dans le panier, incrémente simplement la quantité
      const updatedPanier = [...panier];
      updatedPanier[articleIndex].quantite += quantite;
      setPanier(updatedPanier);
    } else {
      // Sinon, ajoute l'article avec la quantité spécifiée
      setPanier([...panier, { ...article, quantite }]);
    }
  };

  const diminuerQuantite = (articleId) => {
    setPanier((prevPanier) => {
      // Trouver l'index de l'article dans le panier
      const articleIndex = prevPanier.findIndex(
        (article) => article.id === articleId
      );

      // Si l'article est présent dans le panier
      if (articleIndex !== -1) {
        // Copier le panier existant
        const updatedPanier = [...prevPanier];
        // Diminuer la quantité de l'article
        updatedPanier[articleIndex].quantite -= 1;

        // Si la quantité devient 0, retirer l'article du panier
        if (updatedPanier[articleIndex].quantite === 0) {
          updatedPanier.splice(articleIndex, 1);
        }

        // Retourner le nouveau panier
        return updatedPanier;
      }

      // Si l'article n'est pas dans le panier, retourner le panier inchangé
      return prevPanier;
    });
  };
  const retirerDuPanier = (articleId) => {
    setPanier(panier.filter((article) => article.id !== articleId));
  };

  const viderLePanier = () => {
    setPanier([]);
  };

  return (
    <PanierContext.Provider
      value={{
        panier,
        ajouterAuPanier,
        retirerDuPanier,
        viderLePanier,
        diminuerQuantite,
      }}
    >
      {children}
    </PanierContext.Provider>
  );
};
