
import { useParams } from "react-router"
/* import {Loading} from "../components/Loading"
import {ErrorMessage} from "../components/ErrorMessage"
import useNote from "../hooks/useNote"; */
import { EditNote } from "../components/EditNote";


export const EditNotePage = ()=>{
    const {id} = useParams();
    /* const {error, loading} = useNote();

        if(loading) return <Loading/>
        if(error) return <ErrorMessage/> */
return (
   <section>
    <EditNote note_id = {id}/>
   </section>
);
} 



 
