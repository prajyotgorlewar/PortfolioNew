import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import useTheme from "@/hooks/useTheme";
import { useEffect } from "react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  // Add debug logging
  useEffect(() => {
    console.log("Current theme:", theme);
    console.log("Document class:", document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, [theme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={`focus:outline-none ${className}`}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Moon className="h-5 w-5 text-gray-300" />
      ) : (
        <Sun className="h-5 w-5 text-amber-500" />
      )}
    </Button>
  );
}
