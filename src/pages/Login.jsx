import React from "react";
import Administrar from "./Administrar";
import { useNavigate } from "react-router-dom";

/* Login */
const Login = ({ isAutorizado, setIsAutorizado }) => {
  const volver = useNavigate();

  return (
    <article className="card mb-3 list-group-item list-group-item-action flex-column align-items-start">
      <h5 className="card-header">Login</h5>
      <div className="card-body">
        <h6 className="card-title">Usuario</h6>
        <h6 className="card-title">Contraseña</h6>
        <br />
        <button className="btn btn-secondary" onClick={() => volver(-1)}>
          Volver
        </button>
        <br /> <br />
        <button
          className="btn btn-secondary"
          onClick={() => setIsAutorizado(!isAutorizado)}
        >
          {isAutorizado ? "Cerrar Sesión" : "Iniciar Sesión"}
        </button>
        {isAutorizado && (
          <Administrar
            isAutorizado={isAutorizado}
            setIsAutorizado={setIsAutorizado}
          />
        )}
      </div>
    </article>
  );
};
export default Login;
