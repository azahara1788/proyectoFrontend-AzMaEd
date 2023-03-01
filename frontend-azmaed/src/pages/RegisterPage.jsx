import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "./RegisterPage.css";
import { registerUserService } from "../services";
import { Loading } from "../components/Loading";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    if (pass1 !== pass2) {
      setError(toast.error("Las contraseñas no coinciden"));
      return;
    }
    try {
      await registerUserService({ email, password: pass1, name, surname });
      setLoading(true);
      navigate("/login");
      toast.success("¡Te has registrado correctamente!");
    } catch (error) {
      setError(toast.error(error.message));
    }
    let form = e.target;
    form.reset();
  };

  return (
    <div className="div_register">
      <section className="section_register">
        <h1 className="h1_register">Registro</h1>
        <form id="form_register" onSubmit={handleForm}>
          <fieldset className="form_caja">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <fieldset className="form_caja">
            <label htmlFor="surname">Apellidos</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={surname}
              required
              onChange={(e) => setSurname(e.target.value)}
            />
          </fieldset>
          <fieldset className="form_caja">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className="form_caja">
            <label htmlFor="pass1">Contraseña</label>
            <input
              type="password"
              id="pass1"
              name="pass1"
              value={pass1}
              required
              onChange={(e) => setPass1(e.target.value)}
            />
          </fieldset>
          <fieldset className="form_caja">
            <label htmlFor="pass2">Repita contraseña</label>
            <input
              type="password"
              id="pass2"
              name="pass2"
              value={pass2}
              required
              onChange={(e) => setPass2(e.target.value)}
            />
          </fieldset>
          <button className="register_button">Registrarse</button>
          {error ? <p>{error}</p> : null}
          {loading && <Loading />}
        </form>
      </section>
    </div>
  );
};
