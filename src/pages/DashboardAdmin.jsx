import DashboardMenuAdmin from "../components/DashboardMenuAdmin";
import DashboardBanner from "../components/DasboardBanner";
import DashboardBoardAdmin from "../components/DasboardBoardAdmin";
import TabTools from "../components/TabTools/index";

import dom from "../assets/dom.png";

import "../style/css/dashboard.css";

function DashboardAdmin() {
  return (
    <>
      <main>
        <TabTools />
        <div className="dashboard">
          <div className="dashboard__box1">
            <DashboardMenuAdmin />
          </div>
          <div className="dashboard__box">
            <DashboardBanner
              nom_utilisateur={"Domaine la Consonnière"}
              img_utilisateur={dom}
            />
            <DashboardBoardAdmin />
          </div>
        </div>
      </main>
    </>
  );
}
export default DashboardAdmin;
