import "../style/css/main.css";
import TabTools from "../components/TabTools/index";
import Banner from "../components/Banner/index";
import WhoWeAre from "../components/Whoweare";
import NosVins from "../components/NosVins";
import NosPrestations from "../components/NosPrestations";
import Contact from "../components/Contact";
import NosActus from "../components/NosActualites";

function Home() {
  const sectionsPage = ["a", "b", "c", "d", "e"];

  return (
    <>
      <div className="main">
        <TabTools sectionsPage={sectionsPage} />
        <Banner />
        <WhoWeAre />
        <NosVins />
        <NosPrestations />
        <Contact />
        <NosActus />
      </div>
    </>
  );
}

export default Home;
