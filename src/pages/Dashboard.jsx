import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DashboardMenu from "../components/DashboardMenu";
import DashboardBanner from "../components/DasboardBanner";
import DashboardBoard from "../components/DasboardBoard";
import TabTools from "../components/TabTools/index";
import selfie from "../assets/selfiee.webp";
import "../style/css/dashboard.css";

function Dashboard() {
  // Utilisation de useParams pour récupérer le userId depuis l'URL
  const { userId } = useParams();
  console.log("userId", userId);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Effectuer une requête GET pour récupérer les données de l'utilisateur
    fetch(`http://localhost:3000/api/user/One/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Erreur lors de la récupération des données de l'utilisateur"
          );
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        console.log(user, "user");
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données de l'utilisateur :",
          error
        );
      });
  }, [userId]);

  return (
    <>
      <main>
        <TabTools sectionsPage={[""]} />
        <div className="dashboard">
          <div className="dashboard__box1">
            <DashboardMenu />
          </div>
          <div className="dashboard__box">
            {user && <DashboardBanner name={user.name} photoURL={selfie} />}
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
    </>
  );
}

export default Dashboard;
