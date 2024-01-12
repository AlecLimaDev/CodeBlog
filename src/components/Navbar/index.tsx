import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";
import * as S from "./style";
import { AiOutlineAlignCenter } from "react-icons/ai";
import Logo from "../../assets/images/logo.png";


const Navbar = () => {
  const { user }: any = useAuthValue();
  const { logout } = useAuthentication();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <S.Section>
        <AiOutlineAlignCenter onClick={toggleMenu}/>
        {isMenuOpen && (
          <S.Navbar onClick={closeMenu}>
            <img src={Logo} alt="Foto" />
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
            <li>
              <NavLink
                to="/estudo"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Sessão de Estudo
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
          </S.Navbar>
        )}
      </S.Section>
    </>
  );
};

export default Navbar;
