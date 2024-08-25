import React from "react";

import "../../style/css/dashboardbanner.css";

function DashboardBanner({ name, photoURL }) {
  return (
    <section className="bannerd">
      <p className="bannerd__title"> Bienvenue {name}</p>
      {/* <img src={photoURL} className="bannerd__img" alt="img utilisateur"></img> */}
    </section>
  );
}
export default DashboardBanner;
