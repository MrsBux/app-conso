import React, { useState } from "react";
import "../../style/css/cardpartner.css";
import ModalT from "../ModalT";
import BtnSupprimer from "../BtnSupprimer";

function CardPartner({ id, logoPUrl, name, contactUrl, type, localisation }) {
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const handleAdmiBtn = () => {
    console.log("click");
  };

  const idP = id;

  const handleDelete = (id) => {
    console.log(`http://localhost:3000/api/partners/Delete/${idP}`);
    fetch(`http://localhost:3000/api/partners/Delete/${idP}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la suppression du partenaire");
        }
        return response.json();
      })
      .then(() => {
        console.log("Partenaire supprimé avec succès");
        alert("Partenaire supprimé");
        window.location.href = "/partners";
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression du partenaire :", error);
        setError(error.message);
      });
  };

  return (
    <>
      <div
        className={`logo ${isCardFlipped ? "flipped" : ""} logop`}
        onMouseEnter={() => setIsCardFlipped(true)}
        onMouseLeave={() => setIsCardFlipped(false)}
      >
        <div className="logo">
          <ModalT
            btnShow={
              <div className="logo__front">
                <p className="logop__name"> {name}</p>
                {/* <img src={logoPUrl} className="logo__front__img"></img> */}
              </div>
            }
            title={name}
            modalContent={
              <div className="modalt">
                <p>{contactUrl}</p>
                <p>{localisation}</p>
                <p>{type}</p>
                <BtnSupprimer onClick={handleAdmiBtn} />
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
                <p>{contactUrl}</p>
                <p>{type}</p>
                <BtnSupprimer onClick={handleDelete} />
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
