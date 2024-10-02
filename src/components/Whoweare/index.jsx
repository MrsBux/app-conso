import "../../style/css/whoweare.css";
import Chiffre from "./chiffre";
import Icon from "./icon";
import logo from "../../assets/logo_loupe.webp";
import iconBook from "../../assets/iconbook.webp";
import iconGrapes from "../../assets/icongrapes.webp";
import iconWine from "../../assets/iconwine.webp";
import iconBottle from "../../assets/iconbottle.webp";
import carte from "../../assets/mapch9.jpg";
import LoadingButton from "../LoadingButton";

function WhoWeAre() {
  const downloadMap = () => {
    // URL externe du fichier PDF
    const externalPDFUrl =
      "https://www.chateauneuf.com/wp-content/uploads/2023/11/chateauneuf-du-pape-carte-parcellaire-des-terroirs-et-lieux-dits-1.pdf";
    // Créer un élément de lien temporaire
    const link = document.createElement("a");
    link.href = externalPDFUrl;
    link.target = "_blank"; // Ouvrir dans une nouvelle fenêtre/onglet
    link.download = "map.pdf"; // Nom du fichier téléchargé

    // Ajouter le lien à la page et simuler un clic pour déclencher le téléchargement
    document.body.appendChild(link);
    link.click();

    // Nettoyer et supprimer le lien
    document.body.removeChild(link);
  };

  const icons = [
    {
      icon: iconBook,
      text_icon:
        "L'arrière arrière grand-père Ferulla fait l'acquisition des premières parcelles de Châteauneuf-du-Pape, prémices d'une lignée de vignerons… En 2009, Sébastien Cuscusa, petit-fils d'Armand Ferulla, prend la tête de l'exploitation familiale après avoir fait ses classes dans les travaux viticoles au sein de nombreuses propriétés prestigieuses de l'appellation.",
    },
    {
      icon: iconGrapes,
      text_icon:
        "Le territoire de l'AOC Châteauneuf-du-Pape offre une diversité de sols et un climat méditerranéen marqué par le Mistral. Le Domaine la Consonnière, situé sur des parcelles de Grenache centenaires, incarne cette richesse. Le domaine privilégie un travail manuel pour produire des vins de qualité, alliant finesse et élégance. Les pratiques culturales strictes de l'AOC garantissent l'excellence et le respect du terroir dans chaque bouteille produite",
    },
    {
      icon: iconWine,
      text_icon:
        "Au Domaine la Consonnière, on a revigoré les méthodes de vinification suite à sa reprise en 2009. Grâce à des installations modernes, le domaine bénéficie de techniques de vignification avancées. L'élevage se distingue par un usage partiel de demi-muids, enrichissant les vins en arômes et préservant leur intensité. Conseillé par Philippe Cambie, et après le décès de celui-ci, par Baptiste Olivier, le domaine continue de perfectionner ses vins avec des conseils œnologiques de pointe, assurant une expression fidèle et de qualité du terroir.",
    },
    {
      icon: iconBottle,
      text_icon:
        "Les vins rouges du Domaine la Consonnière, se caractérisent par leur profondeur et leur complexité, offrant une large palette aromatique, des fruits mûrs aux épices. Dotés d'un potentiel de vieillissement sur plusieurs décennies, mais près à boire dès 3-4 ans, ces vins révèlent une structure remarquable. Les châteauneuf du Pape Blanc de la Consonnière, délicieux dès leur jeunesse, évoluent vers des arômes de miel et de pain grillé au fil du temps, les rendant parfaits pour accompagner poissons et fromages.",
    },
  ];

  const chiffres = [
    {
      chiffre: "1880",
      text_chiffre: "Date de l'acquisition des premières parcelles du domaine",
    },
    { chiffre: "14,5", text_chiffre: "Superficie actuelle du domaine " },
    {
      chiffre: "5",
      text_chiffre:
        "Nombre de vins produits : Chateauneuf du Pape Blanc, Châteauneuf du Pape Rouge, Lirac, Vin de pays 100% Viognier, Vin de Pays la Pitchotte",
    },
    {
      chiffre: "18",
      text_chiffre:
        "Nombre de salons où nous venons vous rencontrer pour vous faire découvrir nos vins.",
    },
  ];

  return (
    <>
      <div className="whoweare">
        <h2 className="whoweare__maintitle"> QUI SOMMES NOUS ? </h2>
        <div className="whoweare__icons">
          {icons.map((item, index) => (
            <Icon
              key={index}
              icon={item.icon}
              text_icon={item.text_icon}
              id={`icon__${index}`}
            />
          ))}{" "}
        </div>
        <h3 className="whoweare__title"> Quelques chiffres</h3>
        <div className="whoweare__chiffres">
          {chiffres.map((item, index) => (
            <Chiffre
              key={index}
              chiffre={item.chiffre}
              text_chiffre={item.text_chiffre}
              id={`chiffre__front__${index}`}
            />
          ))}{" "}
        </div>
        <div className="whoweare__map">
          <img src={carte} className="whoweare__map__img"></img>
          <LoadingButton onClick={downloadMap} />
        </div>
      </div>
    </>
  );
}

export default WhoWeAre;
