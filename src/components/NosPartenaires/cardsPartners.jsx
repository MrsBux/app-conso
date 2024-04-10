import React, { useState } from "react";
import "../../style/css/cardpartner.css";

function CardPartner({ logo, name }) {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  return (
    <>
      <div
        className={`logo ${isCardFlipped ? "flipped" : ""}`}
        onMouseEnter={() => setIsCardFlipped(true)}
        onMouseLeave={() => setIsCardFlipped(false)}
      >
        <div className="logo">
          <div className="logo__front">
            <img src={logo} className="logo__front__img"></img>
          </div>

          <div className="logo__back">
            <p className="logo__back__p">{name}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPartner;
