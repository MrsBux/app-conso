import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "../style/css/loadingbutton.css";

function LoadingButton() {
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

  const handleClick = () => setLoading(true);

  return (
    <Button
      className={isLoading ? "loading" : ""}
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Téléchargement…" : "Télécharger la carte"}
    </Button>
  );
}

export default LoadingButton;
