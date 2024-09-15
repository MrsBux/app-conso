import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PanierProvider } from "./store/panierContext.jsx";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Salons from "./pages/Salons.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import DashboardAdmin from "./pages/DashboardAdmin.jsx";
import Error from "./pages/Error.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import LoginAdmin from "./pages/LoginAdmin.jsx";
import Panier from "./pages/Panier.jsx";
import Partners from "./pages/Partners.jsx";
import Prestations from "./pages/Prestations.jsx";
import "./style/css/main.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);

  useEffect(() => {
    const type = localStorage.getItem("type");
    if (type) {
      window.location.reload();
    }
  }, []);

  return (
    <React.StrictMode>
      <Router>
        <PanierProvider>
          {" "}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/salons" element={<Salons />} />
            <Route path="/dashboard/:userId" element={<Dashboard />} />
            <Route path="/dashboardadmin" element={<DashboardAdmin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loginadmin" element={<LoginAdmin />} />
            <Route path="/panier" element={<Panier />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/prestations" element={<Prestations />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />{" "}
        </PanierProvider>
      </Router>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
