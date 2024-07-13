import React, { useState } from "react";
import "../../style/css/gfv.css";
import "../../style/css/testP.css";

function TestP() {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });
  const [result, setResult] = useState("");

  const questions = [
    {
      q: "Préférez-vous les saveurs minérales aux saveurs fruitées?",
      a: ["Oui", "Non"],
    },

    { q: "Aimez-vous les vins puissants?", a: ["Oui", "Non"] },

    {
      q: "Préférez vous les vins aux arômes complexes aux vins légers et faciles à boire?",
      a: ["Oui", "Non"],
    },

    {
      q: "Préférez-vous les vins rouges aux vins blancs?",
      a: ["Oui", "Non"],
    },
    {
      q: "Aimez-vous les vins avec un grand potentiel de garde?",
      a: ["Oui", "Non"],
    },
  ];

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let score = 0;

    Object.values(answers).forEach((answer) => {
      if (answer === "Oui") score++;
    });

    if (score === 5) {
      setResult(
        "Amateur de vin, vous êtes fait pour un rouge fort et complexe : notre Châteauneuf-Rouge est fait pour vous !"
      );
    } else if (score === 4) {
      setResult(
        "Toujours à l'affût de découvertes et avec un palais déjà aguerri, vous aimerez notre Lirac !"
      );
    } else if (score === 3) {
      setResult(
        "Élégance et complexité sont vos maîtres mots ? Vous allez adorer notre Châteauneuf-du-Pape blanc !"
      );
    } else if (score === 2) {
      setResult(
        "Vous aimez les vins gourmands et les pépites à découvrir ? Notre Pitchotte vous fera fondre de plaisir."
      );
    } else {
      setResult(
        "Notre 100% Viognier va devenir un incontournable pour vous : frais, léger et gourmand, il est fait pour vous !"
      );
    }
  };

  return (
    <div className="testP">
      <form className="testP__form" onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <div key={index} className="testP__form__box">
            <p className="testP__form__box__p">{q.q}</p>
            <div className="testP__form__box__container">
              {q.a.map((option, i) => (
                <label key={i} className="testP__form__box__container__label">
                  <input
                    type="radio"
                    name={`q${index + 1}`}
                    value={option}
                    onChange={handleChange}
                    required
                    className="testP__form__box__container__label__input"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button className="testP__form__btn" type="submit">
          Soumettre
        </button>
      </form>
      {result && <p className="testP__result">{result}</p>}
    </div>
  );
}

export default TestP;
