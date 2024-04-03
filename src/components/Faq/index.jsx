import React from "react";
import "../../style/css/faq.css";
import Menu from "./Menu";

function Faq() {
  const faqArray = [
    {
      numberKey: "0",
      title: "Question 1 ?  ",
      text: "text1",
    },
    {
      numberKey: "1",
      title: "Question 2 ?  ",
      text: "Texte 2",
    },
    {
      numberKey: "2",
      title: "Question 3 ?  ",
      text: "Texte 3.",
    },
    {
      numberKey: "3",
      title: "Question 4 ?  ",
      text: "Texte 4.",
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
