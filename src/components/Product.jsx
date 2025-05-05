import React, { useState } from "react";

const Product = ({ product, addToCart }) => {
  const [cantidad, setCantidad] = useState(1);
  // const [stock, setStock] = useState(5)

  const increase = () =>
    setCantidad((prev) => (prev != product.stock ? prev + 1 : prev));
  const decrease = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));

  return (  <section className="product">
      <div className="fondoProducto"></div>
      <img src={product.imagen} alt={product.name} className="imagenTrago" />
      <h3 className="product-name">{product.nombre}</h3>
      <p className="product-price">${product.precio}</p>
      <p>Stock: {product.stock}</p>
      <div
  
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2px",
          marginBottom: "2px",
        }}
      >
        <button
          onClick={decrease}
          style={{
            backgroundColor: "rgb(65, 164, 164)",
            border: "none",
            padding: "4px 8px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          -
        </button>
        <span>{cantidad}</span>
        <button
          onClick={increase}
          style={{
            backgroundColor: "rgb(65, 164, 164)",
            border: "none",
            padding: "4px 8px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>

      <button
        className="px-2 py-0 rounded"
        onClick={() => addToCart({ ...product, cantidad: cantidad })}
      >
        Agregar
      </button>
    </section>
  );
};

export default Product;
