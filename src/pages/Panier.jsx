import React, { useState, useContext, useEffect } from "react";
import { PanierContext } from "../store/panierContext";
import { Link } from "react-router-dom";
import ItemPanier from "../components/Panier/item";
import Form from "react-bootstrap/Form";
import ModalT from "../components/ModalT";
import RetraitSalon from "../components/RetraitSalon";
import "../style/css/panier.css";
import ch9R from "../assets/ch9R.webp";
import ch9B from "../assets/ch9B.webp";
import lirac from "../assets/lirac.webp";
import viognier from "../assets/viognier.webp";
import pitchotte from "../assets/pitchotte.webp";
import logofidelite from "../assets/logofidelite.webp";
import logoexp from "../assets/logoexpedition.webp";
import logopaypal from "../assets/logopaypal.webp";

function Panier() {
  useEffect(() => {
    getUserId();
  }, []);

  const { panier } = useContext(PanierContext);

  const handleMailTo = () => {
    window.location.href = `mailto:contact@domainelaconsonniere.fr?subject=Retrait de commande`;
  };

  const handlePayPalClick = () => {
    // Mettre ici le code pour rediriger vers la page de paiement PayPal
    // Par exemple : window.location.href = "lien_vers_page_paypal";
    alert("Vous allez être redirigé vers la page de paiement PayPal.");
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const [selectedOption2, setSelectedOption2] = useState(null);

  const [selectedOption3, setSelectedOption3] = useState(null);

  const [selectedSalon, setSelectedSalon] = useState(null);

  const [statusMessage, setStatusMessage] = useState("");

  const [userId, setUserId] = useState(0);

  // Fonction pour mettre à jour la quantité d'un article
  const handleQuantiteChange = (index, newQuantite) => {
    const updatedPanier = [...panier];
    updatedPanier[index].quantite = newQuantite;
    setPanier(updatedPanier);
  };
  const handleRadioChange = (value) => {
    if (selectedOption === value) {
      // Si l'option sélectionnée est déjà celle cliquée, désélectionnez-la et réinitialisez les salons
      setSelectedOption(null);
      setSelectedSalon(null);
    } else {
      setSelectedOption(value);
      // Réinitialise selectedSalon si la nouvelle option n'est pas 'option2' (retrait en salon)
      if (value !== "option2") {
        setSelectedSalon(null);
      }
    }
  };

  const handleRadioChange2 = (value) => {
    if (selectedOption2 === value) {
      // Si l'option sélectionnée est déjà celle cliquée, désélectionnez-la
      setSelectedOption2(null);
    } else {
      setSelectedOption2(value);
    }
  };

  const handleRadioChange3 = (value) => {
    if (selectedOption3 === value) {
      // Si l'option sélectionnée est déjà celle cliquée, désélectionnez-la
      setSelectedOption3(null);
    } else {
      setSelectedOption3(value);
    }
  };

  const handleSalonSelection = (salon) => {
    setSelectedSalon(salon);
  };

  const vins = panier.map((article) => ({
    AOC: article.AOC,
    couleur: article.couleur,
    id: article.id,
    img_btlle: article.img_btlle,
    millesime: article.millesime,
    name: article.name,
    prix: article.prix,
    quantite: article.quantite,
  }));

  const salons = [
    {
      name: "Les Printemps des vins",

      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",

      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",

      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",

      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
    {
      name: "Les Printemps des vins",

      date: "8-10 avril 2024",
      localisation: "Châteaneuf du Pape (84)",
    },
  ];

  const totalQuantite = panier.reduce(
    (acc, article) => acc + article.quantite,
    0
  );

  // Calcul du total
  const total = panier.reduce((acc, article) => {
    return acc + article.prix * article.quantite;
  }, 0);

  const nombreTotalArticles = panier.reduce(
    (total, article) => total + article.quantite,
    0
  );

  const calculerFraisLivraison = (nombreTotalArticles) => {
    let fraisLivraison = 0;

    if (nombreTotalArticles === 1) {
      fraisLivraison = 12.5; // 1 bouteille
    } else if (nombreTotalArticles === 2) {
      fraisLivraison = 14; // 2 bouteilles
    } else if (nombreTotalArticles === 3) {
      fraisLivraison = 16; // 3 bouteilles
    } else if (nombreTotalArticles >= 4 && nombreTotalArticles <= 6) {
      fraisLivraison = 21; // 4, 5, 6 bouteilles
    } else if (nombreTotalArticles === 7) {
      fraisLivraison = 33.5; // 7 bouteilles
    } else if (nombreTotalArticles === 8) {
      fraisLivraison = 35; // 8 bouteilles
    } else if (nombreTotalArticles === 9) {
      fraisLivraison = 25; // 9 bouteilles
    } else if (nombreTotalArticles >= 10 && nombreTotalArticles <= 12) {
      fraisLivraison = 31; // 10, 11, 12 bouteilles
    } else if (nombreTotalArticles >= 13 && nombreTotalArticles <= 15) {
      fraisLivraison = 47; // 13, 14, 15 bouteilles
    } else if (nombreTotalArticles >= 16 && nombreTotalArticles <= 1) {
      fraisLivraison = 52; // 16, 17, 18 bouteilles
    } else if (nombreTotalArticles > 18) {
      fraisLivraison = "      Contactez nous ! ";
    }

    return fraisLivraison;
  };

  const fraisLivraison = calculerFraisLivraison(nombreTotalArticles);

  const totalAll = total + fraisLivraison;

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("cins", vins);

    // Créer un objet Date pour la date du jour
    const today = new Date();

    // Formater la date en string (format: "YYYY-MM-DD")
    const dateString = today.toISOString().split("T")[0];

    // Créer l'objet de commande
    const orderData = {
      email: document.getElementById("email_panier").value,
      nom: document.getElementById("nom_panier").value,
      prenom: document.getElementById("prenom_panier").value,
      adresse: document.getElementById("adresse_panier").value,
      ville: document.getElementById("ville_panier").value,
      codePostal: document.getElementById("codepostal_panier").value, // Correction ici
      wine: vins.map((vin) => ({
        wineName: vin.name,
        quantite: vin.quantite,
        wineMillesime: vin.millesime,
      })),
      winePrice: total,
      expeditionPrice: fraisLivraison,
      totalPrice: totalAll,
      paiementType: selectedOption3,
      deliveryType: selectedOption,
      userId: userId,
    };

    console.log(orderData, "orderData");

    try {
      console.log(orderData, "orderData");

      const response = await fetch(
        `https://domconso-d13067f1e717.herokuapp.com/api/order/New`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la soumission de la commande");
      }

      const data = await response.json();
      setStatusMessage(
        `Commande enregistrée avec succès ! Numéro de commande : ${data.orderId}, vérifiez votre boite mail pour la confirmation !`
      );
      alert(
        `Commande enregistrée avec succès ! Numéro de commande : ${data.orderId}, vérifiez votre boite mail pour la confirmation !`
      );
      window.location.href = "/";
      // Ici, vous pouvez ajouter la logique pour vider le panier ou rediriger l'utilisateur
    } catch (error) {
      console.error("Erreur lors de la soumission de la commande :", error);
      setStatusMessage("Erreur lors de la soumission de la commande.");
    }
  };

  const getUserId = () => {
    const id = localStorage.getItem("userId");
    setUserId(id);
  };

  return (
    <>
      <main>
        <div className="panier">
          <h2 className="panier__title">VOTRE PANIER</h2>

          <div className="panier__box1">
            <div className="panier__box1__items">
              {panier.map((article, index) => (
                <ItemPanier
                  key={index}
                  img_btlle={article.img_btlle}
                  id={article.id}
                  name={article.name}
                  AOC={article.AOC}
                  couleur={article.couleur}
                  millesime={article.millesime}
                  prix={article.prix}
                  quantiteArticle={article.quantite}
                  onQuantiteChange={(newQuantite) =>
                    handleQuantiteChange(index, newQuantite)
                  }
                />
              ))}
            </div>

            <div className="panier__box1__container">
              <div className="panier__box1__container__total">
                <div className="panier__box1__container__total__produits">
                  <p className="panier__box1__container__total__produits__p">
                    {" "}
                    Produits
                  </p>
                  <p className="panier__box1__container__total__produits__p">
                    {total} euros
                  </p>
                </div>
                <div className="panier__box1__container__total__livraison">
                  <div className="panier__box1__container__total__livraison__box">
                    <p className="panier__box1__container__total__livraison__box__p">
                      {" "}
                      Livraison
                    </p>
                    <ModalT
                      btnShow={
                        <div className="panier__box1__container__total__livraison__box__q">
                          {" "}
                          ?{" "}
                        </div>
                      }
                      title={"Explications de nos frais d'expédition"}
                      btnname={"Fermer"}
                      modalContent={
                        <div className="modalt__txt">
                          {" "}
                          <p>
                            Service d'expédition pratique et sécurisé pour
                            recevoir nos vins directement chez vous.
                          </p>
                          <ul>
                            {" "}
                            Tarifs :<li> 1 bouteille : 12.50euros</li>{" "}
                            <li>2 bouteilles : 14 euros</li>{" "}
                            <li>3 bouteilles : 16 euros</li>{" "}
                            <li>4, 5, 6 bouteilles : 21 euros</li>{" "}
                            <li>
                              {" "}
                              Les tarifs par 7 ou 8 bouteilles sont plus élévés
                              du fait des modalités d'envoi proposées par la
                              poste.
                            </li>
                            <li> 7 bouteilles : 33.50 euros (6 + 1)</li>
                            <li> 8 bouteilles : 35 euros (6+2)</li>
                            <li>9 bouteilles : 25 euros</li>{" "}
                            <li>10, 11, 12 bouteilles : 31 euros</li>{" "}
                            <li> 13, 14, 15 bouteilles 47 euros</li>
                            <li> 16, 17, 18 bouteilles : 52 euros</li>
                            <li>
                              {" "}
                              Pour plus de 18 bouteilles, contactez nous !
                            </li>
                          </ul>
                          <p className="modalt__txt__p">
                            {" "}
                            Service Personnalisé : Nous préparons et expédions
                            vos commandes avec soin depuis notre domaine.
                            Contactez-nous pour des commandes en grande quantité
                            ou des demandes spécifiques. Faites-vous plaisir
                            avec nos vins d'exception, livrés directement depuis
                            notre domaine viticole jusqu'à chez vous."
                          </p>
                        </div>
                      }
                    />
                  </div>
                  <p className="panier__box1__container__total__livraison__p">
                    {fraisLivraison} euros
                  </p>
                </div>

                <div className="panier__box1__container__total__total">
                  <p className="panier__box1__container__total__total__p">
                    Total
                  </p>
                  <p className="panier__box1__container__total__total__p">
                    {totalAll} euros
                  </p>
                </div>
              </div>
              <div className="panier__box1__container__help">
                <p className="panier__box1__container__help">
                  Un problème ? Une question ? Vous pouvez nous joindre 06 03 49
                  13 48{" "}
                </p>
              </div>
              <div className="panier__box1__container__infos">
                <div className="panier__box1__container__infos__box">
                  <img
                    src={logopaypal}
                    className="panier__box1__container__infos__box__img"
                  ></img>
                  <p className="panier__box1__container__infos__box__p">
                    Paiement sécurisé par carte bancaire via Paypal, par chèque
                    ou par virement
                  </p>
                </div>
                <div className="panier__box1__container__infos__box">
                  {" "}
                  <img
                    src={logoexp}
                    className="panier__box1__container__infos__box__img"
                  ></img>
                  <p className="panier__box1__container__infos__box__p">
                    {" "}
                    Expédition / Retrait au domaine ou en salon
                  </p>
                </div>
                <div className="panier__box1__container__infos__box">
                  <img
                    src={logofidelite}
                    className="panier__box1__container__infos__box__img"
                  ></img>
                  <p className="panier__box1__container__infos__box__p">
                    {" "}
                    Système de fidélité Client
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="panier__box2">
            <h3 className="panier__box2__title"> Livraison & Coordonnées</h3>
            <div className="panier__box2__livraison">
              <Form className="panier__box2__livraison__form">
                <div className="panier__box2__livraison__form__box">
                  <ModalT
                    btnShow={
                      <Form.Check
                        type="radio"
                        id="retrait-domaine"
                        label="Retrait au domaine sous 31 jours (gratuit)"
                        checked={selectedOption === "retrait-domaine"}
                        onChange={() => handleRadioChange("retrait-domaine")}
                      />
                    }
                    modalContent={
                      <div className="retrait">
                        <p>
                          Vous avez également la possibilité de venir récupérer
                          vos bouteilles directement sur place, pour une
                          expérience encore plus personnalisée.
                        </p>

                        <h4>Modalités de Retrait (sous 31 jours) :</h4>
                        <ul>
                          <li>
                            Pour récupérer vos bouteilles au domaine, il vous
                            suffit de nous contacter par e-mail ou par téléphone
                            au moins 48 heures à l'avance.
                          </li>
                          <li>
                            Lors de votre appel ou de votre e-mail, nous
                            fixerons ensemble le jour et l'heure qui vous
                            conviennent le mieux pour venir retirer votre
                            commande.
                          </li>
                        </ul>

                        <h4>Avantages :</h4>
                        <ul>
                          <li>
                            En choisissant le retrait au domaine, vous avez
                            l'occasion de découvrir notre domaine viticole et de
                            profiter d'un accueil chaleureux de notre équipe.
                          </li>
                          <li>
                            C'est également l'opportunité de poser toutes vos
                            questions sur nos vins et de bénéficier de conseils
                            personnalisés.
                          </li>
                        </ul>

                        <h4>Contact :</h4>
                        <p>
                          Pour organiser le retrait de votre commande ou pour
                          toute autre demande, n'hésitez pas à nous contacter
                          par e-mail à contact@domainelaconsonniere (en bas du
                          texte lien direct) ou par téléphone au 06 03 49 48 81.
                          Nous serons ravis de vous accueillir au Domaine.
                        </p>

                        <p>
                          Profitez de l'occasion pour vivre une expérience
                          authentique et rencontrer ceux qui donnent vie à nos
                          vins, en venant récupérer votre commande directement
                          au Domaine.
                        </p>

                        <button
                          className="modalt__txt__btn"
                          onClick={handleMailTo}
                        >
                          Contactez-nous par e-mail
                        </button>
                      </div>
                    }
                    title={"Détails retrait au domaine"}
                    btnname={"Retour"}
                  />

                  <ModalT
                    btnShow={
                      <Form.Check
                        type="radio"
                        id="retrait-salon"
                        label="Retrait lors du salon le plus proche de chez moi (gratuit) "
                        checked={selectedOption === "retrait-salon"}
                        onChange={() => handleRadioChange("retrait-salon")}
                        disabled={true} // Désactive cette option
                      />
                    }
                    title={"Retrait en salon"}
                    modalContent={
                      // <RetraitSalon
                      //   salons={salons}
                      //   onSalonSelect={handleSalonSelection}
                      // />
                      " Bientôt disponible !!"
                    }
                    btnname={"Retour"}
                  />
                  {selectedSalon && (
                    <p>
                      Salon sélectionné : {selectedSalon.name} le{" "}
                      {selectedSalon.date} à {selectedSalon.localisation}
                    </p>
                  )}

                  <ModalT
                    btnShow={
                      <Form.Check
                        type="radio"
                        id="livraison"
                        label="Livraison à domicile (voir la grille explicative des tarifs)"
                        checked={selectedOption === "livraison"}
                        onChange={() => handleRadioChange("livraison")}
                      />
                    }
                    title={"Explications de nos frais d'expédition"}
                    btnname={"Fermer"}
                    modalContent={
                      <div className="modalt__txt">
                        {" "}
                        <p>
                          Service d'expédition pratique et sécurisé pour
                          recevoir nos vins directement chez vous.
                        </p>
                        <ul>
                          {" "}
                          Tarifs :<li> 1 bouteille : 12.50euros</li>{" "}
                          <li>2 bouteilles : 14 euros</li>{" "}
                          <li>3 bouteilles : 16 euros</li>{" "}
                          <li>4, 5, 6 bouteilles : 21 euros</li>{" "}
                          <li>
                            {" "}
                            Les tarifs par 7 ou 8 bouteilles sont plus élévés du
                            fait des modalités d'envoi proposées par la poste.
                          </li>
                          <li> 7 bouteilles : 33.50 euros (6 + 1)</li>
                          <li> 8 bouteilles : 35 euros (6+2)</li>
                          <li>9 bouteilles : 25 euros</li>{" "}
                          <li>10, 11, 12 bouteilles : 31 euros</li>{" "}
                          <li> 13, 14, 15 bouteilles 47 euros</li>
                          <li> 16, 17, 18 bouteilles : 52 euros</li>
                          <li>
                            {" "}
                            Pour plus de 18 bouteilles n'hésitez pas à nous
                            contacter pour discuter des possibilités d'envoi par
                            transporteur pour réduire les coûts.
                          </li>
                        </ul>
                        <p className="modalt__txt__p">
                          {" "}
                          Service Personnalisé : Nous préparons et expédions vos
                          commandes avec soin depuis notre domaine.
                          Contactez-nous pour des commandes en grande quantité
                          ou des demandes spécifiques. Faites-vous plaisir avec
                          nos vins d'exception, livrés directement depuis notre
                          domaine viticole jusqu'à chez vous."
                        </p>
                      </div>
                    }
                  />
                </div>
              </Form>
            </div>

            <div className="panier__box2__coordonnees">
              <Form className="panier__box2__coordonnees__form">
                <div className="panier__box2__coordonnees__form__box">
                  <Form.Check
                    type="radio"
                    id="coordonnées"
                    label="Je rentre directement mes coordonnées "
                    checked={selectedOption2 === "coordonnées"}
                    onChange={() => handleRadioChange2("coordonnées")}
                  />

                  <div className=" panier__box2__coordonnees__form__box__input">
                    <div className="form__identite panier__box2__coordonnees__form__box__input__identite ">
                      <Form.Group
                        className="form__identite__groupe panier__box2__coordonnees__form__box__input__groupe"
                        controlId="nom_panier"
                      >
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" placeholder="Nom" />
                      </Form.Group>

                      <Form.Group
                        className="form__identite__groupe panier__box2__coordonnees__form__box__input__groupe"
                        controlId="prenom_panier"
                      >
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control type="text" placeholder="Prénom" />
                      </Form.Group>
                    </div>
                    <Form.Group
                      className="form__groupe panier__box2__coordonnees__form__box__groupe"
                      controlId="email_panier"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </Form.Group>
                    <Form.Group
                      className="panier__box2__coordonnees__form__box__groupe"
                      controlId="adresse_panier"
                    >
                      <Form.Label>Adresse Postale</Form.Label>
                      <Form.Control type="text" placeholder="Adresse postale" />
                    </Form.Group>
                    <div className="form__identite panier__box2__coordonnees__form__box__input__localisation ">
                      <Form.Group
                        className="form__identite__groupe panier__box2__coordonnees__form__box__input__localisation__groupe"
                        controlId="codepostal_panier"
                      >
                        <Form.Label>Code postal</Form.Label>
                        <Form.Control type="number" placeholder="Code postal" />
                      </Form.Group>

                      <Form.Group
                        className="form__identite__groupe panier__box2__coordonnees__form__box__input__localisation__ville"
                        controlId="ville_panier"
                      >
                        <Form.Label>Ville</Form.Label>
                        <Form.Control type="text" placeholder="Ville" />
                      </Form.Group>
                    </div>{" "}
                  </div>
                </div>
              </Form>
            </div>

            <div className="panier__box2__paiement">
              <Form className="panier__box2__paiement__form">
                <div className="panier__box2__paiement__form__box">
                  <ModalT
                    btnShow={
                      <Form.Check
                        type="radio"
                        id="paiement-par-carte"
                        label="Paiement par carte"
                        checked={selectedOption3 === "paiement-par-carte"}
                        onChange={() =>
                          handleRadioChange3("paiement-par-carte")
                        }
                        disabled={true} // Désactive cette option
                      />
                    }
                    modalContent={
                      // <div className="paiement-paypal">
                      //   <p>
                      //     Vous pouvez régler votre commande en toute sécurité
                      //     via PayPal, un moyen de paiement rapide et sécurisé
                      //     sur internet.
                      //   </p>

                      //   <h4>Comment Payer :</h4>
                      //   <p>
                      //     Après avoir cliqué sur "Valider la commande et payer",
                      //     vous serez redirigé vers la page de paiement PayPal.
                      //   </p>

                      //   <h4>Avantages :</h4>
                      //   <ul>
                      //     <li>
                      //       PayPal vous offre une protection des achats,
                      //       garantissant la sécurité de vos transactions.
                      //     </li>
                      //     <li>
                      //       Pas besoin de saisir vos informations bancaires à
                      //       chaque fois, votre compte PayPal les conserve en
                      //       toute sécurité si vous le souhaitez.
                      //     </li>
                      //   </ul>

                      //   <h4>Contact :</h4>
                      //   <p>
                      //     Pour toute question concernant le paiement par PayPal,
                      //     n'hésitez pas à nous contacter par e-mail à{" "}
                      //     <a href="mailto:contact@domainelaconsonniere.fr">
                      //       contact@domainelaconsonniere.fr
                      //     </a>
                      //     .
                      //   </p>
                      // </div>
                      <p> Bientôt disponible !!</p>
                    }
                    title={"Détails du paiement par Paypal"}
                    btnname={"Retour"}
                  />

                  <ModalT
                    btnShow={
                      <Form.Check
                        type="radio"
                        id="paiement-virement"
                        label=" Paiement par virement "
                        checked={selectedOption3 === "paiement-virement"}
                        onChange={() => handleRadioChange3("paiement-virement")}
                      />
                    }
                    modalContent={
                      <div className="paiement-virement">
                        <p>
                          Possibilité de régler votre commande par virement
                          bancaire.
                        </p>

                        <h4>Modalités de Paiement :</h4>
                        <ul>
                          <li>
                            Une fois votre commande passée, vous recevrez un
                            e-mail de confirmation contenant toutes les
                            informations nécessaires pour effectuer votre
                            virement.
                          </li>
                          <li>
                            Il vous suffira alors d'effectuer le virement depuis
                            votre compte bancaire en utilisant les coordonnées
                            bancaires fournies dans l'e-mail de confirmation.
                          </li>
                          <li>
                            N'oubliez pas d'indiquer votre numéro de commande
                            dans la référence de votre virement pour faciliter
                            le traitement de votre paiement.
                          </li>
                        </ul>

                        <h4>Confirmation de Paiement :</h4>
                        <p>
                          Une fois votre virement reçu, nous vous enverrons une
                          confirmation par e-mail et nous procéderons à
                          l'expédition de votre commande dans les plus brefs
                          délais.
                        </p>

                        <h4>Contact :</h4>
                        <p>
                          Pour toute question concernant le paiement par
                          virement ou pour obtenir les informations nécessaires
                          pour effectuer votre virement, n'hésitez pas à nous
                          contacter par e-mail à{" "}
                          <a href="mailto:contact@domainelaconsonniere.fr">
                            contact@domainelaconsonniere.fr
                          </a>
                          .
                        </p>
                      </div>
                    }
                    title={"Détails paiement par virement"}
                    btnname={"Retour"}
                  />

                  <ModalT
                    btnShow={
                      <Form.Check
                        type="radio"
                        id="paiement-cheque"
                        label="Paiement par chèque"
                        checked={selectedOption3 === "paiement-cheque"}
                        onChange={() => handleRadioChange3("paiement-cheque")}
                      />
                    }
                    modalContent={
                      <div className="paiement-cheque">
                        <p>Possibilité de régler votre commande par chèque.</p>

                        <h4>Modalités de Paiement :</h4>
                        <ul>
                          <li>
                            Une fois votre commande passée, vous recevrez par
                            e-mail le numéro de votre commande, l'oddre auquel
                            libellé votre chèque ainsi que l'adresse à laquelle
                            envoyer votre chèque.
                          </li>
                          <li>
                            N'oubliez pas d'indiquer votre numéro de commande au
                            dos du chèque pour faciliter le traitement de votre
                            paiement.
                          </li>
                        </ul>

                        <h4>Confirmation de Paiement :</h4>
                        <p>
                          Dès réception et encaissement de votre chèque, nous
                          vous enverrons une confirmation par e-mail et nous
                          procéderons à l'expédition de votre commande dans les
                          plus brefs délais.
                        </p>

                        <h4>Contact :</h4>
                        <p>
                          Pour toute question concernant le paiement par chèque
                          ou pour obtenir les informations nécessaires pour
                          envoyer votre chèque, n'hésitez pas à nous contacter
                          par e-mail à{" "}
                          <a href="mailto:contact@domainelaconsonniere.fr">
                            contact@domainelaconsonniere.fr
                          </a>
                          .
                        </p>
                      </div>
                    }
                    title={"Détails paiement par chèque"}
                    btnname={"Retour"}
                  />

                  <ModalT
                    btnShow={
                      <Form.Check
                        type="radio"
                        id="paiement-retrait"
                        label="Paiement au retrait (si option retrait au domaine ou en salon choisie)"
                        checked={selectedOption3 === "paiment-retrait"}
                        onChange={() => handleRadioChange3("paiment-retrait")}
                      />
                    }
                    modalContent={
                      <div className="paiement-retrait">
                        <p>
                          Possibilité de régler votre commande lors du retrait.
                          Vous pouvez venir chercher vos bouteilles directement
                          au domaine et effectuer votre paiement sur place.
                        </p>

                        <h4>Modalités de Paiement :</h4>
                        <ul>
                          <li>
                            Lors du retrait de votre commande, vous avez la
                            possibilité de régler en personne.
                          </li>
                          <li>
                            Vous disposez d'un délai maximum de 31 jours à
                            partir de la date de la commande pour effectuer le
                            paiement au retrait.
                          </li>
                        </ul>

                        <h4>Contact :</h4>
                        <p>
                          Pour toute question concernant le paiement au retrait
                          ou pour planifier votre venue, n'hésitez pas à nous
                          contacter par e-mail à{" "}
                          <a href="mailto:contact@domainelaconsonniere.fr">
                            contact@domainelaconsonniere.fr
                          </a>{" "}
                          ou par téléphone au 0603494881.
                        </p>
                      </div>
                    }
                    title={"Détails paiement au retrait"}
                    btnname={"Retour"}
                  />
                </div>
              </Form>
            </div>
          </div>

          <button className="panier__submitbtn" onClick={handleSubmit}>
            Valider la commande et passer au paiement
          </button>
        </div>
      </main>
    </>
  );
}
export default Panier;
