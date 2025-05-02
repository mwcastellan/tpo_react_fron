import React from "react";
import carrusel1 from "../assets/img/carrusel1.png";

const Main = () => {
  return (
    <>
      <div class="container-grid">
        <main>
          <div class="Carrusel">
            <div class="carousel-item">
              <img src={carrusel1} class="d-block mx-auto" alt="mascotas1" />
            </div>
          </div>
        </main>
        <aside>
          <div class="aside">
            <h3>Nosotros</h3>
            <p>
              Más que una clínica veterinaria, Veterinaria Grupo 9 es una
              familia dedicada a brindar atención integral a sus mascotas. Con
              años de experiencia y un profundo amor por los animales, nuestro
              equipo se compromete a ofrecer servicios veterinarios de
              vanguardia en un ambiente cálido y acogedor.
            </p>
            <h3>Nuestra Misión</h3>
            <p>
              Nuestra misión es brindar atención veterinaria de excelencia a las
              mascotas de nuestra comunidad, promoviendo su salud y bienestar a
              través de servicios preventivos, curativos y de educación.
            </p>
            <h3>Nuestra Visión</h3>
            <p>
              Aspiramos a ser la clínica veterinaria líder en nuestra comunidad,
              reconocida por la excelencia en nuestros servicios, el compromiso
              con el bienestar animal y la construcción de relaciones sólidas
              con nuestros clientes.
            </p>
          </div>
        </aside>
        <div class="Ubicacion">
          <h3>Ubicación</h3>

          <div class="parrafo">
            <p>
              <i class="fa-solid fa-location-dot"></i> Nos encontramos en el
              corazón de Palermo SOHO a metros de Plaza Serrano, en la esquina
              de Honduras al 5000
            </p>
          </div>
        </div>
        <div class="mapa">"MAPA"</div>
      </div>
    </>
  );
};

export default Main;
