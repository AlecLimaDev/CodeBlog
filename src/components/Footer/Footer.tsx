import * as Styles from "./Footer.styled";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Styles.Footer>
      <li>
        <Link to="/about">
          <a>Sobre</a>
        </Link>
        <Link to="/register">
          <a> Criar Conta</a>
        </Link>
        <Link to={"https://www.linkedin.com/in/aleclima-/"}>
          <a href="https://www.linkedin.com/in/aleclima-/" target="_blank">
            Linkedin do Desenvolvedor
          </a>
        </Link>
        <Link to={"https://github.com/AlecLimaDev"}>
          <a href="https://github.com/AlecLimaDev" target="_blank">
            GitHub
          </a>
        </Link>
      </li>
    </Styles.Footer>
  );
};

export default Footer;
