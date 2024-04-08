import React from "react";
import Presse from "./Presse";
import VosMots from "./VosMots";

import "../../style/css/reviews.css";

function Reviews() {
  return (
    <section className="reviews">
      <h2 className="reviews__title">Nos vins en quelques mots</h2>
      <Presse />
      <VosMots />
    </section>
  );
}

export default Reviews;
