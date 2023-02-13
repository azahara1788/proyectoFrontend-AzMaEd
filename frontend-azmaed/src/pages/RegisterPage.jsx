import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Loading } from "../components/Loading";
import { registerUserService } from "../services";
// hay que añadir el nombre y el surname
export const RegisterPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const [loader, setLoader] = useState(false);

  const handleForm = async (e) => {
    setLoader(true);
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
    setLoader(false);
  };

  return (
    <section>
      <h1>Register</h1>
      <form id="register" onSubmit={handleForm}>
        {loader && <Loading />}
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={surname}
            required
            onChange={(e) => setSurname(e.target.value)}
          />
        </fieldset>
        <fieldset>
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
        <fieldset>
          <label htmlFor="pass1">Password</label>
          <input
            type="password"
            id="pass1"
            name="pass1"
            value={pass1}
            required
            onChange={(e) => setPass1(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass2">Repeat password</label>
          <input
            type="password"
            id="pass2"
            name="pass2"
            value={pass2}
            required
            onChange={(e) => setPass2(e.target.value)}
          />
        </fieldset>
        <button>Register</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
