import * as Styles from "./App.ts";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";

import React, { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication.tsx";

import { AuthProvider } from "./context/AuthContext.tsx";
import ReactSwitch from "react-switch";

import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import CreatePost from "./pages/CreatePost/index";
import Dashboard from "./pages/Dashboard/index";
import Search from "./pages/Search/index";
import Post from "./pages/Post/index";
import EditPost from "./pages/EditPost/index";

interface AppProps {
  theme?: boolean | string;
  className?: string;
}

const App: React.FC<AppProps> = () => {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((color) => (color === "light" ? "dark" : "light"))
  }


  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();
  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <>
      <>Carregando...</>
    </>
  }

  return (
    <div className="App" id={theme}>
      <AuthProvider
        value={{ user, theme, toggleTheme}}
      >
        <Router>
          <Navbar />
          <Styles.Container>
            <div className="switch">
              <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/posts/:id" element={<Post />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/posts/edit/:id"
                element={user ? <EditPost /> : <Navigate to="/login" />}
              />
              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <Navigate to="/login" />}
              />
              <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
            </Routes>
          </Styles.Container>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;


