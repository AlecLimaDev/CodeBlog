import * as Styles from "./Footer.styled"

const Footer = () => {
  return (
    <Styles.Footer>
    <li>
      <a href="http://localhost:5173/about" target="_blank">Sobre</a>
      <a href="http://localhost:5173/register" target="_blank">Criar Conta</a>
      <a href="https://www.linkedin.com/in/aleclima-/" target="_blank">Linkedin do Desenvolvedor</a>
      <a href="https://github.com/AlecLimaDev" target="_blank">GitHub</a>
    </li>

      {/* <p>Todos os direitos reservados &copy; 2023</p> */}
    </Styles.Footer>
  );
};

export default Footer;
