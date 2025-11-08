import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 bg-gradient-to-tr from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400">
                <Sparkles className="h-4 w-4" /> Mulai dalam 3 langkah
              </div>
              <h3 className="mt-2 text-2xl font-bold text-neutral-900 dark:text-white">Daftar, input bisnis, dan catat transaksi pertamamu</h3>
              <p className="mt-1 text-neutral-600 dark:text-neutral-300">Kembangkan bisnis dengan insight keuangan yang akurat.</p>
            </div>
            <div className="flex gap-3">
              <a href="/auth" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                Daftar Gratis <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/transactions/new" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                Catat Transaksi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
