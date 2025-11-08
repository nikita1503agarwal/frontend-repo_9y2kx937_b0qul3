import React from 'react';
import { ShieldCheck, BarChart3, Layers, Wallet, FileText, Calculator, Bot, Package } from 'lucide-react';

const features = [
  { icon: BarChart3, title: 'Dashboard Real-Time', desc: 'Pendapatan, beban, laba, dan health score secara langsung.' },
  { icon: Layers, title: 'Double-entry Otomatis', desc: 'Jurnal otomatis dari transaksi, akurat sesuai standar.' },
  { icon: Package, title: 'Produk & Stok', desc: 'Manajemen stok lengkap dengan alert stok menipis.' },
  { icon: ShieldCheck, title: 'Aset Tetap', desc: 'Penyusutan metode garis lurus otomatis setiap periode.' },
  { icon: FileText, title: 'Laporan SAK EMKM', desc: 'Laba Rugi, Neraca, dan CALK siap export PDF.' },
  { icon: Calculator, title: 'Kalkulator Pajak', desc: 'Hitung PPh Final 0.5% otomatis dari omzet.' },
  { icon: Bot, title: 'AI Financial Advisor', desc: 'Analisis dan rekomendasi untuk growth bisnis Anda.' },
  { icon: Wallet, title: 'Export PDF', desc: 'Seluruh laporan bisa diunduh dalam format PDF.' },
];

export default function FeatureGrid() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">Semua yang Anda Butuhkan</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">Dirancang untuk UMKM modern, simple, cepat, dan aman.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white/70 dark:bg-zinc-900/50 backdrop-blur hover:shadow-lg transition">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 flex items-center justify-center shadow">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-3 font-semibold text-zinc-900 dark:text-zinc-50">{f.title}</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
