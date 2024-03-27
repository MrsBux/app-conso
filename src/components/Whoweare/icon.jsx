import React, { useState } from "react";
import "../../style/css/icon.css";

function Icon({ icon, text_icon }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <div
        className={`icon ${isFlipped ? "flipped" : ""}`}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div className="icon">
          <div className="icon__front">
            <img src={icon} className="icon__front__img"></img>
          </div>

          <div className="icon__back">
            <p className="icon__back__p">{text_icon}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Icon;
