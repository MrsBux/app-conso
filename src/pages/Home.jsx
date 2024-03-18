import { useState } from "react";
import reactLogo from "../assets/react.svg";
import "../style/css/main.css";
import TabTools from "../components/TabTools/index";
import Banner from "../components/Banner/index";

function Home() {
  const [count, setCount] = useState(0);
  const sectionsPage = ["a", "b", "c", "d", "e"];

  return (
    <>
      <div className="main">
        <TabTools sectionsPage={sectionsPage} />
        <Banner />
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default Home;
