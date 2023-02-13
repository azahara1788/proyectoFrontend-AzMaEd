import { useContext, useState } from "react";
import { saveNoteService } from "../services";
import { AuthContext } from "../context/AuthContext";

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
    <form onSubmit={handleForm}>
      <h1>Add New Note</h1>

      <fieldset>
        <label htmlFor="text">Title</label>
        <input type="text" id="title" name="title" required />
      </fieldset>
      <fieldset>
        <label htmlFor="text">Note</label>
        <input type="text" id="text" name="text" required />
      </fieldset>
      <fieldset>
        <label htmlFor="text">Place (optional)</label>
        <input type="text" id="place" name="place" />
      </fieldset>
      <fieldset>
        <label htmlFor="image">Image (optional)</label>
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
      <button>Save Note</button>
      {saving ? <p>Saving Note</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};
