import React from "react";
import Carrusel from "../assets/img/carrusel1.png";
import Carrito from "../assets/img/cart-shopping-solid.svg"

const Nav = () => {
  return (
    <>
      <nav class="nav">
        <ul class="menu"> 
          <img src={Carrusel} width="90" height="70" />
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
          <img src={Carrito} width="30" height="30" />
        </ul>
      </nav>
    </>
  );
};

export default Nav;
