import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { user } = useContext(AuthContext);

  return user ? (
    <section>
      <Link to={`/users/login`}>✍️{user.name}</Link>{" "}
     
    </section>
  ) : (
    <ul>
      <li>
        <Link to={"/register"}>Registrarse</Link>
      </li>
      <li>
        <Link to={"/login"}>Iniciar Sesión</Link>
      </li>
    </ul>
  );
};
