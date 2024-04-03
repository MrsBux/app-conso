import AllPrestations from "../components/AllPrestations";
import GFV from "../components/GFV";
import Faq from "../components/Faq";

import "../style/css/prestations.css";

function Prestations() {
  return (
    <>
      <main>
        <div className="prestations">
          <h2 className="prestations__title">NOS PRESTATIONS</h2>

          <AllPrestations />
          <Faq />
          <GFV />
        </div>
      </main>
    </>
  );
}
export default Prestations;
