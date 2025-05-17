import React from "react";
import { useNavigate } from "react-router-dom";

/* Administrar */
const Administrar = ({ isAutorizado, setIsAutorizado }) => {
  const ira = useNavigate();
  return (
    <article className="card mb-3 list-group-item list-group-item-action flex-column align-items-start">
      <h5 className="card-header">Administrar Productos</h5>
      <div className="card-body">
        <h6 className="card-title">Lista de Productos</h6>
        <h6 className="card-title">Estamos trabajando....</h6>
        <br />
        <br />
        <button className="btn btn-secondary" onClick={() => ira("/")}>
          Inicio
        </button>
        <br /> <br />
        <button
          className="btn btn-secondary"
          onClick={() => setIsAutorizado(!isAutorizado)}
        >
          {isAutorizado ? "Cerrar Sesión" : "Iniciar Sesión"}
        </button>
        {isAutorizado && <p>Bienvenido, usuario autenticado!</p>}
        {!isAutorizado && <p>Muchas gracias, hasta luego!</p>}
      </div>
    </article>
  );
};
export default Administrar;