import React, { useState } from "react";
import "../../style/css/cardsalon.css";
import ModalT from "../ModalT";

function CardSalon({ logo, name, date, localisation, type, imgsalon }) {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

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
                <img src={logo} className="cardSalon__front__img"></img>
                <p className="cardSalon__front__name">{name}</p>
              </div>
            }
            title={{ name }}
            modalContent={
              <div className="modalt">
                <p>{name}</p>
                <p>{type}</p>
                <img src={imgsalon}></img>
                <p>{localisation}</p>
                <p> {date}</p>
                <button className="modalt__txt__btn">
                  Télécharger ou demander votre invitation
                </button>
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
                <img src={imgsalon}></img>
                <p>{localisation}</p>
                <p> {date}</p>
                <button className="modalt__txt__btn">
                  Télécharger ou demander votre invitation
                </button>
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
