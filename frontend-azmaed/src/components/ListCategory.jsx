import { Link } from "react-router-dom";
import "./List.css";

export const ListCategory = ({ categories }) => {
  return categories.length ? (
    <ul className="list-categories">
      {categories.map((cat) => {
        return (
          <li key={cat.id}>
            <Link to={`/notes/category/${cat.id}`}> {cat.category}</Link>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No hay categorías...</p>
  );
};
