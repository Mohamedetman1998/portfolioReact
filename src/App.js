import { Form } from "./Components/RegisterationForm";
import { ThemeProvider } from "./Switch/ThemeContext";
import { useTheme } from "./Switch/ThemeContext";
import Switch from "./Switch";
import "./App.css";

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Switch />
      <Form />
    </div>
  );
}
function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
export default Root;
