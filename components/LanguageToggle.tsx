"use client";

import React, { useEffect, useState } from "react";

const LanguageToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      // Default to light mode
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
    <button
      onClick={toggleDarkMode}
      className="text-3xl drop-shadow-lg hover:opacity-80"
    >
      {isDarkMode ? "🌝" : "🌚"}
    </button>
  );
};

export default LanguageToggle;
