import * as Styles from "./style";

import { useState, useEffect, FormEvent } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import { Link } from "react-router-dom";
import logoReact from "../../assets/images/react.png";

const Register = () => {
  const [displayName, setDisplayName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { createUser, error: authError, loading }: any = useAuthentication();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setError("");
    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!");
      return;
    }

    const res = await createUser(user);

    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <Styles.Register>
      <form onSubmit={handleSubmit}>
        <h1>
          Cadastrar
          <img src={logoReact} alt="logo" />
        </h1>
        <h3>Cadastre-se para visualizar o conteúdo de outras pessoas.</h3>
        <label>
          <span>Nome: </span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
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
        <label>
          <span>Confirmação de senha: </span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <button className="btn">Cadastrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>}
        <li>
          Tem uma conta?
          <Link to="/Login">
            <a>CONECTE-SE</a>
          </Link>
        </li>
      </form>
    </Styles.Register>
  );
};

export default Register;
