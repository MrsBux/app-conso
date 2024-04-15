import React, { useEffect } from "react";
import Catalogue from "../components/Catalogue";
import Reviews from "../components/Reviews";
import TabTools from "../components/TabTools/index";

import "../style/css/gallery.css";

function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);

  const sectionsPage = [
    { page: "Catalogue", item: "Catalogue" },
    { page: "Reviews", item: "Reviews" },
  ];
  return (
    <main>
      <div className="tabtools">
        <TabTools sectionsPage={sectionsPage} />
      </div>
      <div className="gallery">
        <h2 className="gallery__title">GALERIE DES VINS</h2>
        <div id="Catalogue">
          <Catalogue />
        </div>{" "}
        <div id="Reviews">
          <Reviews />
        </div>
      </div>
    </main>
  );
}
export default Gallery;
