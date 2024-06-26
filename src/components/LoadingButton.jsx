import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "../style/css/loadingbutton.css";

function LoadingButton({ onClick }) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);
    onClick;
  };

  return (
    <button
      id="btnload"
      className={isLoading ? "loading" : ""}
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading ? "Téléchargement…" : "Télécharger la carte"}
    </button>
  );
}

export default LoadingButton;
