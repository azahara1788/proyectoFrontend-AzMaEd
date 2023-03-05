import "./LoginPage.css";
import "../App.css";
import { useContext, useState } from "react";
import { logInUserService } from "../services";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pass, setPass] = useState("password");

  const verContraseña = () => {
    if (pass === "password") {
      setPass("text");
    } else {
      setPass("password");
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const token = await logInUserService({ email, password });

      login(token);
      navigate("/note");
    } catch (error) {
      setError("Email o password incorrecto", error.message);
    }
  };
  return (
    <form onSubmit={handleForm} className="login">
      <h2>Login</h2>
      <fieldset>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="pass">Password:</label>
        <input
          type={pass}
          name="pass"
          id="pass"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </fieldset>
      <span
        onClick={() => {
          verContraseña();
        }}
      >
        {" "}
        👀
      </span>
      <button>Login</button>
      {error ? <p>{error}</p> : null}
    </form>
  );
};
