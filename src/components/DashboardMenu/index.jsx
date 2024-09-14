import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ModalT from "../ModalT";
import DossierUser from "./DossierUser";
import MentionsLegales from "./MentionsLegales";
import UserBook from "./UserBook";

import CardMD from "./CardMD";
import "../../style/css/dashboardmenu.css";

function DashboardMenu() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUser();
  }, [userId]);

  const getUser = async () => {
    const token = localStorage.getItem("token");

    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://domconso-d13067f1e717.herokuapp.com/api/user/One/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUser(data);
    } catch (err) {
      console.error(
        "Une erreur s'est produite lors de la récupération de l'utilisateur:",
        err
      );
      setError("Impossible de charger les données de l'utilisateur.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;
  if (!user) return <div>Aucun utilisateur trouvé.</div>;

  const sections = [
    { name: "Informations personnelles", contentmod: <UserBook user={user} /> },
  ];

  const handleHelpClick = (e) => {
    e.preventDefault(); // Empêcher le rafraîchissement de la page
    // Ajoutez ici votre logique pour afficher la modale
  };

  const handleClick = () => {
    console.log("click");
  };

  const handleContactByEmail = () => {
    window.location.href = "mailto:contact@domainelaconsonniere.fr";
  };

  return (
    <aside className="menuD">
      <div className="menuD__box">
        <h6 className="menuD__box__title">Menu de navigation</h6>
        <div className="menuD__box__sections">
          {sections.map((item, index) => (
            <CardMD key={index} name={item.name} contentmod={item.contentmod} />
          ))}
        </div>

        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="#/action-1">Tableau de Bord</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Toutes mes commandes</Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            Informations personnelles
          </Dropdown.Item>{" "}
          <Dropdown.Item href="#/action-4">Mentions légales</Dropdown.Item>{" "}
          <Dropdown.Item href="#/action-5">Se déconnecter</Dropdown.Item>{" "}
          <Dropdown.Item href="#/action-6">Besoin d'aide ?</Dropdown.Item>{" "}
          <Dropdown.Item href="#/action-7">Tous droits réservés</Dropdown.Item>{" "}
        </DropdownButton>
      </div>
      <div className="menuD__divers">
        <ModalT
          title={"Mentions Légales"}
          btnShow={<p className="menuD__divers__btn">Mentions Légales</p>}
          modalContent={<MentionsLegales />}
          btnname={"Fermer"}
        />
        <Link to="/login">
          {" "}
          <button className="menuD__divers__btn" onClick={handleClick}>
            {" "}
            Se déconnecter
          </button>
        </Link>
        <ModalT
          title={"Besoin d'aide?"}
          btnShow={
            <a
              href="#"
              className="menuD__divers__ahelp"
              onClick={handleHelpClick}
            >
              {" "}
              Besoin d'aide ?
            </a>
          }
          modalContent={
            <div>
              <p>
                Pour toute demande, n'hésitez pas à nous contacter par e-mail à{" "}
                <a href="mailto:contact@domainelaconsonniere.fr">
                  contact@domainelaconsonniere.fr
                </a>{" "}
                ou par téléphone au 06 03 49 48 81.
              </p>
              <button
                className="modalt__txt__btn"
                onClick={handleContactByEmail}
              >
                Contactez-nous par e-mail
              </button>
            </div>
          }
          btnname={"Fermer"}
        />

        <p className="menuD__divers__td"> Tous droits réservés.</p>
      </div>
    </aside>
  );
}

export default DashboardMenu;
