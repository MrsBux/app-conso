import React from "react";
import "../../style/css/faq.css";
import Menu from "./Menu";

function Faq() {
  const faqArray = [
    {
      numberKey: "0",
      title:
        "Comment puis-je réserver une prestation auprès de votre domaine ?  ",
      text: "Notre outil de réservation est conçu pour simplifier le processus de planification de votre visite chez nous. À l'aide de notre modale de réservation, vous pouvez sélectionner la date, l'heure et le type de prestation que vous souhaitez réserver. De plus, vous pouvez spécifier le nombre de personnes pour lesquelles vous effectuez la réservation. Il est important de noter que notre système de réservation prend en compte les disponibilités en temps réel. Cependant, veuillez noter que la réservation que vous effectuez est une demande pour le jour et l'horaire sélectionnés. Après avoir soumis votre demande, notre équipe examinera la disponibilité et vous contactera pour confirmer la réservation ou proposer une alternative si l'horaire choisi n'est pas disponible. En cas d'indisponibilité ou si vous souhaitez annuler votre réservation, vous pouvez nous contacter par téléphone ou par e-mail. Notre équipe sera heureuse de vous aider et de répondre à toutes vos questions concernant votre réservation.",
    },
    {
      numberKey: "1",
      title:
        "Est-ce que les prestations peuvent être personnalisées en fonction de mes besoins ou préférences spécifiques  ?  ",
      text: "Absolument ! Nous comprenons que chaque client est unique et peut avoir des besoins ou des préférences spécifiques. C'est pourquoi nous offrons la possibilité de personnaliser nos prestations pour répondre à vos attentes de manière précise et satisfaisante. Que vous recherchiez une dégustation sur mesure, une visite exclusive du domaine ou une expérience gastronomique unique, notre équipe est là pour vous accompagner dans la création d'une prestation adaptée à vos besoins. Nous pouvons ajuster les éléments tels que le choix des vins, les activités proposées, la durée de l'événement et bien plus encore, afin de créer une expérience vraiment personnalisée qui correspond à vos préférences spécifiques.Pour commencer à personnaliser votre prestation, n'hésitez pas à nous contacter directement. Notre équipe dédiée se fera un plaisir de discuter avec vous de vos besoins et de vous proposer des options sur mesure pour créer une expérience inoubliable.",
    },
    {
      numberKey: "2",
      title: "Quels sont les tarifs des prestations proposées par le domaine?",
      text: "Nous proposons une variété de prestations pour répondre aux besoins et aux préférences de nos visiteurs. Voici nos tarifs actuels pour chaque prestation :  - Dégustation au caveau : Gratuite - Dégustation en grand groupe au caveau (+8 personnes) : 5€ par personne - Rétrospective complète et analyse des vins du domaine : À partir de 25€ par personne (à partir de 6 personnes) - Repas accord mets et vins : À partir de 35€ par personne- Visite complète du domaine, master class et dégustation : À partir de 30€ par personne- Visite et dégustation directement dans la vigne : À partir de 40€ par personne- Prestation 100% personnalisable. Veuillez noter que les tarifs mentionnés sont par personne et sont indiqués comme 'à partir de', car chaque prestation peut être personnalisée selon vos besoins spécifiques, ce qui peut entraîner des ajustements de coût.",
    },
    {
      numberKey: "3",
      title:
        "Est-il possible d'offrir un bon cadeau pour une prestation et si oui, comment procéder ?",
      text: "Oui, il est possible d'offrir un bon cadeau pour nos prestations. Pour ce faire, veuillez nous contacter directement. Nous proposons plusieurs options de paiement, y compris en ligne, par espèces, chèque ou virement bancaire. Une fois le paiement effectué, la personne recevra un bon cadeau valable pour une prestation de valeur donnée ou pour une prestation précise. Le bon cadeau peut être envoyé par e-mail ou par courrier, ou bien être retiré sur place. Contactez-nous pour plus d'informations et pour procéder à l'achat du bon cadeau.",
    },
  ];

  return (
    <section className="faq">
      <h2 className="faq__title"> FAQ </h2>

      <div className="faq__box">
        {faqArray.map((item, index) => (
          <Menu
            key={item.numberKey}
            title={item.title}
            text={item.text}
            id={index}
          />
        ))}
      </div>
    </section>
  );
}

export default Faq;
