import React from "react";

const Cart = ({
  vaciarCarrito,
  cartItems,
  isOpen,
  onClose,
  borrarProducto,
}) => {
  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart cart-header bg-primary">
        <h2>Carrito de Compras</h2>
        <button onClick={onClose}>
          <i className="fa-solid fa-window-close"></i>
        </button>
      </div>
      <div className="cart-content">
        {cartItems.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <section>
            <ul className="cart-item">
              {cartItems.map((item, index) => (
                <li
                  className="card-body"
                  key={index}
                  style={{ fontSize: "85%" }}
                >
                  <article>
                    {item.nombre} - ${item.precio} - cant:{item.cantidad} -
                    <button onClick={() => borrarProducto(item)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </article>
                </li>
              ))}
            </ul>
            <button
              className="btn btn-secondary"
              onClick={() => vaciarCarrito()}
            >
              Vaciar Carrito
            </button>
          </section>
        )}
      </div>
    </div>
  );
};

export default Cart;
