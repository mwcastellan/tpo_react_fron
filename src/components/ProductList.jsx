import React from "react";
import Product from "./Product";

let estilosnotaspie = {
  backgroundColor: "rgb(65, 164, 164)",
  padding: "1px",
  textAlign: "center",
  color: "black",
};
const ProductList = ({ productos, agregarCarrito }) => {
  return (
    <>
      <section className="Productos list-group-item list-group-item-action flex-column align-items-start">
        {productos.map((product) => (
          <Product key={product.id} product={product} addToCart={agregarCarrito} />
        ))}
      </section>

      <section className="Productos_Notas_containerGrid">
        <article className="Productos_Nota_containerGridItem">
          <i className="fa-solid fa-truck fa-2x"></i>
          <h5>Envío gratis</h5>
          <p>En compras mayores a $22000</p>
        </article>

        <article className="Productos_Nota_containerGridItem">
          <i className="fa-solid fa-cart-shopping fa-2x"></i>
          <h5>Beneficios</h5>
          <p>En todas tus compras</p>
        </article>

        <article className="Productos_Nota_containerGridItem">
          <i className="fa-regular fa-credit-card fa-2x"></i>
          <h5>Todos los medios de pago</h5>
          <p>Tarjetas de crédito, débito o efectivo</p>
        </article>

        <article className="Productos_Nota_containerGridItem">
          <i className="fa-solid fa-location-dot fa-2x"></i>
          <h5>Retiro en tienda</h5>
          <p>Beneficios y regalos exclusivos</p>
        </article>
      </section>
    </>
  );
};

export default ProductList;
