import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Color() {
  const { color } = useParams();

  return (
    <div style={{ backgroundColor: color }}>
      <h1>{color}</h1>
      <h3><Link exact to="/colors">Go back</Link></h3>
    </div>
  );
}

export default Color;