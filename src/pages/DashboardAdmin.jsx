import React, { useEffect } from "react";
import TabTools from "../components/TabTools/index";
import DashboardMenuAdmin from "../components/DashboardMenuAdmin";
import DashboardBanner from "../components/DasboardBanner";
import DashboardBoardAdmin from "../components/DasboardBoardAdmin";
import dom from "../assets/dom.png";
import "../style/css/dashboard.css";

function DashboardAdmin() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    // Vérifie si le token existe et s'il correspond à celui d'un utilisateur admin
    if (!token || !isAdmin(token)) {
      // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié ou n'est pas un administrateur
      window.login.href = "/loginadmin";
    }
  }, []);

  const isAdmin = (token) => {
    // Votre logique de vérification du token admin ici
    // Par exemple, vérifier si le token a un certain format spécifique ou s'il contient certaines informations spécifiques
    // Si le token correspond à celui d'un utilisateur admin, retournez true, sinon retournez false
    return true; // Placeholder - À remplacer par votre logique de vérification du token admin
  };

  return (
    <>
      <main>
        <TabTools sectionsPage={[""]} />
        <div className="dashboard">
          <div className="dashboard__box1">
            <DashboardMenuAdmin />
          </div>
          <div className="dashboard__box">
            <DashboardBanner name={"Domaine la Consonnière"} photoURL={dom} />
            <DashboardBoardAdmin />
          </div>
        </div>
      </main>
    </>
  );
}

export default DashboardAdmin;
