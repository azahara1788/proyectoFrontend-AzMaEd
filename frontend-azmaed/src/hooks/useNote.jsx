import { useEffect, useState } from "react";
import { getSingleNoteService } from "../services";

export const useNote = (id) => {
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNote = async () => {
      try {
        setLoading(true);
        const data = await getSingleNoteService(id);

        setNote(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadNote();
  }, [id]);

  return { note, error, loading };
};
