import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filtre from "../Catalogue/Filtre";
import CardPartner from "./cardsPartners";
import BtnAjouter from "../BtnAjouter";
import ModalT from "../ModalT";
import Form from "react-bootstrap/Form";
import "../../style/css/nospartenaires.css";

function NosPartenaires({ partners }) {
  const navigate = useNavigate();
  const filtres = [
    { filtreName: "Restaurateurs" },
    { filtreName: "Caviste" },
    { filtreName: "Importateur" },
    { filtreName: "Autre" },
  ];

  const [visiblePartner, setVisiblePartner] = useState(4);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [filteredPartners, setFilteredPartners] = useState(partners || []);
  const [selectedFilter, setSelectedFilter] = useState("Tous");
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    setVisiblePartner(isMobile ? 4 : (partners || []).length);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, partners]);

  useEffect(() => {
    setFilteredPartners(partners || []);
  }, [partners]);

  const handleToggleVisibility = () => {
    setVisiblePartner((visible) =>
      visible === 4 ? (partners || []).length : 4
    );
  };

  const handleAdmiBtn = () => {
    console.log("click");
  };

  const handlePost = (formData) => {
    const token = localStorage.getItem("token");

    fetch(`https://domconso-d13067f1e717.herokuapp.com/api/partners/New`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(
              `Erreur lors de la création du partenaire: ${text}`
            );
          });
        }
        return response.json();
      })
      .then((data) => {
        alert("Partenaire enregistré");
        navigate("/partners");
      })
      .catch((error) => {
        console.error(
          "Erreur détaillée lors de la création du partenaire:",
          error
        );
        setError(error.message);
      });
  };

  const visiblePartners = filteredPartners.slice(0, visiblePartner);

  const handleFilterClick = (filterName) => {
    setSelectedFilter(filterName);

    if (filterName === "Tous" || filterName === null) {
      setFilteredPartners(partners || []);
    } else {
      const filtered = (partners || []).filter((partner) => {
        return partner.category.toLowerCase() === filterName.toLowerCase();
      });
      setFilteredPartners(filtered);
    }
  };

  if (!partners || partners.length === 0) {
    return <div>Aucun partenaire disponible</div>;
  }

  return (
    <div className="nospartenaires">
      {error && <div className="error-message">{error}</div>}

      <h2 className="nospartenaires__title">NOS PARTENAIRES</h2>
      <div className="nospartenaires__filtresmobiles">
        <Filtre
          filtreName={"Tous"}
          onClick={() => handleFilterClick("Tous")}
          isSelected={selectedFilter === "Tous"}
        />
        {filtres.map((filtre, index) => (
          <Filtre
            key={index}
            filtreName={filtre.filtreName}
            onClick={() => handleFilterClick(filtre.filtreName)}
            isSelected={selectedFilter === filtre.filtreName}
          />
        ))}
      </div>
      <div className="nospartenaires__gallery">
        {visiblePartners.map((item, index) => (
          <CardPartner
            key={index}
            logoPUrl={item.logoPUrl}
            name={item.name}
            contactUrl={item.contactUrl}
            type={item.type}
            localisation={item.localisation}
            description={item.description}
            id={item._id}
          />
        ))}
        {isMobile && (
          <button
            className="nospartenaires__gallery__btn"
            onClick={handleToggleVisibility}
          >
            {visiblePartner === 4 ? "Voir plus" : "Voir moins"}
          </button>
        )}
        <ModalT
          title={"Ajouter un nouveau partenaire"}
          btnShow={<BtnAjouter />}
          id={"none"}
          modalContent={
            <Form className="form__ajout__partenaire form__ajout">
              <Form.Group
                className="form__groupe"
                controlId="name__ajoutpartenaire"
              >
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="Nom du partenaire" />
              </Form.Group>

              <Form.Group
                className="form__groupe"
                controlId="description__ajoutpartenaire"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control type="textarea" placeholder="Description" />
              </Form.Group>

              <Form.Group
                className="form__groupe"
                controlId="category__ajoutpartenaire"
              >
                <Form.Label>Catégorie</Form.Label>
                <Form.Control as="select">
                  <option>Restaurateur</option>
                  <option>Caviste</option>
                  <option>Importateur</option>
                  <option>Autre</option>
                </Form.Control>
              </Form.Group>

              <Form.Group
                className="form__groupe"
                controlId="localisation__ajoutpartenaire"
              >
                <Form.Label>Localisation</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Localisation du partenaire"
                />
              </Form.Group>

              <Form.Group
                className="form__groupe"
                controlId="contactUrl__ajoutpartenaire"
              >
                <Form.Label>URL de contact</Form.Label>
                <Form.Control type="url" placeholder="https://example.com" />
              </Form.Group>

              <Form.Group
                className="form__groupe"
                controlId="logo__ajoutpartenaire"
              >
                <Form.Label>Logo</Form.Label>
                <Form.Control type="file" accept="image/*" />
              </Form.Group>
              <button
                className="btn__submit"
                type="submit"
                onClick={(event) => {
                  event.preventDefault();
                  const form = event.target.form;
                  const partnerData = {
                    name: form.name__ajoutpartenaire.value,
                    category: form.category__ajoutpartenaire.value,
                    localisation: form.localisation__ajoutpartenaire.value,
                    description: form.description__ajoutpartenaire.value,
                    contactUrl: form.contactUrl__ajoutpartenaire.value,
                  };
                  if (form.logo__ajoutpartenaire.files[0]) {
                    partnerData.logo = form.logo__ajoutpartenaire.files[0];
                  }

                  handlePost(partnerData);
                }}
              >
                Ajouter
              </button>
            </Form>
          }
          btnname={"Retour"}
        />
      </div>
    </div>
  );
}

export default NosPartenaires;
