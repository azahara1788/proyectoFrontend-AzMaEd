import { Auth } from "./Auth";
import { Link } from "react-router-dom";
import "../App.css";

export const Header = () => {
  return (
    <header>
      <Link className="logo" to={"/"}>
        <img src="logosinfondo.png" alt="logo Notes for me" />
      </Link>
      <h1> notes for me </h1>
      <nav>
        <Auth />
      </nav>
    </header>
  );
};
