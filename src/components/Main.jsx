import React from "react";
import carrusel1 from "../assets/carrusel1.png";
const Main = ({ data }) => {
  // console.log(data);

  return (
    <main className="main">
      <img style={{ width: "25%" }} src={carrusel1} />
      <p>
        Más que una clínica veterinaria, Veterinaria Grupo 9 es una familia
        dedicada a brindar atención integral a sus mascotas. Con años de
        experiencia y un profundo amor por los animales, nuestro equipo se
        compromete a ofrecer servicios veterinarios de vanguardia en un ambiente
        cálido y acogedor.
      </p>
    </main>
  );
};

export default Main;
