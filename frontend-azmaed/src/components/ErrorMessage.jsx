import { Link } from "react-router-dom";

export const ErrorMessage = ({ message }) => {
  return (
    <section className="error">
      <h1>Algo ha fallado...😶‍🌫️</h1>
      <p>{message}</p>
      <Link to={"/"}>Ir a Inicio</Link>
    </section>
  );
};
