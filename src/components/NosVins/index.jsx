import React, { useState } from "react";
import BtnNosvins from "./BtnNosVins";
import { Modal, Button } from "react-bootstrap";
import "../../style/css/nosvins.css";
import "../../style/css/modalt.css";
import nosVins from "../../assets/nosVins.webp";
import TestP from "../TestPalais.tsx";

function NosVins() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const txt = [
    { txtbtn: "J'en veux !", page: "/gallery" },
    { txtbtn: "Où est-ce que je peux en trouver?", page: "/partners" },
    { txtbtn: "Tester votre palais !", handleClick: handleShow },
    { txtbtn: "GFV3", page: "/prestations" },
    { txtbtn: "Venez déguster en salon!", page: "/salons" },
  ];

  return (
    <div className="nosvins">
      <h2 className="nosvins__title"> NOS VINS</h2>
      <img src={nosVins} className="nosvins__img" alt="Nos Vins"></img>
      <div className="nosvins__btns">
        {txt.map((item, index) => (
          <BtnNosvins
            key={index}
            txtBtnNosVins={item.txtbtn}
            id={`btnNV__${index}`}
            page={item.page}
            handleClick={item.handleClick}
          />
        ))}
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="modalt" closeButton>
          <Modal.Title>
            {" "}
            <h2 className="modalt__title">
              Découvrez lequel de nos vins est fait pour vous !
            </h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalt">
          <TestP />
        </Modal.Body>
        <Modal.Footer className="modalt"> </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NosVins;
