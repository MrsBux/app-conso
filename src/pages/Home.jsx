import "../style/css/main.css";
import TabTools from "../components/TabTools/index";
import Banner from "../components/Banner/index";
import WhoWeAre from "../components/Whoweare";
import NosVins from "../components/NosVins";

function Home() {
  const sectionsPage = ["a", "b", "c", "d", "e"];

  return (
    <>
      <div className="main">
        <TabTools sectionsPage={sectionsPage} />
        <Banner />
        <WhoWeAre />
        <NosVins />

        <div className="card"></div>
      </div>
    </>
  );
}

export default Home;
