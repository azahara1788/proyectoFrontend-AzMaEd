import "../App.css";
import "./Footer.css";
import { useThemeContext } from "../context/ThemeContext";

export const Footer = () => {
  const { theme } = useThemeContext();
  return (
    <footer id={theme} className="azahara">
      © 2023 NotesForMe
    </footer>
  );
};
