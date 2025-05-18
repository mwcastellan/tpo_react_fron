import React from "react";
import { Navigate } from "react-router-dom";

function RutaProtegidas({
  isAutorizado,
  setIsAutorizado,
  productos,
  children,
}) {
  if (!isAutorizado) {
    return (
      <Navigate
        to="/login"
        isAutorizado={isAutorizado}
        setIsAutorizado={setIsAutorizado}
        productos={productos}
        replace
      />
    );
  }
  return children;
}
export default RutaProtegidas;
