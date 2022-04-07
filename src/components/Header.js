import React from "react";
import TrollFace from "../images/troll-face.png"

export default function Header() {
  return (
    <header className="header">
      <img src={TrollFace} className="header--image" alt=""/>
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React  Project </h4>
    </header>
  );
}
