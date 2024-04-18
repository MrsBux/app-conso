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
        "L'arrière arrière grand-père Ferulla fait l'acquisition des premières parcelles de Châteauneuf-du-Pape, prémices d'une lignée de vignerons… Son fils puis son petit-fils reprendront successivement les rênes de l'exploitation. La production d'un vin de caractère, puissant et doté de la force et de toute la richesse du terroir ne sera jamais commercialisée, destinée à alimenter les cuvées du négoce qualitatif de la Vallée du Rhône, une partie seulement de la récolte sera mise en bouteilles et réservée aux amis sous le nom Domaine de la Cabane. En 2009, Sébastien Cuscusa, petit-fils d'Armand Ferulla, prend la tête de l'exploitation familiale après avoir fait ses classes dans les travaux viticoles au sein de nombreuses propriétés prestigieuses de l'appellation.",
    },
    {
      icon: iconGrapes,
      text_icon:
        "Le territoire de l'AOC Châteauneuf-du-Pape, niché au cœur de la plaine du Comtat Venaissin entre Avignon et Orange, offre une diversité de sols et un climat méditerranéen marqué par le Mistral. Le Domaine la Consonnière, situé sur des parcelles de Grenache centenaires dans les quartiers des Saintes Vierges, Pignan et Fond du Loup, incarne cette richesse. Avec une surface de 7,5 hectares en Châteauneuf-du-Pape et 5 hectares en Lirac, le domaine privilégie un travail éco-responsable et manuel pour produire des vins d'une qualité incontestable, alliant finesse et élégance. Les pratiques culturales strictes de l'AOC, notamment un rendement limité et la taille spécifique des vignes, garantissent l'excellence et le respect du terroir dans chaque bouteille produite",
    },
    {
      icon: iconWine,
      text_icon:
        "Au Domaine la Consonnière à Châteauneuf-du-Pape, Sébastien Cuscusa a revigoré les méthodes de vinification suite à sa reprise en 2009. Grâce à des installations modernes fournies par le groupement Domaines et Châteaux de la maison Brotte, le domaine bénéficie de techniques avancées comme la vinification par gravité et un tri minutieux. L'élevage se distingue par un usage partiel de demi-muids, enrichissant les vins en arômes tout en préservant leur intensité. Initialement conseillé par Philippe Cambie, et après le décès de celui-ci, par Baptiste Olivier, le domaine continue de perfectionner ses vins avec des conseils œnologiques de pointe, assurant une expression fidèle et de qualité du terroir.",
    },
    {
      icon: iconBottle,
      text_icon:
        "Les vins rouges de Châteauneuf-du-Pape, notamment ceux du Domaine la Consonnière, se caractérisent par leur profondeur et leur complexité, offrant une large palette aromatique, des fruits mûrs aux épices. Dotés d'un potentiel de vieillissement sur plusieurs décennies, ces vins révèlent une structure remarquable, parfaite pour accompagner une variété de plats épicés. Délicieux dès leur jeunesse, à partir de 3 à 4 ans, ils sont le fruit d'une collaboration entre Sébastien Cuscusa et Philippe Cambie, puis Baptiste Olivier. Les blancs, également d'une grande finesse, évoluent vers des arômes de miel et de pain grillé au fil du temps, les rendant parfaits pour accompagner poissons et fromages. Sous la direction de Philippe Cambie, le Domaine la Consonnière propose des vins rouges élégants aux notes de réglisse et de fruits rouges, ainsi que des blancs floraux avec des nuances de pêche blanche, offrant une expérience gustative exceptionnelle dès leur jeunesse et pouvant vieillir jusqu'à 5 à 10 ans.",
    },
  ];

  const chiffres = [
    {
      chiffre: "1880",
      text_chiffre: "Date de l'acquisition des premières parcelles du domaine",
    },
    { chiffre: "8,2", text_chiffre: "Superficie actuelle du domaine " },
    {
      chiffre: "5",
      text_chiffre:
        "Nombre de vins produits : Chateauneuf du Pape Blanc, Châteauneuf du Pape Rouge, Lirac, Vin de pays 100% Viognier, Vin de Pays la Pitchotte",
    },
    {
      chiffre: "25",
      text_chiffre:
        "Nombre de salons où nous venons vous rencontrer ppour vous faire découvrir nos vins.",
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
