import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/css/cardpartner.css";
import ModalT from "../ModalT";
import BtnSupprimer from "../BtnSupprimer";

function CardPartner({ id, logoPUrl, name, contactUrl, type, localisation }) {
  const navigate = useNavigate();
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const handleAdmiBtn = () => {
    console.log("click");
  };

  const idP = id;

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");

    fetch(
      `https://domconso-d13067f1e717.herokuapp.com/api/partners/Delete/${idP}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la suppression du partenaire");
        }
        return response.json();
      })
      .then(() => {
        alert("Partenaire supprimé");
        navigate("/partners");
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
