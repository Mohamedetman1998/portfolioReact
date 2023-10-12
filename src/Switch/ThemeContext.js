import { createContext, useContext, useState } from "react";
import "../App.css";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  // Give this component a `theme` state
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Change `useTheme` so that it returns `useContext(ThemeContext);`
// instead of the `{theme: "light"}` object
export const useTheme = () => useContext(ThemeContext);
