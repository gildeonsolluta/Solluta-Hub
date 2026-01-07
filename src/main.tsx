import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Initialize theme based on system preference or stored preference
const initializeTheme = () => {
  const stored = localStorage.getItem("theme");
  const root = document.documentElement;
  
  if (stored === "dark") {
    root.classList.add("dark");
  } else if (stored === "light") {
    root.classList.remove("dark");
  } else {
    // System preference
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.classList.toggle("dark", systemDark);
  }
};

initializeTheme();

createRoot(document.getElementById("root")!).render(<App />);
