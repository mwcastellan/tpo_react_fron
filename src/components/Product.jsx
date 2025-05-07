import React, { useState } from "react";

const Product = ({ product, addToCart }) => {
  const [cantidad, setCantidad] = useState(1);
  // const [stock, setStock] = useState(5)

  const increase = () =>
    setCantidad((prev) => (prev != product.stock ? prev + 1 : prev));
  const decrease = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));

  return (
      <article class="Producto card mb-3 list-group-item list-group-item-action flex-column align-items-start">
        <h5 class="card-header">{product.nombre}</h5>
        <div class="card-body">
          <h6 class="card-title">Precio: ${product.precio}</h6>
          <h6 class="card-title">Stock: {product.stock}</h6>
          <img
            src={product.imagen}
            class="d-block user-select-none"
            width="50%"
            height="50%"
            aria-label="Placeholder: Image cap"
            focusable="false"
            role="img"
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 318 180"
          />
        </div>
        <div
          class="card-footer text-muted"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
            marginBottom: "2px",
          }}
        >
          <button
            className="btn btn-primary px-2 py-0 rounded"
            onClick={decrease}
            style={{
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
            className="btn btn-primary px-2 py-0 rounded"
            onClick={increase}
            style={{
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
          className="btn btn-secondary"
          onClick={() => addToCart({ ...product, cantidad: cantidad })}
        >
          Agregar
        </button>
      </article>
  );
};

export default Product;
