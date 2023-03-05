import "./UserEditPage.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { editUserService } from "../services";
import { Loading } from "../components/Loading";

export const UserEditPage = () => {
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [error] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, token, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [pass, setPass] = useState("password");

  useEffect(() => {
    setName(user?.name || "");
    setSurname(user?.surname || "");
  }, [user]);

  const verContraseña = () => {
    if (pass === "password") {
      setPass("text");
    } else {
      setPass("password");
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (pass1 !== pass2) {
        throw new Error("Las contraseñas no coinciden");
      }
      const data = { name, surname };
      if (pass1) {
        data.password = pass1;
      }
      await editUserService({ id: user.id, data, token });
      setLoading(true);
      updateUser(data);

      navigate("/user");
    } catch (error) {}
  };
  return (
    <div className="div_edit_user">
      <section className="section_edit_user">
        <h2 className="h1_edit_user">Editar datos de usuario</h2>
        <form id="form_edit_user" onSubmit={handleSubmit}>
          <fieldset className="form_caja_edit">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <fieldset className="form_caja_edit">
            <label htmlFor="surname">Apellidos</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </fieldset>

          <fieldset className="form_caja_edit">
            <label htmlFor="pass1">Contraseña</label>
            <input
              type={pass}
              id="pass1"
              name="pass1"
              placeholder="********"
              value={pass1}
              onChange={(e) => setPass1(e.target.value)}
            />
            <span
              onClick={() => {
                verContraseña();
              }}
            >
              {" "}
              👀
            </span>
          </fieldset>
          <fieldset className="form_caja_edit">
            <label htmlFor="pass2">Repita contraseña</label>
            <input
              type="password"
              id="pass2"
              name="pass2"
              placeholder="********"
              value={pass2}
              onChange={(e) => setPass2(e.target.value)}
            />
          </fieldset>
          <button className="edit_user_button">Guardar</button>
        </form>
        {error && <p>{error}</p>}
        {loading && <Loading />}
      </section>
    </div>
  );
};
