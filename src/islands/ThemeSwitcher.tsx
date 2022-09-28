import { useEffect, useState } from 'react';
import { CgMoon, CgSun } from 'react-icons/cg';

export default function ThemeSwitcher() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      aria-label="Toggle Theme Switcher"
      type="button"
      className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 dark:text-gray-50 hover:bg-gray-50 hover:dark:bg-gray-800"
      onClick={handleClick}
    >
      {isMounted && (
        <>
          {theme === 'dark' ? (
            <CgSun className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <CgMoon className="block h-6 w-6" aria-hidden="true" />
          )}
        </>
      )}
    </button>
  );
}
