import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Inicio from "./pages/Inicio";
import GaleriaDeProductos from "./pages/GaleriaDeProductos";
import Adoptame from "./pages/Adoptame";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

function App() {
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    fetch(
      "https://681823705a4b07b9d1ce05b2.mockapi.io/tpo-react-fron/productos"
    )
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setTimeout(() => {
          setProductos(datos);
          setCargando(false);
        }, 2000);
      })
      .catch((error) => {
        console.log("Error", error);
        setCargando(false);
        setError(true);
      });
  }, []);

  const handleAddToCart = (product) => {
    const productExist = cart.find((item) => item.id === product.id);

    if (productExist) {
      // alert('El producto ya esta en el carrito')
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                cantidad:
                  item.cantidad < product.disponible
                    ? item.cantidad + 1
                    : item.cantidad,
              }
            : // item.cantidad + 1 }//
              item
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };

  const handleDeleteFromCart = (product) => {
    setCart((preVCart) => {
      return preVCart
        .map((item) => {
          if (item.id === product.id) {
            if (item.cantidad > 1) {
              return { ...item, cantidad: item.cantidad - 1 };
            } else {
              return null;
            }
          } else {
            return item;
          }
        })
        .filter((item) => item != null);
    });
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Inicio borrarProducto={handleDeleteFromCart} cart={cart} />}
        />
        <Route
          path="/productos"
          element={
            <GaleriaDeProductos
              borrarProducto={handleDeleteFromCart}
              agregarCarrito={handleAddToCart}
              cart={cart}
              productos={productos}
              cargando={cargando}
            />
          }
        />
        <Route
          path="/adoptame"
          element={
            <Adoptame borrarProducto={handleDeleteFromCart} cart={cart} />
          }
        />
        <Route
          path="/contacto"
          element={
            <Contacto borrarProducto={handleDeleteFromCart} cart={cart} />
          }
        />
        <Route path="*" element={<NotFound borrarProducto={handleDeleteFromCart} cart={cart}/>} />
      </Routes>
    </Router>
  );
}

export default App;
