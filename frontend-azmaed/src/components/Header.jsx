import { Auth } from "./Auth";
import { Link } from "react-router-dom";
import "./Header.css";
import { useThemeContext } from "../context/ThemeContext";
import { Menu } from "./MenuPincipal";
//import Acordeon from "./Acordeon";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Header = () => {
  const { theme } = useThemeContext();
  const { user, token } = useContext(AuthContext);
  return (
    <header>
      <section id={theme} className="header">
        <Link className="logo" to={"/"}>
          <img src="/images/logo3.png" alt="logo Notes for me" />
        </Link>
        <h1> NotesForMe </h1>

        <nav>
          <Auth />
        </nav>
      </section>
      <section className="menu">{user && token ? <Menu /> : null}</section>
    </header>
  );
};
