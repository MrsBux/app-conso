import "../../style/css/chiffre.css";
import React, { useState } from "react";

function Chiffre({ chiffre, text_chiffre, id }) {
  const [isCFlipped, setIsCFlipped] = useState(false);

  return (
    <>
      <div
        className={`chiffre ${isCFlipped ? "flipped" : ""}`}
        onMouseEnter={() => setIsCFlipped(true)}
        onMouseLeave={() => setIsCFlipped(false)}
      >
        <div className="chiffre">
          <div className="chiffre__front">
            <h4 className="chiffre__front__title" id={id}>
              {" "}
              {chiffre}{" "}
            </h4>
          </div>

          <div className="chiffre__back">
            <p className="chiffre__back__p"> {text_chiffre}</p>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default Chiffre;
