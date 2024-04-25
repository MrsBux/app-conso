import React, { useState, useContext } from "react";
import { PanierContext } from "../../store/panierContext";
import poubelle from "../../assets/poubelle.webp";

import "../../style/css/itempanier.css";
function ItemPanier({
  id,
  img_btlle,
  name,
  AOC,
  couleur,
  millesime,
  prix,
  quantiteArticle,
  onQuantiteChange,
}) {
  const { ajouterAuPanier, retirerDuPanier, diminuerQuantite } =
    useContext(PanierContext);

  const handleClickPlus = () => {
    const article = {
      id,
      img_btlle,
      name,
      AOC,
      prix,
      millesime,
      couleur,
    };
    // Ajouter l'article au panier avec une quantité de 1
    ajouterAuPanier(article, 1);
  };

  const handleClickMoins = () => {
    // Diminuer la quantité de l'article dans le panier
    diminuerQuantite(id);
  };

  const handleDeleteItemClick = () => {
    // Retirer l'article du panier
    retirerDuPanier(id);
  };

  const total = prix * quantiteArticle;
  console.log(prix, quantiteArticle, total);

  return (
    <div className="item">
      <img src={img_btlle} className="item__img"></img>

      <div className="item__details">
        <p className="item__details__name">{name}</p>
        <p className="item__details__couleur item__details__p">{couleur}</p>
        <p className="item__details__millesime item__details__p">{millesime}</p>
        <p className="item__details__prix">{prix} euros</p>
      </div>
      <div className="item__quantite">
        <p className="item__quantite__number"> {quantiteArticle} </p>
        <div className="item__quantite__btns">
          <button
            className="item__quantite__btns__plus"
            onClick={handleClickPlus}
          >
            +
          </button>
          <button
            className="item__quantite__btns__moins"
            onClick={handleClickMoins}
          >
            -
          </button>
        </div>
      </div>
      <div className="item__total">
        <img
          src={poubelle}
          className="item__total__delete"
          onClick={handleDeleteItemClick}
        ></img>
        <p className="item__total__prix">{total} euros</p>
      </div>
    </div>
  );
}

export default ItemPanier;
