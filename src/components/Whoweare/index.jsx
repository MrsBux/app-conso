import "../../style/css/whoweare.css";
import Chiffre from "./chiffre";
import Icon from "./icon";
import logo from "../../assets/logo_loupe.webp";
import iconBook from "../../assets/iconbook.webp";
import iconGrapes from "../../assets/icongrapes.webp";
import iconWine from "../../assets/iconwine.webp";
import iconBottle from "../../assets/iconbottle.webp";
import carte from "../../assets/Capture d’écran de 2024-03-25 15-35-29.png";
import LoadingButton from "../LoadingButton";

function WhoWeAre() {
  const icons = [
    { icon: iconBook, text_icon: "Texte 1" },
    { icon: iconGrapes, text_icon: "Texte 2" },
    { icon: iconWine, text_icon: "Texte 3" },
    { icon: iconBottle, text_icon: "Texte 4" },
  ];

  const chiffres = [
    { chiffre: "1880", text_chiffre: "Texte chiffre 1" },
    { chiffre: "8,2", text_chiffre: "Texte chiffre 2" },
    { chiffre: "5", text_chiffre: "Texte chiffre 3" },
    { chiffre: "25", text_chiffre: "Texte chiffre 4" },
  ];

  return (
    <>
      <div className="whoweare">
        <h2 className="whoweare__maintitle"> QUI SOMMES NOUS ? </h2>
        <div className="whoweare__icons">
          {icons.map((item, index) => (
            <Icon key={index} icon={item.icon} text_icon={item.text_icon} />
          ))}{" "}
        </div>
        <h3 className="whoweare__title"> Quelques chiffres</h3>
        <div className="whoweare__chiffres">
          {chiffres.map((item, index) => (
            <Chiffre
              key={index}
              chiffre={item.chiffre}
              text_chiffre={item.chiffre}
              id={`chiffre__${index}`}
            />
          ))}{" "}
        </div>
        <div className="whoweare__map">
          <img src={carte} className="whoweare__map__img"></img>
          <LoadingButton />
        </div>
      </div>
    </>
  );
}

export default WhoWeAre;
