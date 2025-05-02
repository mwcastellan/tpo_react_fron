import React from "react";
import Logo from "../assets/img/icon/favicon.ico";

const Nav = () => {
  return (
    <>
      <nav class="nav">
        <ul>
          <img src={Logo} width="70" height="70" />
          <li>
            <a href="index.html">Inicio</a>
          </li>
          <li>
            <a href="productos.html">Productos</a>
          </li>
          <li>
            <a href="adoptame.html">Adoptame</a>
          </li>

          <li>
            <a href="#Ubicacion">Ubicación</a>
          </li>
          <li>
            <a href="formulario.html">Contacto</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
