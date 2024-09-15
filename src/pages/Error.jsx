import { Link } from "react-router-dom";
import "../style/css/error.css";
import btlError from "../assets/btlerror.webp";

function Error() {
  return (
    <>
      <main>
        <section className="error">
          <p className="error__code"> 404 </p>
          <p className="error__txt">
            {" "}
            Oups! La page que vous demandez n'existe pas.{" "}
          </p>
          <div className="error__link">
            <Link to="/" className="error__link__l" id="errora">
              {" "}
              Retourner sur la page d'accueil{" "}
            </Link>
            <img src={btlError} className="error__link__img"></img>
          </div>
        </section>
      </main>
    </>
  );
}
export default Error;
