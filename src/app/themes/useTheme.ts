import { useEffect, useState } from "react";
import { themes } from "./index";

export function useTheme() {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  }, []);

  return theme;
} 