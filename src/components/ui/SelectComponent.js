import React, { useState } from "react";

const SelectComponent = () => {
  const [selectedOption, setSelectedOption] = useState("option1"); // Valor por defecto

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption);
  };

  return (
    <div>
      <label htmlFor="mySelect">Selecciona una opción:</label>
      <select
        id="mySelect"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="option1">Opción 1</option>
        <option value="option2">Opción 2</option>
        <option value="option3">Opción 3</option>
        {/* Agrega más opciones según sea necesario */}
      </select>

      <p>Seleccionaste la opción: {selectedOption}</p>
    </div>
  );
};

export default SelectComponent;
