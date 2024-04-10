import React, { useState } from "react";
import "../../style/css/cardsalon.css";

function CardSalon({ logo, name, date, localisation }) {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  return (
    <>
      <div
        className={`cardSalon ${isCardFlipped ? "flipped" : ""}`}
        onMouseEnter={() => setIsCardFlipped(true)}
        onMouseLeave={() => setIsCardFlipped(false)}
      >
        <div className="cardSalon">
          <div className="cardSalon__front">
            <img src={logo} className="cardSalon__front__img"></img>
            <p>{name}</p>
          </div>

          <div className="cardSalon__back">
            <p className="cardSalon__back__p">{date}</p>
            <p className="cardSalon__back__p">{localisation}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSalon;
