import * as Styles from "./Login.styled";
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import { Link } from "react-router-dom";
import logoReact from "../../assets/images/react.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<boolean | string>("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setError("");
    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <>
      <Styles.Login>
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
          <label></label>
          {!loading && <button className="btn">Entrar</button>}
          {loading && (
            <button className="btn" disabled>
              Aguarde...
            </button>
          )}
          {error && <p className="error">{error}</p>}
          <li>
            <p>OU</p>
            Não tem uma conta?
            <Link to="/Register">
              <a>CADASTRE-SE</a>
            </Link>
          </li>
        </form>
      </Styles.Login>
    </>
  );
};

export default Login;
