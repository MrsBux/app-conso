import React, { useState, useContext } from "react";
import { PanierContext } from "../../store/panierContext";
import like from "../../assets/like.webp";
import liked from "../../assets/liked.webp";
import caddy from "../../assets/caddy.webp";
import ModalT from "../ModalT";
import BtnSupprimer from "../BtnSupprimer";
import BtnModifier from "../BtnModifier";
import "../../style/css/bouteilleCard.css";

function BouteilleCard({
  id,
  img_btlle,
  name,
  AOC,
  prix,
  millesime,
  volume,
  degustationVideo,
  couleur,
  presse,
  degustation,
  pdf,
}) {
  const { ajouterAuPanier } = useContext(PanierContext);
  const [isLiked, setIsLiked] = useState(false);

  const handleAjouterAuPanier = () => {
    const article = {
      id,
      img_btlle,
      name,
      AOC,
      prix,
      millesime,
      couleur,
    };
    ajouterAuPanier(article, 1);
    alert(`L'article "${name}" a été ajouté au panier`);
    console.log("Article ajouté au panier :", article);
  };

  const handleHeartClick = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  return (
    <div className="bouteille">
      <div className="bouteille__card">
        <div className="bouteille__card__box1">
          <h3 className="bouteille__card__box1__name">{name}</h3>
          {AOC === "Vin de France" ? (
            <p className="bouteille__card__box1__AOC">{AOC}</p>
          ) : (
            <p></p>
          )}
          <p className="bouteille__card__box1__prix">{prix} euros</p>

          <ModalT
            btnShow={
              <p className="bouteille__card__box1__btnplus"> Voir plus </p>
            }
            id={"none"}
            modalContent={
              <div className="bouteillecard__modal">
                <div className="bouteillecard__modal__details">
                  <p>{name}</p>
                  <p>{AOC}</p>
                  <p>{millesime}</p>
                  <p>{couleur}</p>
                  <p>{prix}</p>
                  <p>{volume}</p>
                  {presse && <p>{presse}</p>}
                  <p>{degustation}</p>
                  <a
                    href={degustationVideo}
                    className="bouteillecard__modal__details__a"
                    alt="Vidéo explicative dégustation du vin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Découvrez notre dégustation filmée
                  </a>
                  {pdf && (
                    <a
                      href={pdf}
                      download={`${name.replace(/\s+/g, "-")}.pdf`}
                      className="modalt__txt__btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Télécharger la fiche détail du vin
                    </a>
                  )}
                </div>
                <div className="bouteillecard__modal__icon">
                  <button className="modalt__txt__btn__caddy">
                    <img
                      className="modalt__txt__btn__caddy"
                      src={caddy}
                      id="caddy"
                    ></img>
                  </button>
                  {isLiked ? (
                    <button
                      className="modalt__txt__btn__caddy"
                      onClick={handleHeartClick}
                    >
                      <img
                        className="modalt__txt__btn__caddy"
                        src={liked}
                        id="liked"
                        alt="liked"
                      ></img>{" "}
                    </button>
                  ) : (
                    <button
                      className="modalt__txt__btn__caddy"
                      onClick={handleHeartClick}
                    >
                      <img
                        className="modalt__txt__btn__caddy"
                        src={like}
                        id="like"
                        alt="like"
                      ></img>
                    </button>
                  )}
                </div>
                <BtnSupprimer />
              </div>
            }
            title={name}
            btnname={"Retour"}
          />
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
              className="bouteille__card__box2__like__caddy"
              onClick={handleAjouterAuPanier}
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
