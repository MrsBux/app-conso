import React from "react";
import Button from "react-bootstrap/Button";
import "../style/css/btn.css";

function Btn({ txt_btnG, onclick }) {
  return (
    <>
      <Button variant="light" id="btnG" onClick={onclick}>
        {txt_btnG}
      </Button>{" "}
    </>
  );
}

export default Btn;
