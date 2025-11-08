import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, User, Settings } from 'lucide-react';

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Initialize from localStorage or system preference
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored ? stored === 'dark' : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-700 px-3 py-1.5 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
      aria-label="Toggle theme"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">{dark ? 'Light' : 'Dark'}</span>
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600" />
            <span className="text-lg font-semibold tracking-tight">FinFlow UMKM</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#features" className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">Fitur</a>
            <a href="#pricing" className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">Harga</a>
            <a href="#faq" className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">FAQ</a>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">
              <User size={18} />
            </button>
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">
              <Settings size={18} />
            </button>
          </div>

          <button className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-700" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-3 border-t border-neutral-200 dark:border-neutral-800 pt-4">
              <a href="#features" className="py-2 text-neutral-700 dark:text-neutral-200">Fitur</a>
              <a href="#pricing" className="py-2 text-neutral-700 dark:text-neutral-200">Harga</a>
              <a href="#faq" className="py-2 text-neutral-700 dark:text-neutral-200">FAQ</a>
              <div className="flex items-center gap-3 pt-2">
                <ThemeToggle />
                <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                  <User size={18} />
                </button>
                <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                  <Settings size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
