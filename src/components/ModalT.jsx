import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../style/css/modalt.css";

function ModalT({ title, modalContent, btnShow, btnname }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div>
        <Button variant="none" onClick={handleShow}>
          {btnShow}
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <div className="modalt">
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalt"> {modalContent} </Modal.Body>
          <Modal.Footer>
            <Button id="modalt__btnsave" onClick={handleClose}>
              {btnname}
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
}

export default ModalT;
