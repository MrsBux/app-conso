import React, { useState } from "react";
import "../../style/css/cardsalon.css";
import ModalT from "../ModalT";

function CardSalon({ logo, name, date, localisation, modc }) {
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
            modalContent={modc}
          />
          <ModalT
            btnShow={
              <div className="cardSalon__back">
                <p className="cardSalon__back__p">{date}</p>
                <p className="cardSalon__back__p">{localisation}</p>
              </div>
            }
            modalContent={modc}
          />
        </div>
      </div>
    </>
  );
}

export default CardSalon;
