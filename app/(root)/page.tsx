"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
    <>
      <div className="flex flex-col h-screen">
        <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-slate-100 dark:bg-gray-800 dark:border-b-slate-900">
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              width={112}
              height={112}
              className="w-28 object-contain"
            />
          </Link>
          <div className="flex space-x-4">
            <Link
              href="/create-post"
              className="font-medium bg-slate-400 text-white px-4 py-2 rounded-lg dark:bg-slate-700 hover:opacity-80"
            >
              Create
            </Link>
            <button
              onClick={toggleDarkMode}
              className="text-3xl drop-shadow-lg hover:opacity-80"
            >
              {isDarkMode ? "🌝" : "🌚"}
            </button>
          </div>
        </header>
        <main className="sm:p-8 px-4 py-8 w-full bg-slate-50 dark:bg-slate-900 flex-1 dark:text-white">
          Content goes here.
        </main>
      </div>
    </>
  );
}
