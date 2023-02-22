import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../App.css";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext); 

  return user ? (
    <section>
      <Link to={`/users/login`}>{user.email}</Link>{" "}
      <button onClick={() => logout()}>X</button>
    </section>
  ) : (
    <ul className="header">
      <li>
        <Link to={"/register"}>Registrarse</Link>
      </li>
      <li id="log">
        <Link to={"/login"}>Iniciar Sesión</Link>
      </li>
    </ul>
  );
};  

