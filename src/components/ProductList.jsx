import React from "react";
import Product from "./Product";

let estilosnotaspie = {
  backgroundColor: "rgb(65, 164, 164)",
  padding: "1px",
  textAlign: "center",
  color: "black",
};
const ProductList = ({ products, addToCart }) => {
  return (
    <>
      <div className="galeria">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <section className="Productos_Notas_containerGrid">
        <article className="Productos_Nota_containerGridItem">
          <i className="fa-solid fa-truck fa-2x"></i>
          <h4>Envío gratis</h4>
          <p>En compras mayores a $22000</p>
        </article>

        <article className="Productos_Nota_containerGridItem">
          <i className="fa-solid fa-cart-shopping fa-2x"></i>
          <h4>Beneficios</h4>
          <p>En todas tus compras</p>
        </article>

        <article className="Productos_Nota_containerGridItem">
          <i className="fa-regular fa-credit-card fa-2x"></i>
          <h4>Todos los medios de pago</h4>
          <p>Tarjetas de crédito, débito o efectivo</p>
        </article>

        <article className="Productos_Nota_containerGridItem">
          <i className="fa-solid fa-location-dot fa-2x"></i>
          <h4>Retiro en tienda</h4>
          <p>Beneficios y regalos exclusivos</p>
        </article>
      </section>
    </>
  );
};

export default ProductList;
