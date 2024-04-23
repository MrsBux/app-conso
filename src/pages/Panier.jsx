import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemPanier from "../components/Panier/item";
import Form from "react-bootstrap/Form";
import ModalT from "../components/ModalT";
import RetraitSalon from "../components/RetraitSalon";
import "../style/css/panier.css";
import ch9B from "../assets/ch9B.webp";
import logofidelite from "../assets/logofidelite.webp";
import logoexp from "../assets/logoexpedition.webp";
import logopaypal from "../assets/logopaypal.webp";

function Panier() {
  const handleMailTo = () => {
    window.location.href = `mailto:contact@domainelaconsonniere.fr?subject=Retrait de commande`;
  };

  const handlePayPalClick = () => {
    // Mettre ici le code pour rediriger vers la page de paiement PayPal
    // Par exemple : window.location.href = "lien_vers_page_paypal";
    alert("Vous allez être redirigé vers la page de paiement PayPal.");
  };

  const [items, setItems] = useState([
    {
      img_btlle: ch9B,
      name: "Châteauneuf du Pape",
      couleur: "Blanc",
      millesime: 2020,
      prix: 25,
      quantite: 1, // Ajoutez la propriété quantite à chaque élément
    },
    {
      img_btlle: ch9B,
      name: "Châteauneuf du Pape",
      couleur: "Blanc",
      millesime: 2022,
      prix: 28,
      quantite: 1, // Ajoutez la propriété quantite à chaque élément
    },
  ]);

  const [selectedOption, setSelectedOption] = useState(null);

  const [selectedOption2, setSelectedOption2] = useState(null);

  const [selectedOption3, setSelectedOption3] = useState(null);

  const [selectedSalon, setSelectedSalon] = useState(null);

  // Fonction pour mettre à jour la quantité d'un article
  const handleQuantiteChange = (index, newQuantite) => {
    const updatedItems = [...items];
    updatedItems[index].quantite = newQuantite;
    setItems(updatedItems);
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

  // Calcul du total
  const total = items.reduce((acc, item) => {
    return acc + item.prix * item.quantite;
  }, 0);

  const livraison = 30;

  const totalAll = total + livraison;

  return (
    <>
      <main>
        <div className="panier">
          <h2 className="panier__title">VOTRE PANIER</h2>

          <div className="panier__box1">
            <div className="panier__box1__items">
              {items.map((item, index) => (
                <ItemPanier
                  key={index}
                  img_btlle={item.img_btlle}
                  name={item.name}
                  couleur={item.couleur}
                  millesime={item.millesime}
                  prix={item.prix}
                  quantite={item.quantite}
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
                        <button className="panier__box1__container__total__livraison__box__q">
                          {" "}
                          ?{" "}
                        </button>
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
                            Tarifs :<li>
                              {" "}
                              1 bouteille : à partir de 7 euros.
                            </li>{" "}
                            <li>6 bouteilles : à partir de 20 euros.</li>{" "}
                            <li>12 bouteilles : à partir de 30 euros.</li>{" "}
                            <li> 18 bouteilles : à partir de 50 euros.</li>
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
                    {livraison} euros
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
                        id="option1"
                        label="Retrait au domaine sous 31 jours (gratuit)"
                        checked={selectedOption === "option1"}
                        onChange={() => handleRadioChange("option1")}
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
                        id="option2"
                        label="Retrait lors du salon le plus proche de chez moi (gratuit) "
                        checked={selectedOption === "option2"}
                        onChange={() => handleRadioChange("option2")}
                      />
                    }
                    title={"Retrait en salon"}
                    modalContent={
                      <RetraitSalon
                        salons={salons}
                        onSalonSelect={handleSalonSelection}
                      />
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
                        id="option3"
                        label="Livraison à domicile (voir la grille explicative des tarifs)"
                        checked={selectedOption === "option3"}
                        onChange={() => handleRadioChange("option3")}
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
                          Tarifs :<li>
                            {" "}
                            1 bouteille : à partir de 7 euros.
                          </li>{" "}
                          <li>6 bouteilles : à partir de 20 euros.</li>{" "}
                          <li>12 bouteilles : à partir de 30 euros.</li>{" "}
                          <li> 18 bouteilles : à partir de 50 euros.</li>
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
                  <Link to="/login">
                    <Form.Check
                      type="radio"
                      id="option4"
                      label="Je me connecte à mon espace client (ou je le créé)"
                      checked={selectedOption2 === "option4"}
                      onChange={() => handleRadioChange2("option4")}
                    />
                  </Link>
                  <Form.Check
                    type="radio"
                    id="option5"
                    label="Je rentre directement mes coordonnées "
                    checked={selectedOption2 === "option5"}
                    onChange={() => handleRadioChange2("option5")}
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
                        id="option6"
                        label="Paiement par carte"
                        checked={selectedOption3 === "option6"}
                        onChange={() => handleRadioChange3("option6")}
                      />
                    }
                    modalContent={
                      <div className="paiement-paypal">
                        <p>
                          Vous pouvez régler votre commande en toute sécurité
                          via PayPal, un moyen de paiement rapide et sécurisé
                          sur internet.
                        </p>

                        <h4>Comment Payer :</h4>
                        <p>
                          Après avoir cliqué sur "Valider la commande et payer",
                          vous serez redirigé vers la page de paiement PayPal.
                        </p>

                        <h4>Avantages :</h4>
                        <ul>
                          <li>
                            PayPal vous offre une protection des achats,
                            garantissant la sécurité de vos transactions.
                          </li>
                          <li>
                            Pas besoin de saisir vos informations bancaires à
                            chaque fois, votre compte PayPal les conserve en
                            toute sécurité si vous le souhaitez.
                          </li>
                        </ul>

                        <h4>Contact :</h4>
                        <p>
                          Pour toute question concernant le paiement par PayPal,
                          n'hésitez pas à nous contacter par e-mail à{" "}
                          <a href="mailto:contact@domainelaconsonniere.fr">
                            contact@domainelaconsonniere.fr
                          </a>
                          .
                        </p>
                      </div>
                    }
                    title={"Détails du paiement par Paypal"}
                    btnname={"Retour"}
                  />

                  <ModalT
                    btnShow={
                      <Form.Check
                        type="radio"
                        id="option7"
                        label=" Paiement par virement "
                        checked={selectedOption3 === "option7"}
                        onChange={() => handleRadioChange3("option7")}
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
                        id="option9"
                        label="Paiement par chèque"
                        checked={selectedOption3 === "option9"}
                        onChange={() => handleRadioChange3("option9")}
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
                        id="option8"
                        label="Paiement au retrait (si option retrait au domaine ou en salon choisie)"
                        checked={selectedOption3 === "option8"}
                        onChange={() => handleRadioChange3("option8")}
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

          <button className="panier__submitbtn">
            Valider la commande et passer au paiement
          </button>
        </div>
      </main>
    </>
  );
}
export default Panier;
