import { useParams } from "react-router";

import { NewNote } from "../components/NewNote";
import "./NewNotePage.css";

export const NewNotePage = () => {
  const { id } = useParams();

  return (
    <section>
      <NewNote category_id={id} />
    </section>
  );
};
