import { Auth } from "./Auth";
import { Link } from "react-router-dom";
import "./Header.css";
import { useThemeContext } from "../context/ThemeContext";


export const Header = () => {
  const { theme } = useThemeContext();
  
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
     
    </header>
  );
};
