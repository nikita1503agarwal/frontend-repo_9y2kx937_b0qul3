import { LayoutDashboard, ReceiptText, Package, Factory, FileText, FileDown, Percent, Bot } from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Realtime Dashboard',
    desc: 'Pantau pendapatan, beban, laba, dan skor kesehatan bisnis secara langsung.'
  },
  {
    icon: ReceiptText,
    title: 'Double-Entry & Transaksi',
    desc: 'Otomatisasi jurnal akuntansi ketika transaksi dicatat.'
  },
  { icon: Package, title: 'Produk & Stok', desc: 'Kelola produk, stok masuk/keluar, dan notifikasi stok menipis.' },
  { icon: Factory, title: 'Aset Tetap', desc: 'Hitung penyusutan garis lurus dan nilai buku otomatis.' },
  { icon: FileText, title: 'Laporan SAK EMKM', desc: 'Laba Rugi, Neraca, dan CALK siap audit.' },
  { icon: FileDown, title: 'Export PDF', desc: 'Unduh laporan keuangan rapi dalam format PDF.' },
  { icon: Percent, title: 'Kalkulator Pajak', desc: 'Hitung PPh Final 0,5% untuk UMKM sesuai regulasi.' },
  { icon: Bot, title: 'AI Financial Advisor', desc: 'Analisis bisnis & rekomendasi pertumbuhan berbasis data.' },
];

export default function FeatureGrid() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Semua yang Anda Butuhkan</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">Fokus pada pertumbuhan — biarkan otomasi mengurus pembukuan.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 hover:shadow-sm transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-neutral-900 dark:text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
