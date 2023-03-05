import "./Header.css";
import { Auth } from "./Auth";
import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";

export const Header = () => {
  const { theme } = useThemeContext();

  return (
    <header id={theme}>
      <section className="header">
        <Link className="logo" to={"/"}>
          <img src="/images/logo3.png" alt="logo Notes for me" />
        </Link>
        <h1> NotesForMe </h1>

        <nav>
          <Auth />
        </nav>
      </section>
    </header>
  );
};
