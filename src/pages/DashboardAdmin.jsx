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
        <TabTools sectionsPage={[""]} />
        <div className="dashboard">
          <div className="dashboard__box1">
            <DashboardMenuAdmin />
          </div>
          <div className="dashboard__box">
            <DashboardBanner name={"Domaine la Consonnière"} photoURL={dom} />
            <DashboardBoardAdmin />
          </div>
        </div>
      </main>
    </>
  );
}
export default DashboardAdmin;
