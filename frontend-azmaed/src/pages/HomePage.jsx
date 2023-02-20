import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./HomePage.css";

export const HomePage = () => {
  const { user, token } = useContext(AuthContext);

  return (
    <main>
      {user && token ? (
        <section className="user">
          <p className="name-user">Hola {user.name},</p>
          <p>
            Accede a tus notas
            <Link to={`/note`}> aquí</Link>
          </p>
        </section>
      ) : null}
      <section>
        <h2>Bienvenido a NotesForMe</h2>
        <p>
          NotesForMe es una aplicación sencilla para tomar tus notas. Su diseño
          es sencillo, intuitivo y minimalistas.
        </p>
        <p>
          {" "}
          Con categorías iniciales que podras modificar, añadir o borrar a tu
          gusto. Una manera rapida de clasificar tus notas. Puedes añadir una
          foto si lo deseas para complementar la nota. ¿ Necesitas un
          recordatorio de viajes, la compra, un evento...? Aquí lo tienes fácil
          y privado.
        </p>
        <p>
          {" "}
          ¿Quiéres compartir una nota? Hazla pública y enviale la dirección url
          a quien quieras que la lea, tan secillo como eso.
        </p>
        <p>
          {" "}
          Además,tiene modo oscuro, para que te resulte más comodo por la noche
          si quieres leer o escribir alguna nota.
        </p>
        <p>
          {" "}
          A que esperas, registrate
          <Link to={`/register`}> aquí</Link> y empieza a usarla.
        </p>
      </section>
    </main>
  );
};
