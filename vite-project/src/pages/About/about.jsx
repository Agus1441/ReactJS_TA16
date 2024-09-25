import React from "react";
import './about.css';
import { Link } from "react-router-dom";

const About = () =>{
  return (
    <div class="about">
      <h1>Contactos</h1>
        <p>Esta pagina es un ejemplo</p>
      <Link to={"../contact"}>Ir a Contactos</Link>
      <Link to={"../"}>Ir a home</Link>
    </div>
  );
}

export default About;