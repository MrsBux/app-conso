import React from "react";
import { Link } from "react-router-dom";
import "../style/css/header.css";
import logoBeige from "../assets/logobeige.webp";
import user from "../assets/user.webp";
import panier from "../assets/panier.webp";
import { useAuth } from "../store/AuthContext";

function Header() {
  const { isLoggedIn, userId, userType, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img
            src={logoBeige}
            alt="logo bux web compagnie"
            className="logobeige"
          />
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

        {userType === "adm" && (
          <Link to="/dashboardadmin" className="menu__link">
            Mon espace
          </Link>
        )}

        {userType === "user" && (
          <Link to={`/dashboard/${userId}`} className="menu__link">
            Mon espace
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/login" className="menu__link">
            <img src={user} alt="User profile" className="menu__link__logo" />
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/" className="menu__link">
            <button id="btnGV" onClick={handleLogout}>
              Logout
            </button>
          </Link>
        )}

        <Link to="/panier" className="menu__link">
          <img src={panier} alt="logo panier" className="menu__link__logo3" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
