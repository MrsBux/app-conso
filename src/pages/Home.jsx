import React from "react";
import { useAuth } from "../store/AuthContext";
import TabTools from "../components/TabTools/index";
import Banner from "../components/Banner/index";
import WhoWeAre from "../components/Whoweare";
import NosVins from "../components/NosVins";
import NosPrestations from "../components/NosPrestations";
import Contact from "../components/Contact";
import NosActus from "../components/NosActualites";

function Home() {
  const { isLoggedIn } = useAuth();

  const sectionsPage = [
    { page: "who-we-are", item: "Qui sommes-nous" },
    { page: "our-wines", item: "Nos vins" },
    { page: "our-services", item: "Nos prestations" },
    { page: "contact-us", item: "Contactez-nous" },
    { page: "latest-news", item: "Dernières actualités" },
  ];

  return (
    <>
      <div className="main">
        <TabTools sectionsPage={sectionsPage} />
        <Banner />
        <div id="who-we-are">
          <WhoWeAre />
        </div>
        <div id="our-wines">
          <NosVins />
        </div>
        <div id="our-services">
          <NosPrestations />
        </div>
        <div id="contact-us">
          <Contact />
        </div>
        <div id="latest-news">
          <NosActus isAuthenticated={isLoggedIn} />
        </div>
      </div>
    </>
  );
}

export default Home;
