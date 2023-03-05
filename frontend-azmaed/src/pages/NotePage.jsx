import "./NotePage.css";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { deleteNoteService, editPublicNoteService } from "../services";
import useNote from "../hooks/useNote";
import "../App.css";
import "../App.css";

export const NotePage = () => {
  const { user, token } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const { note, error, setError } = useNote(id);
  const [privated, setPrivated] = useState({ private: Boolean(note.private) });

  console.log(note);
  console.log("private1", privated);
  /* Hacer publica una nota */
  const publicNote = async (id) => {
    try {
      if (note.private === true) {
        setPrivated("private", false);
      } else {
        setPrivated("private", true);
      }
      await editPublicNoteService(id, { privated, token });
      setPrivated();
      /* navigate("/note"); */
    } catch (error) {
      setError(error.message);
    }
  };

  /* Eliminar una nota */
  const deleteNote = async (id) => {
    try {
      await deleteNoteService(id, { token });

      navigate("/note");
    } catch (error) {
      setError(error.message);
    }
  };

  return note ? (
    <article>
      <h3>{note.title}</h3>
      <p className="text">{note.text}</p>
      {note.nameFile ? (
        <figure className="noteimage">
          <img
            src={`${process.env.REACT_APP_BACKEND}/${note.nameFile}`}
            alt={note.title}
          />
        </figure>
      ) : null}
      <section>
        <p>Categoría: {note.category}</p>
        {note.place ? <p>Lugar: {note.place}</p> : null}
        {note.private ? <p>Nota pública</p> : <p>Nota privada</p>}
      </section>

      <section>
        <p>Categoría: {note.category}</p>
        {note.place ? <p>Lugar: {note.place}</p> : null}
        {note.private ? <p>Nota pública</p> : <p>Nota privada</p>}
      </section>

      {user && note ? (
        <section className="button">
          <button
            name="edit"
            onClick={() => {
              navigate(`/note/edit/${id}`);
            }}
          >
            🖋
          </button>
          <button
            name="delete"
            onClick={() => {
              if (window.confirm("¿Quieres borrar la nota?")) deleteNote(id);
            }}
          >
            🗑
          </button>
          <button
            className="publicNote"
            value={privated}
            /* onChange={(e)=>setPrivated(e.target.value)} */
            onClick={() => {
              if (
                window.confirm(
                  "¿Seguro que quieres cambiar la privacidad de la nota?"
                )
              )
                publicNote(id);
            }}
          >
            🌍
          </button>

          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  ) : (
    <p>No hay nota que mostrar</p>
  );
};
