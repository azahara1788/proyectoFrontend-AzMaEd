import "../App.css";
import { useThemeContext } from "../context/ThemeContext";
import "./Footer.css";

export const Footer = () => {
  const { theme } = useThemeContext();
  return (
    <footer id={theme} className="azahara">
      © 2023 NotesForMe
    </footer>
  );
};
