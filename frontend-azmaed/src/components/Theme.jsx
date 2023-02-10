import { useThemeContext } from "../context/ThemeContext";
import "./Theme.css";

export const Theme = () => {
  const { toggleTheme, theme } = useThemeContext();
  return (
    <button id="button-theme" onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "🌞"}
    </button>
  );
};
