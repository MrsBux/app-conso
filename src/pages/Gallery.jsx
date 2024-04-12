import React from "react";
import Catalogue from "../components/Catalogue";
import Reviews from "../components/Reviews";
import TabTools from "../components/TabTools/index";

import "../style/css/gallery.css";

function Gallery() {
  return (
    <main>
      {" "}
      <TabTools />
      <div className="gallery">
        <h2 className="gallery__title">GALERIE DES VINS</h2>
        <Catalogue />
        <Reviews />
      </div>
    </main>
  );
}
export default Gallery;
