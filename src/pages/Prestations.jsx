import AllPrestations from "../components/AllPrestations";
import GFV from "../components/GFV";
import Faq from "../components/Faq";
import TabTools from "../components/TabTools/index";

import "../style/css/prestations.css";

function Prestations() {
  return (
    <>
      <main>
        <div className="prestations">
          <TabTools
            sectionsPage={[
              { page: "prestations", item: "Toutes les prestations" },
              { page: "faq", item: "FAQ" },
              { page: "gfv", item: "GFV" },
            ]}
          />
          <div id="prestations">
            <AllPrestations />
          </div>

          <div id="faq">
            <Faq />
          </div>

          <div id="gfv">
            <GFV />
          </div>
        </div>
      </main>
    </>
  );
}
export default Prestations;
