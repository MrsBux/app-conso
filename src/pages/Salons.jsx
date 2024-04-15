import React, { useEffect } from "react";
import TabTools from "../components/TabTools/index";
import Carte from "../components/Carte.jsx";
import SalonGallery from "../components/SalonsGallery/index.jsx";
import SalonAgenda from "../components/SalonAgenda/index.jsx";
import "../style/css/salons.css";

function Salons() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);

  return (
    <>
      <main>
        <div className="salons">
          <TabTools
            sectionsPage={[
              { page: "carte", item: "Carte" },
              { page: "gallery", item: "Galerie" },
              { page: "agenda", item: "Agenda" },
            ]}
          />
          <div id="carte">
            <Carte />
          </div>

          <div id="gallery">
            <SalonGallery />
          </div>

          <div id="agenda">
            <SalonAgenda />
          </div>
        </div>
      </main>
    </>
  );
}
export default Salons;
