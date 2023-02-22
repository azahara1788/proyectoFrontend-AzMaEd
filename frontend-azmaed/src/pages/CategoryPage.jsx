<<<<<<< HEAD
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ListNotesByCategory } from "../components/ListNotesByCategory";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./CategoryPage.css";
/* import "../App.css"; */

import useNotes from "../hooks/useNotes";

export const CategoryPage = () => {
  const { user } = useContext(AuthContext);
  const { notes, errorNotes, loadingNotes } = useNotes();
  const { id } = useParams();

  if (!user || loadingNotes) return <p>Cargando...</p>;

  if (errorNotes) return <p>Error</p>;

  return (
    <section className="categoryPage">
      <ListNotesByCategory notes={notes} id={id} />

      <section className="linkAnadirNota">
        <Link to={`/`}> Añadir nota </Link>
      </section>
    </section>
  );
};
=======
import { useParams } from "react-router"
import { getAllNotesService } from "../services"  
import {Loading} from "../components/Loading"
import {ErrorMessage} from "../components/ErrorMessage"

export default function CategoryPage (){
const {category_id} = useParams();
 const {notes, error, loading} = useNotes(category_id); 
        
        if(loading) return <Loading/>
        if(error) return <ErrorMessage/>
return (
   <section>
    <h2>titulo de categoria</h2>
    <ListNotes/>
   </section>
)
}  

>>>>>>> fd9328ba9b63052f5a147806419c7b0e009e3a9e
