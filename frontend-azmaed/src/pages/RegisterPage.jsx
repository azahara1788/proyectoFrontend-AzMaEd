import { useState } from "react";
import { useNavigate } from "react-router";
<<<<<<< HEAD
import { toast } from "react-toastify";
import "./RegisterPage.css";
=======
/* import { Loading } from "../components/Loading"; */
>>>>>>> fd9328ba9b63052f5a147806419c7b0e009e3a9e
import { registerUserService } from "../services";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

<<<<<<< HEAD
  const handleForm = async (e) => {
=======
  /* const [loader, setLoader] = useState(false); */

  const handleForm = async (e) => {
    /* setLoader(true); */
>>>>>>> fd9328ba9b63052f5a147806419c7b0e009e3a9e
    e.preventDefault();
    setError("");

    if (pass1 !== pass2) {
      setError("Passwords do not match");
      return;
    }
    try {
      await registerUserService({ email, password: pass1, name, surname });
      navigate("/login");
      toast.success("¡Te has registrado correctamente");
    } catch (error) {
      setError(error.message);
    }
    let form = e.target;
    form.reset();
<<<<<<< HEAD
  };

  return (
    <section className="section_register">
      <h1 className="h1_register">Registro</h1>
      <form id="form_register" onSubmit={handleForm}>
        <fieldset className="form_caja">
          <label htmlFor="name">Nombre</label>
=======
   /*  setLoader(false); */
  };

  return (
    <section>
      <h1>Register</h1>
      <form id="register" onSubmit={handleForm}>
        {/* {loader && <Loading />} */}
        <fieldset>
          <label htmlFor="name">Name</label>
>>>>>>> fd9328ba9b63052f5a147806419c7b0e009e3a9e
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
      </form>
    </section>
  );
};
