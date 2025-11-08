import React from 'react';
import { Rocket, Settings, User } from 'lucide-react';

function ThemeToggle() {
  const [mode, setMode] = React.useState(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  React.useEffect(() => {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', mode);
  }, [mode]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-700 px-3 py-1.5 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
    >
      <span className="h-2 w-2 rounded-full bg-amber-500" />
      {mode === 'dark' ? 'Dark' : 'Light'}
    </button>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 flex items-center justify-center shadow-lg">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">FinSync</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700 dark:text-zinc-300">
          <a href="/auth" className="hover:text-zinc-900 dark:hover:text-white">Auth</a>
          <a href="/business-setup" className="hover:text-zinc-900 dark:hover:text-white">Business</a>
          <a href="/products" className="hover:text-zinc-900 dark:hover:text-white">Products</a>
          <a href="/transactions/new" className="hover:text-zinc-900 dark:hover:text-white">Transactions</a>
          <a href="/reports" className="hover:text-zinc-900 dark:hover:text-white">Reports</a>
          <a href="/ai-advisor" className="hover:text-zinc-900 dark:hover:text-white">AI Advisor</a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="/auth" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-3 py-1.5 text-sm hover:opacity-90 transition">
            <User className="h-4 w-4" />
            Login
          </a>
          <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-700 px-3 py-1.5 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
            <Settings className="h-4 w-4" />
            Settings
          </button>
        </div>
      </div>
    </header>
  );
}
