import { useThemeContext } from "../context/ThemeContext";
import "./Theme.css";
import ReactSwitch from "react-switch";

export const Theme = () => {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <div className="switch">
      <label className="label">
        {theme === "light" ? "Modo Día" : "Modo Noche"}
      </label>
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
    </div>
  );
};
