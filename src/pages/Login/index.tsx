import * as S from "./style";
import { Link } from "react-router-dom";
import logoReact from "../../assets/images/react.png";
import { useLogin } from "./hooks/useLogin";

const Login = () => {
  const {
    handleSubmit,
    email,
    setPassword,
    password,
    error,
    loading,
    setEmail,
  } = useLogin();

  return (
    <>
      <S.Login>
        <form>
          <ul>
            <h1>Bem-Vindo</h1>
            <h3>Para escrever os seus artigos é necessário primeiro criar a conta.</h3>
            <img src={logoReact} alt="" />
            <li>
            <p>OU</p>
            Não tem uma conta?
            <Link to="/Register">
              <a>CADASTRE-SE</a>
            </Link>
          </li>
          </ul>
        </form>
        <form onSubmit={handleSubmit}>
          <label>
            <h1>
              Entrar
              <img src={logoReact} alt="Logo" />
            </h1>
            <span>E-mail: </span>
            <input
              type="email"
              name="email"
              required
              placeholder="E-mail do usuário"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Senha: </span>
            <input
              type="password"
              name="password"
              required
              placeholder="Insira sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {!loading && <button className="btn">Entrar</button>}
          {loading && (
            <button className="btn" disabled>
              Aguarde...
            </button>
          )}
          {error && <p className="error">{error}</p>}
        </form>
      </S.Login>
    </>
  );
};

export default Login;
