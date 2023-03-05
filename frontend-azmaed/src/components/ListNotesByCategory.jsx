import "./List.css";
import { Link } from "react-router-dom";

export const ListNotesByCategory = ({ notes, id, category }) => {
  const noteCategory = notes
    .map((note) => note)
    .filter((note) => note.category_id === parseInt(id));

  return noteCategory.length ? (
    <>
      <h2>Mis notas de {category}</h2>
      <ul className="list-categories">
        {noteCategory.map((note) => {
          return (
            <li key={note.id} category={note.category_id}>
              <Link to={`/note/${note.id}`}> {note.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  ) : (
    <p>No hay notas...</p>
  );
};
