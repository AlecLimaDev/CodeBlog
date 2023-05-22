import * as Styles from "./About.styled";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <Styles.About>
      <h2>
        Sobre a<span> Coding</span>
      </h2>
      <p>
        A Codinha é um projeto que eu tinha em mente cujo objetivo é
        compartilhar imagens de código e explicações sobre ele com outros
        desenvolvedores. O objetivo é montar uma comunidade de desenvolvedores
        que compartilham trechos de código, dando novas formas de pensar. Transformando sonhos em Realidade.
      </p>
      <p>Para colocar os seus trechos de código na Coding você pode fazer a conversão da imagem em url da seguinte forma:</p>
      <li>
        Video explicativo:
        <a href="https://www.youtube.com/watch?v=Ncl72JEiUZU" target="_blank">Visualizar</a>
      </li>
      <img src="/src/assets/images/imGE.png" alt="Video-Explicando" />
      <p>Criado pelo Desenvolvedor Alec Lima.</p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </Styles.About>
  );
};

export default About;
