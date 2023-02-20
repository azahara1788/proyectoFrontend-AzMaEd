import { useContext, useState } from "react";
import { saveNoteService } from "../services";
import { AuthContext } from "../context/AuthContext";
import "./NewNote.css";

export const NewNote = () => {
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [image, setImage] = useState(null);

  const { token } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      const data = new FormData(e.target);
      const note = await saveNoteService({ data, token });
      console.log(note);

      e.target.reset();
      setImage(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setSaving(false);
    }
  };
  return (
    <section className="section_note">
      <h1 className="h1_note">Añade una nueva nota</h1>
      <form /* onSubmit={handleForm} */ id="form_note">
        <fieldset className="form_caja_note">
          <label htmlFor="text">Título</label>
          <input type="text" id="title" name="title" required />
        </fieldset>
        <fieldset className="form_caja_note">
          <label htmlFor="text">Nota</label>
          <input type="text" id="text" name="text" required />
          <textarea
            name="Nota"
            className="form-control"
            placeholder="contenido de la nota"
          ></textarea>
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
  );
};
