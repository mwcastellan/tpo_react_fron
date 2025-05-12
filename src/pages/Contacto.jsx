import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";

const Contacto = ({ cart, borrarProducto }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />
      <blockquote className="blockquote">
        <h2>CONTACTO</h2>
      </blockquote>

      <Footer />
    </>
  );
};

export default Contacto;
