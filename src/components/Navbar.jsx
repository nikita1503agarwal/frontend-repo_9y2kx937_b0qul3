import { useEffect, useState } from 'react';
import { Sun, Moon, User, Settings } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500" />
          <span className="font-semibold text-neutral-900 dark:text-neutral-100">FinGenz</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/auth" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">Auth</a>
          <a href="/business-setup" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">Business</a>
          <a href="/products" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">Products</a>
          <a href="/transactions/new" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">Transactions</a>
          <a href="/reports" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">Reports</a>
          <a href="/ai-advisor" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">AI Advisor</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-yellow-400" />
            ) : (
              <Moon className="h-4 w-4 text-neutral-700" />
            )}
          </button>
          <a
            href="/auth"
            className="hidden sm:inline-flex items-center gap-2 h-9 rounded-md px-3 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200"
          >
            <User className="h-4 w-4" /> Login
          </a>
          <a
            href="/settings"
            className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Settings"
          >
            <Settings className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
