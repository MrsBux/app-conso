import "../../style/css/chiffre.css";

function Chiffre({ chiffre, text_chiffre }) {
  return (
    <>
      <div className="chiffre">
        <h4> {chiffre} </h4>
        <p> {text_chiffre}</p>
      </div>
    </>
  );
}

export default Chiffre;
