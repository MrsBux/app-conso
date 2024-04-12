import React, { useState } from "react";

import poubelle from "../../assets/poubelle.webp";

import "../../style/css/itempanier.css";
function ItemPanier({
  img_btlle,
  name,
  couleur,
  millesime,
  prix,
  onQuantiteChange,
}) {
  const [quantite, setQuantite] = useState(1);

  const handleClickPlus = () => {
    const newQuantite = quantite + 1;
    setQuantite(newQuantite);
    onQuantiteChange(newQuantite);
  };

  const handleClickMoins = () => {
    const newQuantite = Math.max(1, quantite - 1);
    setQuantite(newQuantite);
    onQuantiteChange(newQuantite);
  };
  const total = prix * quantite;
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
        <p className="item__quantite__number"> {quantite} </p>
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
        <img src={poubelle} className="item__total__delete"></img>
        <p className="item__total__prix">{total} euros</p>
      </div>
    </div>
  );
}

export default ItemPanier;
