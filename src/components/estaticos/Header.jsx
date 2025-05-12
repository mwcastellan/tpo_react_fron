import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart";
import Logo from "./img/react.svg";

const Header = ({ cartItems, borrarProducto }) => {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <header className="Header bg-primary">
      <h1>Veterinaria - Curso React Frontend - Clase 25022</h1>

      <nav className="Nav navbar-expand-lg bg-primary">
        <img src={Logo} />
        <ul className="navbar-nav me-auto Nav-Ul">
          <li>
            <Link to="/" className="link nav-item h5">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/productos" className="link nav-item h5">
              Productos
            </Link>
          </li>
          <li>
            <Link to="/adoptame" className="link nav-item h5">
              Adoptame
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="link nav-item h5">
              Contacto
            </Link>
          </li>
          <li className="nav-item">
            <button
              className="btnCart fa-solid fa-cart-shopping fa-2x"
              onClick={() => setCartOpen(true)}
            ></button>
            <Cart
              cartItems={cartItems}
              isOpen={isCartOpen}
              onClose={() => setCartOpen(false)}
              borrarProducto={borrarProducto}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
