'use client';

import { useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark';

const THEME_STORAGE_KEY = 'vx6-theme';

function resolveTheme(): ThemeMode {
  const attrTheme = document.documentElement.getAttribute('data-theme');

  if (attrTheme === 'dark' || attrTheme === 'light') {
    return attrTheme;
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getCurrentTheme(): ThemeMode {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

export default function LandingThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    setMounted(true);
    const initialTheme = resolveTheme();
    document.documentElement.setAttribute('data-theme', initialTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, initialTheme);
    setTheme(initialTheme);
  }, []);

  const handleToggle = () => {
    const nextTheme: ThemeMode = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      className="theme-toggle-btn"
      onClick={handleToggle}
      aria-label={!mounted ? 'Toggle theme' : (theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode')}
      title={!mounted ? 'Toggle theme' : (theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode')}
    >
      {!mounted ? (
        <span className="theme-toggle-icon">...</span>
      ) : theme === 'dark' ? (
        <>
          <svg
            className="theme-toggle-icon"
            fill="none"
            height="18"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" x2="12" y1="1" y2="3" />
            <line x1="12" x2="12" y1="21" y2="23" />
            <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
            <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
            <line x1="1" x2="3" y1="12" y2="12" />
            <line x1="21" x2="23" y1="12" y2="12" />
            <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
            <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
          </svg>
          <span className="theme-toggle-label">Light mode</span>
        </>
      ) : (
        <>
          <svg
            className="theme-toggle-icon"
            fill="none"
            height="18"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          <span className="theme-toggle-label">Dark mode</span>
        </>
      )}
    </button>
  );
}
