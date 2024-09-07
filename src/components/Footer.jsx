import { Link } from "react-router-dom";
import "../style/css/footer.css";
import Admin from "../assets/Admin.webp";
import logoInsta from "../assets/logoinst.webp";
import logoFB from "../assets/logofb.webp";
import BtnLogOut from "./BtnLogOut";
import React, { useState, useEffect } from "react";

function Footer() {
  const [isAdminConnected, setIsAdminConnect] = useState(false);

  useEffect(() => {
    const typage = localStorage.getItem("type");
    const token = localStorage.getItem("token");
    if (typage === "adm" && token) {
      setIsAdminConnect(true);
    } else {
      setIsAdminConnect(false);
    }
  }, []);

  const handleAdmiBtn = () => {
    console.log(click);
  };

  return (
    <footer>
      <div className="footerBox">
        <div className="footerBox__log">
          <BtnLogOut onClick={handleAdmiBtn} />
          <Link
            to="/loginadmin"
            className={`footerBox__login__a1 
            }`}
          >
            <img
              src={Admin}
              alt="logo login admin"
              className="footerBox__login__a1__img"
            ></img>
          </Link>
        </div>

        <div className="footerBox__coordonates">
          <p className="footerBox__coordonates__mail">
            {" "}
            contact@domainelaconsonniere.fr <br />
          </p>
          {isAdminConnected ? (
            <p
              className="footerBox__login__p1"
              onClick={() => (window.location.href = "/dashboardadmin")}
            >
              {" "}
              DOM CONSO{" "}
            </p>
          ) : null}
          <p className="footerBox__coordonates__adresse">
            {" "}
            7 Chemin de Boursan, 84230 Châteauneuf-du-Pape <br /> France{" "}
          </p>

          <p className="footerBox__coordonates__copyright">
            {" "}
            © BUX WEB COMPAGNIE 2024
          </p>
        </div>

        <nav className="footerBox__login">
          <a
            href="https://www.instagram.com/domaine_laconsonniere/"
            target="_blank"
            className="footerBox__login__a2"
          >
            <img
              src={logoInsta}
              alt="logoInsta"
              className="footerBox__login__a2__logo"
            ></img>
          </a>

          <a
            href="https://www.facebook.com/Domainelaconsonniere/?locale=fr_FR"
            className="footerBox__login__a2"
            target="_blank"
          >
            <img
              src={logoFB}
              alt="logoInsta"
              className="footerBox__login__a2__logo"
            ></img>
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
