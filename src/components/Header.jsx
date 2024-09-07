import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../style/css/header.css";
import logoBeige from "../assets/logobeige.webp";
import user from "../assets/user.webp";
import panier from "../assets/panier.webp";

function Header() {
  const [isLog, setIsLog] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);
    console.log(id, userId, "id");
    if (userId) {
      setIsLog(true);
    } else {
      setIsLog(false);
    }
  }, []);

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img
            src={logoBeige}
            alt="logo bux web compagnie"
            className="logobeige"
          ></img>
        </Link>
      </div>
      <nav className="menu">
        <Link to="/" className="menu__link">
          Accueil
        </Link>
        <Link to="/gallery" className="menu__link">
          Galerie
        </Link>
        <Link to="/salons" className="menu__link">
          Salons
        </Link>
        <Link to="/partners" className="menu__link">
          Partenaires
        </Link>
        <Link to="/prestations" className="menu__link">
          Prestations
        </Link>

        {isLog && userId ? (
          <Link to={`/dashboard/${userId}`} className="menu__link">
            <img src={user} alt="User profile" className="menu__link__logo" />
          </Link>
        ) : (
          <Link to="/login" className="menu__link">
            <img src={user} alt="User profile" className="menu__link__logo" />
          </Link>
        )}

        <Link to="/dashboard" className="menu__link">
          <img
            src={user}
            alt="logo login/dashboard"
            className="menu__link__logo2"
          ></img>
        </Link>

        <Link to="/panier" className="menu__link">
          <img
            src={panier}
            alt="logo panier"
            className="menu__link__logo3"
          ></img>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
