import "./NewNote.css";
import { useContext, useState } from "react";
import { addImageService, saveNoteService } from "../services";
import { AuthContext } from "../context/AuthContext";
import { Loading } from "./Loading";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const NewNote = (id) => {
  const [error] = useState("");
  const [saving, setSaving] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      setLoading(true);
      const data = new FormData(e.target);

      const note = await saveNoteService({ data, token });

      if (image) {
        const imageData = new FormData();
        imageData.set("image", image);
        await addImageService({
          token,
          image: imageData,
          id: note.id,
        });
      }
      console.log(data, note);

      toast.success("¡Has guardado tu nota correctamente!");
      navigate(`/note/${note.id}`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
      setSaving(false);
    }
  };

  return (
    <>
      <div className="div_newNote">
        <div className="div_newNote_scroll">
          <section className="section_note">
            <h1 className="h1_note">Añade una nueva nota</h1>
            <form onSubmit={handleForm} id="form_note">
              <fieldset className="form_caja_note">
                <label htmlFor="text">Título</label>
                <input type="text" id="title" name="title" required />
              </fieldset>

              <fieldset className="form_caja_note">
                <label htmlFor="text">Nota</label>
                <textarea
                  name="text"
                  className="form-control"
                  placeholder="contenido de la nota"
                ></textarea>
              </fieldset>

              <fieldset className="form_caja_note">
                <legend>Categoría</legend>
                <label htmlFor="text">
                  <input
                    type="number"
                    id="category_id"
                    name="category_id"
                    value={id.category_id}
                    readOnly
                  />
                </label>
              </fieldset>

              <fieldset className="form_caja_note">
                <label htmlFor="text">Lugar </label>
                <input type="text" id="place" name="place" />
              </fieldset>

              <fieldset className="form_caja_note">
                <label htmlFor="image">Imagen (opcional)</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                {image ? (
                  <figure>
                    <img
                      src={URL.createObjectURL(image)}
                      style={{ width: "100px" }}
                      alt="Preview"
                    />
                  </figure>
                ) : null}
              </fieldset>
              <button className="note_button">Guardar Nota</button>
              {saving ? <p>Saving Note</p> : null}

              {loading && <Loading />}
            </form>
          </section>
        </div>
      </div>
      <section className="section_note">
        <h1 className="h1_note">Añade una nueva nota</h1>
        <form onSubmit={handleForm} id="form_note">
          <fieldset className="form_caja_note">
            <label htmlFor="text">Título</label>
            <input type="text" id="title" name="title" required />
          </fieldset>

          <fieldset className="form_caja_note">
            <label htmlFor="text">Nota</label>
            <textarea
              name="text"
              id="text"
              className="form-control"
              placeholder="contenido de la nota"
            ></textarea>
          </fieldset>

          <fieldset className="form_caja_note">
            <legend>Categoría</legend>
            <label htmlFor="text">
              <input
                type="number"
                id="category_id"
                name="category_id"
                value={id.category_id}
                readOnly
              />
            </label>
          </fieldset>

          <fieldset className="form_caja_note">
            <label htmlFor="text">Lugar (opcional)</label>
            <input type="text" id="place" name="place" />
          </fieldset>

          <fieldset className="form_caja_note">
            <label htmlFor="image">Imagen (opcional)</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
            {image ? (
              <figure>
                <img
                  src={URL.createObjectURL(image)}
                  style={{ width: "100px" }}
                  alt="Preview"
                />
              </figure>
            ) : null}
          </fieldset>

          <button className="note_button">Guardar Nota</button>
          {saving ? <p>Saving Note</p> : null}
          {error ? <p>{error}</p> : null}
        </form>
      </section>
    </>
  );
};
