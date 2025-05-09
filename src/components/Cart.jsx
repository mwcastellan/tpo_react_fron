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

        <button
          onClick={onClose}
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Cerrar
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
                  <article className="Product">
                    <ul class="list-group">
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        <img src={item.imagen} width="15%" height="15%" />
                        <b>{item.nombre} </b>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        Precio ${item.precio}
                        <span class="badge bg-primary rounded-pill">
                          {item.cantidad}
                        </span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        <button onClick={() => borrarProducto(item)}>
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </li>
                    </ul>
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
