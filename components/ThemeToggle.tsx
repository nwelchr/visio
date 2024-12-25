"use client";

import React, { useEffect, useState } from "react";
import { Classic } from "@theme-toggles/react";
import "@theme-toggles/react/css/Classic.css";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      setIsDarkMode(false);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  return (
    <Classic
      toggled={isDarkMode}
      toggle={toggleDarkMode}
      duration={750}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      className="text-slate-700 text-3xl hover:text-slate-800 dark:text-slate-200 dark:hover:text-slate-300"
    />
  );
};

export default ThemeToggle;
