import React, { useState, useEffect } from "react";
import ModalT from "../ModalT";
import AgendaMois from "./AgendaMois";

import logoAgenda from "../../assets/logo_agenda.webp";
import ch9B13G from "../../assets/ch9B13G.webp";
import "../../style/css/salonagenda.css";

function SalonAgenda() {
  const [salons, setSalons] = useState();

  const getAllSalons = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/salons/`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch salons");
      }

      const data = await response.json();

      // Convert date strings to Date objects
      const parsedData = data.map((salon) => ({
        ...salon,
        debut: new Date(salon.debut),
        fin: new Date(salon.fin),
      }));

      setSalons(parsedData);
    } catch (error) {
      console.error("Error fetching salons:", error);
      // Handle the error, e.g., display a message to the user
    }
  };

  useEffect(() => {
    getAllSalons();
  }, []);

  useEffect(() => {
    getAllSalons();
  }, []);

  return (
    <div className="salonagenda">
      <div className="salonagenda__box">
        <h3 className="salonagenda__box__title"> Les salons du mois</h3>
        <img
          src={ch9B13G}
          alt="Goulot bouteille de vin"
          className="salonagenda__box__img"
        ></img>{" "}
      </div>

      <ModalT
        btnShow={
          <img
            src={logoAgenda}
            className="salonagenda__img"
            alt="logo d'un agenda"
            title="Cliquez pour voir l'agenda des salons du mois"
          ></img>
        }
        title={"Agenda du mois"}
        modalContent={<AgendaMois salons={salons} />}
        btnname={"Fermer"}
      />
    </div>
  );
}

export default SalonAgenda;
