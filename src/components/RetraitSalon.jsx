import React from "react";
import Form from "react-bootstrap/Form";

function RetraitSalon({ salons, onSalonSelect }) {
  const handleSelectChange = (event) => {
    const selectedSalon = salons[event.target.value];
    onSalonSelect(selectedSalon);
  };

  return (
    <div className="retraitsalon">
      <Form>
        <Form.Select
          aria-label="Default select example"
          onChange={handleSelectChange}
        >
          <option>Choisir le salon</option>
          {salons.map((item, index) => (
            <option key={index} value={index}>
              {item.name} -- {item.date} -- {item.localisation}
            </option>
          ))}
        </Form.Select>
        {/* Ajoutez le bouton ici, avec une marge en haut */}
      </Form>
    </div>
  );
}

export default RetraitSalon;
