import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check for saved theme preference or use device preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      
      if (savedTheme) {
        return savedTheme;
      }
      
      // Check system preference
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    
    return "light";
  });

  // Update localStorage when theme changes and apply theme to document
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("theme", theme);
      
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}
