import React from "react";
import Button from "react-bootstrap/Button";
import "../style/css/btn.css";

function Btn({ txt_btnG }) {
  return (
    <>
      <Button variant="light" className="btnG">
        {txt_btnG}
      </Button>{" "}
    </>
  );
}

export default Btn;
