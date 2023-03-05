import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { editCategoryService } from "../services";
import { AuthContext } from "../context/AuthContext";
import { Loading } from "../components/Loading";
import useCategory from "../hooks/useCategory";

export const EditCategoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { category, setCategory, loading, error, setError } = useCategory(id);
  const [saving, setSaving] = useState(false);
  const { user, token } = useContext(AuthContext);

  if (!user || loading) return <Loading />;
  if (error) return <p>{error}</p>;

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setSaving(true);
      const data = { category };
      const json = await editCategoryService(id, {
        token,
        data,
      });

      if (json.status === "error") {
        throw new Error(json.message);
      }
      navigate("/note");
    } catch (error) {
      setError(error.message);
    } finally {
      setSaving(false);
    }
  };
  return (
    <section>
      <h3 className="h1_note">Modificar nombre de categoría</h3>
      <form onSubmit={handleForm} id="form_category">
        <fieldset className="nuevaCategoria">
          <label htmlFor="text">Nuevo nombre</label>
          <input
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </fieldset>
        <button className="nuevaCategoria">Guardar</button>
        {saving ? <p>Guardada</p> : null}
        {error ? <p>{error}</p> : null}
        {loading && <Loading />}
      </form>
    </section>
  );
};
