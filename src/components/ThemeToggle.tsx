'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder that matches the server render
    return (
      <div className="relative inline-flex h-8 w-16 rounded-full border border-gray-200 dark:border-gray-600">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 dark:bg-white translate-x-1 mt-0.5 ml-0.5">
          <Sun className="h-3.5 w-3.5 text-white dark:text-gray-700" />
        </div>
      </div>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-16 items-center rounded-full border border-gray-200 dark:border-gray-600 bg-transparent transition-all duration-300 ease-in-out focus:outline-none"
      aria-label="Toggle theme"
    >
      {/* Sliding toggle button */}
      <div
        className={`relative flex h-6 w-6 transform items-center justify-center rounded-full shadow-sm transition-all duration-300 ease-in-out ${
          isDark
            ? 'translate-x-9 bg-white'
            : 'translate-x-1 bg-gray-900 dark:bg-white'
        }`}
      >
        <div className="relative transition-all duration-300 ease-in-out">
          {isDark ? (
            <Moon className="h-3.5 w-3.5 text-gray-700 transition-all duration-300 ease-in-out" />
          ) : (
            <Sun className="h-3.5 w-3.5 text-white dark:text-gray-700 transition-all duration-300 ease-in-out" />
          )}
        </div>
      </div>
    </button>
  );
};
