import React from "react";
import { Link } from "react-router-dom";
import whiskey from "./whiskey.jpg";
import tubby from "./tubby.jpg";
import duke from "./duke.jpg";
import perry from "./perry.jpg";

function DogHome() {
  const dogs = [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ];

  return (
    <div>
      <h1>Doggos</h1>
      <h4>Welcome to the site!</h4>
      <p>Click on a dog for more info</p>
      <div>
        {dogs.map(d => (
          <img src={d.src} alt={d.name} />
        ))}
      </div>
    </div>
  );
}

export default DogHome;