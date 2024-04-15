import React from "react";
import DashboardMenu from "../components/DashboardMenu";
import DashboardBanner from "../components/DasboardBanner";
import DashboardBoard from "../components/DasboardBoard";
import TabTools from "../components/TabTools/index";

import selfie from "../assets/selfiee.webp";

import "../style/css/dashboard.css";

function Dashboard() {
  return (
    <>
      <main>
        <TabTools sectionsPage={[""]} />
        <div className="dashboard">
          <div className="dashboard__box1">
            <DashboardMenu />
          </div>
          <div className="dashboard__box">
            <DashboardBanner
              nom_utilisateur={"Camille"}
              img_utilisateur={selfie}
            />
            <DashboardBoard />
          </div>
        </div>
      </main>
    </>
  );
}
export default Dashboard;
