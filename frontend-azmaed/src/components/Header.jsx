import { Auth } from "./Auth";
import { Link } from "react-router-dom";
import { Theme } from "./Theme";

import "../App.css";

export const Header = () => {
  return (
    <header>
      <Link className="logo" to={"/"}>
        <img src="/logosinfondo.png" alt="logo Notes for me" />
      </Link>
      <h1> NotesForMe </h1>
      <Theme />

      <nav>
       {/*  <Auth /> */}
      </nav>
    </header>
  );
};
