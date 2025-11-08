import Spline from '@splinetool/react-spline';
import { Rocket, ShieldCheck, BarChart3 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/il5G6oQkwoD0eJ9M/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white dark:from-neutral-950/70 dark:via-neutral-950/60 dark:to-neutral-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs border-neutral-200 bg-white/70 backdrop-blur dark:bg-neutral-900/60 dark:border-neutral-800">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              <span className="text-neutral-600 dark:text-neutral-300">SAK EMKM Ready • Tax & PDF export</span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Smart Finance for Gen Z Entrepreneurs
            </h1>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-lg">
              Catat transaksi, kelola stok, hitung penyusutan, dan hasilkan laporan SAK EMKM dalam hitungan detik. Dilengkapi AI advisor untuk insight pertumbuhan.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/auth" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                <Rocket className="h-4 w-4" /> Mulai Gratis
              </a>
              <a href="/reports" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <BarChart3 className="h-4 w-4" /> Lihat Laporan
              </a>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <dt className="text-sm text-neutral-600 dark:text-neutral-400">Pendapatan Terkini</dt>
                <dd className="text-2xl font-semibold text-neutral-900 dark:text-white">Rp 12,4 jt</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-600 dark:text-neutral-400">Laba Bulan Ini</dt>
                <dd className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400">+18%</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-600 dark:text-neutral-400">Skor Kesehatan</dt>
                <dd className="text-2xl font-semibold text-neutral-900 dark:text-white">A-</dd>
              </div>
            </dl>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
