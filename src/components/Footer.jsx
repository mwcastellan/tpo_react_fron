import React from "react";
import Facebook from "../assets/img/facebook-brands.svg";
import Instagram from "../assets/img/instagram-brands.svg";
import Whatapps from "../assets/img/whatsapp-brands.svg";
import Github from "../assets/img/github-brands.svg";
const Footer = () => {
  return (
    <footer class="footer">
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

      <p>&copy; 2024 derechos reservados</p>
    </footer>
  );
};

export default Footer;
