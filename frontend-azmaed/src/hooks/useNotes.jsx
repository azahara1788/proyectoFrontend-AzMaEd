import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAllNotesService } from "../services";

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loadingNotes, setLoadingNotes] = useState(false);
  const [errorNotes, setErrorNotes] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const getNotes = async () => {
      try {
        setLoadingNotes(true);
        const data = await getAllNotesService({ token });

        setNotes(data);
      } catch (error) {
        setErrorNotes("Error en useCategory", error.message);
      } finally {
        setLoadingNotes(false);
      }
    };

    getNotes();
  }, [token]);

  return { notes, errorNotes, loadingNotes };
};

export default useNotes;
