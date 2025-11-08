import Spline from '@splinetool/react-spline';
import { Rocket, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[520px] overflow-hidden rounded-2xl">
        <Spline scene="https://prod.spline.design/5k9v8v9c7Xw2Zp0m/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-950 via-white/60 dark:via-neutral-950/60 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-36 md:-mt-40">
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                  Laporan Keuangan UMKM modern & Gen Z–friendly
                </h1>
                <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-2xl">
                  Otomatiskan pencatatan transaksi, stok, aset tetap, hingga laporan SAK EMKM.
                  Dashboard realtime, ekspor PDF, dan AI advisor untuk bantu bisnis tumbuh.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href="#get-started" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 px-4 py-2.5 text-white shadow hover:opacity-90">
                    <Rocket size={18} /> Mulai Gratis
                  </a>
                  <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 dark:border-neutral-700 px-4 py-2.5 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                    Jelajahi Fitur
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4">
                  <div className="text-2xl font-bold">Rp 128jt</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">Pendapatan bulan ini</div>
                </div>
                <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4">
                  <div className="text-2xl font-bold">+18%</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">Naik dari bulan lalu</div>
                </div>
                <div className="hidden sm:flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4">
                  <ShieldCheck size={18} className="text-emerald-500" />
                  <span className="text-sm">SAK EMKM ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
