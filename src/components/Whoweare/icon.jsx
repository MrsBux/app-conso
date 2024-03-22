import "../../style/css/icon.css";

function Icon({ icon, text_icon }) {
  return (
    <>
      <div className="icon">
        <img src={icon}></img>
        <p>{text_icon}</p>
      </div>
    </>
  );
}

export default Icon;
