import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getSingleNoteService } from "../services";

const useNote = (id) => {
  const [note, setNote] = useState([]);
  const [loadingNote, setLoadingNote] = useState(false);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const getNote = async () => {
      try {
        setLoadingNote(true);
        const data = await getSingleNoteService({ id, token });

        setNote(data);
      } catch (error) {
        setError("Esta no nota no existe", error.message);
      } finally {
        setLoadingNote(false);
      }
    };

    getNote();
  }, [token, id]);

  return { note, setNote, error, setError, loadingNote };
};

export default useNote;
