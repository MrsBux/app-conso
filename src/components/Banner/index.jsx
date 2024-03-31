import bt1 from "../../assets/ch9R913.webp";
import bt2 from "../../assets/ch9R923.webp";
import bt3 from "../../assets/chR933.webp";
import "../../style/css/banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__box1">
        <img src={bt1} alt="partie 1 bouteille" id="bt1"></img>
      </div>
      <div className="banner__box2">
        <img src={bt2} alt="partie 2 bouteille" id="bt2"></img>
      </div>
      <div className="banner__box3">
        <h1>
          DOMAINE <br /> LA CONSONNIERE
        </h1>
        <img src={bt3} alt="culot de bouteille" id="bt3"></img>
      </div>
    </div>
  );
}

export default Banner;
