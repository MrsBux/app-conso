import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Salons from "./pages/Salons.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import DashboardAdmin from "./pages/DashboardAdmin.jsx";
import Error from "./pages/Error.jsx";
import Login from "./pages/Login.jsx";
import LoginAdmin from "./pages/LoginAdmin.jsx";
import Panier from "./pages/Panier.jsx";
import Partners from "./pages/Partners.jsx";
import Prestations from "./pages/Prestations.jsx";
import "./style/css/main.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/salons" element={<Salons />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardadmin" element={<DashboardAdmin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginadmin" element={<LoginAdmin />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
