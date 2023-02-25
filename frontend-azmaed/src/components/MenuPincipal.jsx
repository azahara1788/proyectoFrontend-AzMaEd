import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Theme from "./Theme";

/* 
import "../App.css"; */

export const Menu = () => {
  const { logout } = useContext(AuthContext);

  return (
    <ul className="menu-principal">
      <li>
        <Link to={"/note"}>Inicio</Link>
      </li>
      <li>
        <Link to={"/notes"}>Notas</Link>
      </li>
      <li>
        <Link to={"/user"}>Perfil</Link>
      </li>

      <li>
        {" "}
        <Theme />{" "}
      </li>
      <li onClick={() => logout()}>Cerrar Sesión</li>
    </ul>
  );
};
