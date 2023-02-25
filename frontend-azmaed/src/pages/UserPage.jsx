import { Link } from "react-router-dom";
import "./UserPage.css";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const UserPage = () => {
  const { user } = useContext(AuthContext);

  return (
    user !== null && (
      <section className="section_userPage">
        <div className="div_userPage">
          <h1 className="h1_userPage">
            Usuario: {`${user.name} ${user.surname}`}{" "}
          </h1>
          <h2 className="h2_userPage">Correo: {user.email}</h2>
          <section className="section2_userPage">
            <p className="p_userPage">User id: {user.id}</p>
            <p className="p2_userPage">
              Registrado en: {new Date(user.registrationDate).toLocaleString()}
            </p>
          </section>
          <button className="button_userPage">
            <Link className="link_userPage" to={`/user/edit`}>
              Editar datos de usuario
            </Link>
          </button>
        </div>
      </section>
    )
  );
};
