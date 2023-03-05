import "./EditNotePage.css";
import { useParams } from "react-router";
import useNote from "../hooks/useNote";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { editNoteService } from "../services";

export const EditNotePage = () => {
  const { id } = useParams();
  const { note } = useNote(id);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [place, setPlace] = useState("");
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setTitle(note?.title || "");
    setText(note?.text || "");
    setPlace(note?.place || "");
  }, [note]);
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const data = { title, text, place };

      const json = await editNoteService(id, { token, data });

      if (json.status === "error") {
        throw new Error(json.message);
      }

      navigate(`/note/${id}`);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="div_edit_note">
      <section className="section_edit_note">
        <h2 className="h1_edit_note">Cambiar esta nota</h2>
        <form id="form_edit_note" onSubmit={handleForm}>
          <fieldset className="form_caja_edit">
            <label htmlFor="text">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </fieldset>
          <fieldset className="form_caja_edit_text">
            <label htmlFor="text">Texto</label>
            <textarea
              type="text"
              id="text"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </fieldset>

          <fieldset className="form_caja_edit">
            <label htmlFor="text">Lugar</label>
            <input
              type="text"
              id="place"
              name="place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              required
            />
          </fieldset>

          <button className="edit_note_button">Guardar</button>
        </form>
        {error && <p>{error}</p>}
      </section>
    </div>
  );
};
