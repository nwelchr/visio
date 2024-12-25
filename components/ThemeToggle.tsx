"use client";

import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";

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

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="opacity-80 hover:opacity-100"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <img src="/assets/dark.svg" className="size-10 invert" />
      ) : (
        <img src="/assets/light.svg" className="size-10" />
      )}
    </button>
  );

  return (
    <button
      onClick={toggleDarkMode}
      className="text-slate-700 hover:text-slate-800 dark:text-slate-200 dark:hover:text-slate-300"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <MoonIcon className="size-8" strokeWidth={1.5} />
      ) : (
        <SunIcon className="size-8" strokeWidth={1.5} />
      )}
    </button>
  );
};

export default ThemeToggle;
