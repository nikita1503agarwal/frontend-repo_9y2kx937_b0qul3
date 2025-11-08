import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="get-started" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-neutral-900 dark:to-neutral-900">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(650px_circle_at_0%_0%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(650px_circle_at_100%_100%,rgba(139,92,246,0.15),transparent_60%)]" />
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">Mulai gratis, siap dalam 5 menit</h3>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300 max-w-2xl">Buat akun, isi profil bisnis, dan catat transaksi pertamamu. Kamu bisa ekspor laporan kapan saja.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/auth" className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2.5 hover:opacity-90">
              <Sparkles size={18} /> Daftar Sekarang
            </a>
            <a href="/transactions/new" className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 dark:border-neutral-700 px-4 py-2.5 hover:bg-neutral-100 dark:hover:bg-neutral-800">
              Catat Transaksi <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
