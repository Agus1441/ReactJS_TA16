import React from "react";
import './contact.css';
import { Link } from "react-router-dom";

const Contact = () =>{
  return (
    <div class="contact">
      <h1>Contactos</h1>
        <il>Agustín Schlechter </il>
        <il>Agustín Schlechter(otro) </il>
        <il>Otros </il>
      <Link to={"../about"}>Ir a información de la pagina</Link>
      <Link to={"../"}>Ir a home</Link>
    </div>
  );
}

export default Contact;