import React from 'react';
import { useParams } from 'react-router-dom';
import DogPage from './DogPage';

function DogDetails({ dogs }) {
  const { name } = useParams();

  if (name) {
    const currentDog = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogPage dog={currentDog} />;
  }

  return null;
}

export default DogDetails;