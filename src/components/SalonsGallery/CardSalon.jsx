import React, { useState } from "react";
import "../../style/css/cardsalon.css";
import ModalT from "../ModalT";
import BtnSupprimer from "../BtnSupprimer";
import BtnModifier from "../BtnModifier";

function CardSalon({ logo, name, date, localisation, type, imgsalon }) {
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
                <img src={imgsalon}></img>
                <p>{localisation}</p>
                <p> {date}</p>
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
