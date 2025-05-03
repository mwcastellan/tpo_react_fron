import React from "react";
import Facebook from "../assets/facebook-brands.svg";
import Instagram from "../assets/instagram-brands.svg";
import Whatapps from "../assets/whatsapp-brands.svg";
import Github from "../assets/github-brands.svg";

let estilos = {
  backgroundColor: "rgb(65, 164, 164)",
  padding: "1px",
  textAlign: "center",
  color: "black",
};

const Footer = () => {
  return (
    <footer style={estilos}>
      <a
        href="https://facebook.com"
        title="Seguinos en Facebook"
        target="_blank"
      >
        <img src={Facebook} width="50" height="50" />
      </a>
      <a
        href="https://instagram.com"
        title="Seguinos en Instagram"
        target="_blank"
      >
        <img src={Instagram} width="50" height="50" />
      </a>

      <a
        href="https://api.whatsapp.com/send?phone=110303456&text=Buenos%20dias,%20mi%20consulta%20es..."
        title="Mensajeanos por Whatsapp"
        target="_blank"
      >
        <img src={Whatapps} width="50" height="50" />
      </a>

      <a
        href="https://github.com/mwcastellan/tpo_react_fron"
        title="Mi desarrollo en Github"
        target="_blank"
      >
        <img src={Github} width="50" height="50" />
      </a>

      <p>&copy; 2025 derechos reservados</p>
    </footer>
  );
};

export default Footer;
