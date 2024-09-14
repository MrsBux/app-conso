import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DashboardMenu from "../components/DashboardMenu";
import DashboardBanner from "../components/DasboardBanner";
import DashboardBoard from "../components/DasboardBoard";
import TabTools from "../components/TabTools/index";
import "../style/css/dashboard.css";

function Dashboard() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUser();
  }, [userId]);

  const getUser = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://domconso-d13067f1e717.herokuapp.com/api/user/One/${userId}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUser(data);
    } catch (err) {
      console.error(
        "Une erreur s'est produite lors de la récupération de l'utilisateur:",
        err
      );
      setError("Impossible de charger les données de l'utilisateur.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;
  if (!user) return <div>Aucun utilisateur trouvé.</div>;

  return (
    <main>
      <TabTools sectionsPage={[""]} />
      <div className="dashboard">
        <div className="dashboard__box1">
          <DashboardMenu />
        </div>
        <div className="dashboard__box">
          <DashboardBanner name={user.name} />
          <DashboardBoard
            lastc={""}
            numberofpoints={user.points}
            prenom={user.firstname}
            nom={user.name}
            email={user.email}
          />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
