import React from "react";
import imgFacebook from "../estaticos/img/facebook-brands.svg";
import imgInstagram from "../estaticos/img/instagram-brands.svg";
import imgWhatapps from "../estaticos/img/whatsapp-brands.svg";
import imgGithub from "../estaticos/img/github-brands.svg";

const Footer = () => {
  return (
    <footer className="Footer bg-primary">
      <div>
        <a
          href="https://facebook.com"
          title="Seguinos en Facebook"
          target="_blank"
        >
          <img src={imgFacebook} width="50" height="50" />
        </a>
        <a
          href="https://instagram.com"
          title="Seguinos en Instagram"
          target="_blank"
        >
          <img src={imgInstagram} width="50" height="50" />
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=110303456&text=Buenos%20dias,%20mi%20consulta%20es..."
          title="Mensajeanos por Whatsapp"
          target="_blank"
        >
          <img src={imgWhatapps} width="50" height="50" />
        </a>

        <a
          href="https://github.com/mwcastellan/tpo_react_fron"
          title="Mi desarrollo en Github"
          target="_blank"
        >
          <img src={imgGithub} width="50" height="50" />
        </a>
      </div>
      <p>&copy; 2025 derechos reservados</p>
    </footer>
  );
};

export default Footer;
