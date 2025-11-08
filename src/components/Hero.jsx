import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:pt-16 md:pb-24 grid md:grid-cols-2 items-center gap-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1 text-xs text-zinc-600 dark:text-zinc-300">
            Gen Z Friendly • Dark/Light Mode • Real-time Finance
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Laporan Keuangan Modern untuk UMKM
          </h1>
          <p className="mt-4 text-base md:text-lg text-zinc-700 dark:text-zinc-300">
            Otomatisasi pembukuan double-entry, stok real-time, penyusutan aset, dan laporan SAK EMKM. Semua dalam satu dashboard.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/auth" className="inline-flex items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-5 py-2.5 text-sm font-semibold shadow hover:opacity-90 transition">Mulai Sekarang</a>
            <a href="/reports" className="inline-flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 px-5 py-2.5 text-sm text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">Lihat Laporan</a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6">
            <div>
              <dt className="text-xs uppercase tracking-wide text-zinc-500">Pendapatan</dt>
              <dd className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Real-time</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-zinc-500">Health Score</dt>
              <dd className="text-2xl font-bold text-emerald-500">A+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-zinc-500">Export</dt>
              <dd className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">PDF</dd>
            </div>
          </dl>
        </div>
        <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-black">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-black/40" />
        </div>
      </div>
    </section>
  );
}
