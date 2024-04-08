import React, { useState } from "react";
import like from "../../assets/like.webp";
import liked from "../../assets/liked.webp";
import caddy from "../../assets/caddy.webp";

import "../../style/css/bouteilleCard.css";

function BouteilleCard({ name, AOC, prix }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleHeartClick = () => {
    if (isLiked) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
  };

  return (
    <div className="bouteille">
      <div className="bouteille__card">
        <div className="bouteille__card__box1">
          <h3 className="bouteille__card__box1__name">{name}</h3>
          <p className="bouteille__card__box1__AOC">{AOC}</p>
          <p className="bouteille__card__box1__prix">{prix}</p>
          <button className="bouteille__card__box1__btnplus">
            {" "}
            Voir plus{" "}
          </button>
        </div>
        <div className="bouteille__card__box2">
          {isLiked ? (
            <button
              className="bouteille__card__box2__like2"
              onClick={handleHeartClick}
            >
              <img
                className="bouteille__card__box2__like2__v2"
                src={liked}
                id="liked"
                alt="liked"
              ></img>{" "}
            </button>
          ) : (
            <button
              className="bouteille__card__box2__like1"
              onClick={handleHeartClick}
            >
              <img
                className="bouteille__card__box2__like1__v1"
                src={like}
                id="like"
                alt="like"
              ></img>
            </button>
          )}

          <button className="bouteille__card__box2__caddy">
            <img
              classname="bouteille__card__box2__like__caddy"
              src={caddy}
              id="caddy"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BouteilleCard;
