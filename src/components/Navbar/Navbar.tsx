import { NavLink } from "react-router-dom";

import { useAuthentication } from "../../hooks/useAuthentication";

import { useAuthValue } from "../../context/AuthContext";

import * as Styles from "./Navbar.styled";

const Navbar = () => {
  const { user }: any = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <Styles.Navbar>
      <NavLink to="/" className="brand">
        <p>
          {" "}
          Cod<span>Ing</span>
        </p>
      </NavLink>
      <Styles.LinkList>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Sobre
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Cadastrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Novo post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Dashboard
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/logout"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={logout}
                >
                  Sair
                </NavLink>
              </li>
            )}
          </>
        )}
      </Styles.LinkList>
    </Styles.Navbar>
  );
};

export default Navbar;
