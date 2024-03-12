import { Link } from "react-router-dom";
import "../style/css/footer.css";
import Admin from "../assets/Admin.webp";
import logoInsta from "../assets/icon_insta.webp";

function Footer() {
  return (
    <footer>
      <div className="footerBox">
        <div className="footerBox__coordonates">
          <p className="footerBox__coordonates__mail">
            {" "}
            contact@domainelaconsonniere.fr <br />
          </p>
          <p className="footerBox__coordonates__adresse">
            {" "}
            7 Chemin de Boursan, 84370 Bédarrides <br /> France{" "}
          </p>

          <p className="footerBox__coordonates__copyright">
            {" "}
            © BUX WEB COMPAGNIE 2024
          </p>
        </div>

        <nav className="footerBox__login">
          <Link to="/loginadmin" className="footerBox__login__a1">
            <img
              src={Admin}
              alt="logo login admin"
              className="footerBox__login__a1__img"
            ></img>
          </Link>

          <a href="http://www.instagram.com" className="footerBox__login__a2">
            <img
              src={logoInsta}
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
