export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600" />
          <span className="text-sm text-neutral-600 dark:text-neutral-400">© {year} FinFlow UMKM</span>
        </div>
        <nav className="flex items-center gap-5 text-sm text-neutral-600 dark:text-neutral-400">
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Kebijakan Privasi</a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Ketentuan Layanan</a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Kontak</a>
        </nav>
      </div>
    </footer>
  );
}
