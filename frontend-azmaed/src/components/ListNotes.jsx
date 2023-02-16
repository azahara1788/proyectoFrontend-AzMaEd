import { Link } from "react-router-dom";
import "./List.css";

export const ListNotes = ({ notes }) => {
  return notes.length ? (
    <ul className="list-notes">
      {notes.map((note) => {
        return (
          <li key={note.id}>
            <Link to={`/note/${note.id}`}> {note.title}</Link>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No hay notas...</p>
  );
};
