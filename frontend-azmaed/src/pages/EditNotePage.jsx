import { useParams } from "react-router";
import useNote from "../hooks/useNote";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { editNoteService } from "../services";
import "./EditNotePage.css";

export const EditNotePage = () => {
  const { id } = useParams();
  const { note } = useNote(id);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [place, setPlace] = useState("");
  /* const [nameFile, setNameFile]= useState(""); */
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setTitle(note?.title || "");
    setText(note?.text || "");
    setPlace(note.place || "");
    /*  setNameFile(note?.nameFile || ""); */
  }, [note]);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const data = { title, text, place /* , nameFile */ };

      await editNoteService({ id, data, token });
      toast.success("¡Se ha cambiado correctamente tu nota!");
      navigate(`/note/${id}`);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="div_edit_note">
      <section className="section_edit_note">
        <h1 className="h1_edit_note">Cambiar esta nota</h1>
        <form id="form_edit_note" onSubmit={handleSubmit}>
          <fieldset className="form_caja_edit">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </fieldset>
          <fieldset className="form_caja_edit_text">
            <label htmlFor="text">Texto</label>
            <input
              type="text"
              id="text"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </fieldset>

          <fieldset className="form_caja_edit">
            <label htmlFor="place">Lugar</label>
            <input
              type="place"
              id="place"
              name="place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </fieldset>

          {/* <fieldset className="form_caja_edit">
            <label htmlFor="image"></label>
            <input
             type="image" 
             alt= "imagen"
             id="image"
             name="image"
              value={nameFile} 
              accept="image/*"
             onChange={(e) => setNameFile(e.target.files[0])}
            /> 
              {note.nameFile ? (
        <figure className="noteimage">
          <img
            src={`${process.env.REACT_APP_BACKEND}/${note.nameFile}`}
            alt={note.title}
          /> */}
          {/*  </figure>
      ) : null} */}
          {/*  </fieldset> */}
          <button className="edit_note_button">Guardar</button>
        </form>
        {error && <p>{error}</p>}
      </section>
    </div>
  );
};
