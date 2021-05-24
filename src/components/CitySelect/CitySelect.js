import React from "react";
import "./CitySelect.scss";

const CitySelect = ({ options, setActiveOption }) => {
  const renderedOptions = options.map((option) => {
    return (
      <option className="select__option" key={option.city} value={option.city}>
        {option.city}
      </option>
    );
  });

  return (
    <select
      className="select"
      onChange={(e) => {
        setActiveOption(e.target.value);
      }}
    >
      <option hidden>Select city</option>
      {renderedOptions}
    </select>
  );
};

export default CitySelect;
