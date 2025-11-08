import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">© 2025 FinSync. All rights reserved.</p>
        <div className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-4">
          <a href="/reports" className="hover:text-zinc-900 dark:hover:text-zinc-200">Laporan</a>
          <a href="/ai-advisor" className="hover:text-zinc-900 dark:hover:text-zinc-200">AI Advisor</a>
          <a href="/auth" className="hover:text-zinc-900 dark:hover:text-zinc-200">Masuk</a>
        </div>
      </div>
    </footer>
  );
}
