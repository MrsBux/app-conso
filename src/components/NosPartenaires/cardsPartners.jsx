import React, { useState } from "react";
import "../../style/css/cardpartner.css";
import ModalT from "../ModalT";

function CardPartner({ logo, name, modco }) {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  return (
    <>
      <div
        className={`logo ${isCardFlipped ? "flipped" : ""}`}
        onMouseEnter={() => setIsCardFlipped(true)}
        onMouseLeave={() => setIsCardFlipped(false)}
      >
        <div className="logo">
          <ModalT
            btnShow={
              <div className="logo__front">
                <img src={logo} className="logo__front__img"></img>
              </div>
            }
            modalContent={modco}
          />
          <ModalT
            btnShow={
              <div className="logo__back">
                <p className="logo__back__p">{name}</p>
              </div>
            }
            modalContent={modco}
          />
        </div>
      </div>
    </>
  );
}

export default CardPartner;
