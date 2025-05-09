import React from "react";
import "./style/Estilos.css";
import logo from "../assets/react.svg";
import Cart from "./Cart";

const Nav = ({
  vaciarCarrito,
  cartCount,
  cartItems,
  isCartOpen,
  setCartOpen,
  borrarProducto,
}) => {
  return (
    <nav className="Nav navbar-expand-lg bg-primary">
      <img src={logo} />
      <ul className="navbar-nav me-auto Nav-Ul">
        <li className="nav-item h5">Inicio</li>
        <li className="nav-item h5">Acerca de</li>
        <li className="nav-item h5">Contacto</li>
        <li className="nav-item h5">Carrito: {cartCount}</li>
        <li className="nav-item">
          <button
            className="btnCart fa-solid fa-cart-shopping fa-2x"
            onClick={() => setCartOpen(true)}
          ></button>
          <Cart
            vaciarCarrito={vaciarCarrito}
            cartItems={cartItems}
            isOpen={isCartOpen}
            onClose={() => setCartOpen(false)}
            borrarProducto={borrarProducto}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
