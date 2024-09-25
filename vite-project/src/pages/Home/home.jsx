import React from "react";
import './home.css';
import { Link } from "react-router-dom";

const Home = () =>{
  return (
    <div class="home">
      <h1>Este es el home de mi web</h1>
      <Link to={"../about"}>Ir a información de la pagina</Link>
      <Link to={"../contact"}>Ir a contactos</Link>
    </div>
  );
}

export default Home;
