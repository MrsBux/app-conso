import "../../style/css/whoweare.css";
import Chiffre from "./chiffre";
import Icon from "./icon";
import logo from "../../assets/logo_loupe.webp";

function WhoWeAre() {
  return (
    <>
      <div className="whoweare">
        <h2> QUI SOMMES NOUS ? </h2>
        <Icon icon={logo} text_icon="text" />
        <h3> Quelques chiffres</h3>
        <Chiffre chiffre="234" text_chiffre="text" />
        <img src=""></img>
      </div>
    </>
  );
}

export default WhoWeAre;
