import React, { useState } from "react";
import "../../style/css/cardpartner.css";
import ModalT from "../ModalT";

function CardPartner({ logo, name, coordonates, type }) {
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
            title={name}
            modalContent={
              <div className="modalt">
                <p>{coordonates}</p>
                <p>{type}</p>
              </div>
            }
            btnname={"Retour"}
          />
          <ModalT
            btnShow={
              <div className="logo__back">
                <p className="logo__back__p">{name}</p>
              </div>
            }
            title={name}
            modalContent={
              <div className="modalt">
                <p>{coordonates}</p>
                <p>{type}</p>
              </div>
            }
            btnname={"Retour"}
          />
        </div>
      </div>
    </>
  );
}

export default CardPartner;
