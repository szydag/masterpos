import { useEffect, useState } from "react";
import darkTheme from "./variants/dark";
import lightTheme from "./variants/light";

export function useTheme() {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }, []);

  return theme;
} 