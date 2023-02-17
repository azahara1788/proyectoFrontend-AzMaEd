import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Auth.css";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext); 

   return user ? (
    <section className="auth">
     <Link to={`/users/login`}>{user.email}</Link>{" "}
      <button onClick={() => logout()}>Cerrar Sesión</button>
    </section>
  ) : (
    <ul className="auth">
      <li id="reg">
        <Link  to={"/register"}>Registrarse</Link>
      </li>
      <li id="log">
        <Link to={"/login"}>Iniciar Sesión</Link>
      </li>
    </ul>
  );
};  

