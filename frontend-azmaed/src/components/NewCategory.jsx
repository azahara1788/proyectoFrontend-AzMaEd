import "./NewCategory.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { saveCategoryService } from "../services";
import { AuthContext } from "../context/AuthContext";
import { Loading } from "./Loading";

export const NewCategory = ({ categories, setCategories, loading }) => {
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  if (loading) {
    return <Loading />;
  }

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      const data = new FormData(e.target);
      const cat = await saveCategoryService({ data, token });
      setCategories([...categories, cat]);
      e.target.reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setSaving(false);
      navigate(`/note`);
    }
  };
  return (
    <section id="nueva-Categoria">
      <h2 className="h1_note">Añade una nueva categoría</h2>
      <form onSubmit={handleForm} id="form_category">
        <fieldset className="nuevaCategoria">
          <label htmlFor="text">Nueva Categoría</label>
          <input type="text" id="category" name="category" required />
        </fieldset>
        <button className="nuevaCategoria">Guardar</button>
        {saving ? <p>Guardada</p> : null}
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
