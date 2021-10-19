import React from "react";
import { Link } from "react-router-dom";

function ColorList({ colors }) {
  return (
    <div>
      <h1>Welcome to The Color Factory</h1>
      <p><Link exact to="/colors/new">Add a color</Link></p>
      <p>Here are the current colors:</p>
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
export const colors = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Violet"
]
ColorList.defaultProps = { colors };

export default ColorList;