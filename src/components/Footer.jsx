export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">© {year} FinGenz. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-sm">
          <a href="/privacy" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Privacy</a>
          <a href="/terms" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Terms</a>
          <a href="/contact" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
