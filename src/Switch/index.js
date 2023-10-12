import React from "react";
import { useTheme } from "./ThemeContext";
import "../App.css";

const Switch = () => {
  // Use the useTheme hook to get access to `theme` and `toggleTheme`
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="switch">
      <input
        onChange={toggleTheme}
        checked={theme === "light"}
        type="checkbox"
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
