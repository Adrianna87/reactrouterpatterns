import React from "react";
import { Link } from "react-router-dom";

function ColorList({ colors }) {
  return (
    <div>
      <h1>Welcome to The Color Factory</h1>
      <p>Here are some colors</p>
      <ul>
        {colors.map(color => (
          <li key={color}>
            <Link to={`/colors/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

ColorList.defaultProps = {
  colors: [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Violet"
  ]
};

export default ColorList;