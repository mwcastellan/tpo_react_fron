import React from "react";
/* import "./style/NotFound.css";*/

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-subtitle">Ups..</p>
        <p className="notfound-text">
          Ups! No se encuentra la página.
        </p>
      </div>
    </div>
  );
};

export default NotFound;