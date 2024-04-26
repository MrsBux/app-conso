import React, { useState } from "react";
import "../../style/css/cardsalon.css";
import ModalT from "../ModalT";
import BtnSupprimer from "../BtnSupprimer";
import BtnModifier from "../BtnModifier";

function CardSalon({
  id,
  logoUrl,
  name,
  date,
  localisation,
  type,
  invitation,
  debut,
  fin,
  description,
}) {
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const handleAdmiBtn = () => {
    console.log("click");
  };

  return (
    <>
      <div
        className={`cardSalon ${isCardFlipped ? "flipped" : ""}`}
        onMouseEnter={() => setIsCardFlipped(true)}
        onMouseLeave={() => setIsCardFlipped(false)}
      >
        <div className="cardSalon">
          <ModalT
            btnShow={
              <div className="cardSalon__front">
                <img src={logoUrl} className="cardSalon__front__img"></img>
                <p className="cardSalon__front__name">{name}</p>
              </div>
            }
            title={{ name }}
            modalContent={
              <div className="modalt">
                <p>{name}</p>
                <p>{type}</p>
                <img src={logoUrl}></img>
                <p>{localisation}</p>
                <p> {date}</p>
                <p>{description}</p>

                <button className="modalt__txt__btn">
                  {" "}
                  <a href={invitation}>
                    {" "}
                    Télécharger ou demander votre invitation
                  </a>
                </button>
                <ModalT
                  btnShow={<BtnModifier />}
                  title={"Modifier le salon"}
                  btnname={"Retour"}
                />
                <BtnSupprimer onClick={handleAdmiBtn} />
              </div>
            }
            btnname={"Retour"}
          />
          <ModalT
            btnShow={
              <div className="cardSalon__back">
                <p className="cardSalon__back__p">{date}</p>
                <p className="cardSalon__back__p">{localisation}</p>
              </div>
            }
            title={name}
            modalContent={
              <div className="modalt">
                <p>{name}</p>
                <p>{type}</p>
                <img src={logoUrl}></img>
                <p>{localisation}</p>
                <p> {date}</p>
                <p>{description}</p>
                <button className="modalt__txt__btn">
                  Télécharger ou demander votre invitation
                </button>{" "}
                <ModalT
                  btnShow={<BtnModifier />}
                  title={"Modifier le salon"}
                  btnname={"Retour"}
                />
                <BtnSupprimer onClick={handleAdmiBtn} />
              </div>
            }
            btnname={"Retour"}
          />
        </div>
      </div>
    </>
  );
}

export default CardSalon;
