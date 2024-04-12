import React from "react";

import "../../style/css/dashboardbanner.css";

function DashboardBanner({ nom_utilisateur, img_utilisateur }) {
  return (
    <section className="bannerd">
      <p className="bannerd__title"> Bienvenue {nom_utilisateur}</p>
      <img
        src={img_utilisateur}
        className="bannerd__img"
        alt="img utilisateur"
      ></img>
    </section>
  );
}
export default DashboardBanner;
