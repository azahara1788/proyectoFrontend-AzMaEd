/* 
 import { useParams } from "react-router"
import { getAllNotesService } from "../services"
import {Loading} from "../components/Loading"
import {ErrorMessage} from "../components/ErrorMessage"

export default function NewNotePage (){
    const {id} = useParams();
    const {note, error, loading} = useNote(note_id);

        if(loading) return <Loading/>
        if(error) return <ErrorMessage/>
return (
   <section>
    <NewNote/>
   </section>
);
} 



 */
