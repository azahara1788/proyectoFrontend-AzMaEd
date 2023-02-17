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

