import React, { useState, useEffect, useContext } from "react";
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
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

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
  };

  const fetchData = async (name) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `https://domconso-d13067f1e717.herokuapp.com/api/user/update/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            favoriteWine: name,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      alert("Votre vin coup de coeur a été modifié dans votre profil !");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleHeartClick = () => {
    setIsLiked((prevIsLiked) => {
      const newIsLiked = !prevIsLiked;
      fetchData(newIsLiked ? name : "");
      return newIsLiked;
    });
  };

  return (
    <div className="bouteille">
      <div className="bouteille__card">
        <div className="bouteille__card__box1">
          <h3 className="bouteille__card__box1__name">{name}</h3>

          <p className="bouteille__card__box1__millesime">{millesime}</p>
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
                  <button
                    className="modalt__txt__btn__caddy"
                    onClick={handleAjouterAuPanier}
                  >
                    <img
                      className="modalt__txt__btn__caddy"
                      src={caddy}
                      id="caddy"
                      alt="caddy"
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
                      ></img>
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
              ></img>
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

          <button
            className="bouteille__card__box2__caddy"
            onClick={handleAjouterAuPanier}
          >
            <img
              className="bouteille__card__box2__like__caddy"
              src={caddy}
              id="caddy"
              alt="caddy"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BouteilleCard;
