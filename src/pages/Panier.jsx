import React, { useState } from "react";
import ItemPanier from "../components/Panier/item";
import Form from "react-bootstrap/Form";

import "../style/css/panier.css";

import ch9B from "../assets/ch9B.webp";
import logofidelite from "../assets/logofidelite.webp";
import logoexp from "../assets/logoexpedition.webp";
import logopaypal from "../assets/logopaypal.webp";

function Panier() {
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

  // Fonction pour mettre à jour la quantité d'un article
  const handleQuantiteChange = (index, newQuantite) => {
    const updatedItems = [...items];
    updatedItems[index].quantite = newQuantite;
    setItems(updatedItems);
  };

  const handleRadioChange = (value) => {
    if (selectedOption === value) {
      // Si l'option sélectionnée est déjà celle cliquée, désélectionnez-la
      setSelectedOption(null);
    } else {
      setSelectedOption(value);
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
                    <button className="panier__box1__container__total__livraison__box__q">
                      {" "}
                      ?{" "}
                    </button>
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
                    Expédition / Retrait au domaien ou en salon
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
                  <Form.Check
                    type="radio"
                    id="option1"
                    label="Retrait au domaine sous 31 jours (gratuit)"
                    checked={selectedOption === "option1"}
                    onChange={() => handleRadioChange("option1")}
                  />
                  <Form.Check
                    type="radio"
                    id="option2"
                    label="Retrait lors du salon le plus proche de chez moi (gratuit) "
                    checked={selectedOption === "option2"}
                    onChange={() => handleRadioChange("option2")}
                  />
                  <Form.Check
                    type="radio"
                    id="option3"
                    label="Livraison à domicile (voir la grille explicative des tarifs)"
                    checked={selectedOption === "option3"}
                    onChange={() => handleRadioChange("option3")}
                  />
                </div>
              </Form>
            </div>

            <div className="panier__box2__coordonnees">
              <Form className="panier__box2__coordonnees__form">
                <div className="panier__box2__coordonnees__form__box">
                  <Form.Check
                    type="radio"
                    id="option1"
                    label="Je me connecte à mon espace client (ou je le créé)"
                    checked={selectedOption2 === "option1"}
                    onChange={() => handleRadioChange2("option1")}
                  />
                  <Form.Check
                    type="radio"
                    id="option2"
                    label="Je rentre directement mes coordonnées "
                    checked={selectedOption2 === "option2"}
                    onChange={() => handleRadioChange2("option2")}
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
                  <Form.Check
                    type="radio"
                    id="option1"
                    label="Paiement par carte"
                    checked={selectedOption3 === "option1"}
                    onChange={() => handleRadioChange3("option1")}
                  />
                  <Form.Check
                    type="radio"
                    id="option2"
                    label=" Paiement par virement "
                    checked={selectedOption3 === "option2"}
                    onChange={() => handleRadioChange3("option2")}
                  />
                  <Form.Check
                    type="radio"
                    id="option3"
                    label="Paiement par chèque"
                    checked={selectedOption3 === "option3"}
                    onChange={() => handleRadioChange3("option3")}
                  />

                  <Form.Check
                    type="radio"
                    id="option4"
                    label="Paiement au retrait (si option retrait au domaine ou en salon choisie)"
                    checked={selectedOption3 === "option3"}
                    onChange={() => handleRadioChange3("option4")}
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
