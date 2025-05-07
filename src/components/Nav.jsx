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
        <li className="nav-item">Inicio
        </li>
        <li className="nav-item">Acerca de</li>
        <li className="nav-item">Contacto</li>
        <li className="nav-item">Carrito: {cartCount}</li>
        <li className="nav-item">
          <button className="btnCart" onClick={() => setCartOpen(true)}>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
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
