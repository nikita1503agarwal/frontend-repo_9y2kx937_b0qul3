import { BarChart3, Boxes, Receipt, ClipboardList, FileText, Download, Calculator, Bot } from 'lucide-react';

const features = [
  { icon: BarChart3, title: 'Dashboard Realtime', desc: 'Pantau pendapatan, beban, laba, dan skor kesehatan bisnis.' },
  { icon: Receipt, title: 'Transaksi Otomatis', desc: 'Jurnal double-entry dan pembaruan stok berjalan otomatis.' },
  { icon: Boxes, title: 'Produk & Stok', desc: 'Kelola SKU, kategori, dan peringatan stok menipis.' },
  { icon: ClipboardList, title: 'Aset Tetap', desc: 'Hitung penyusutan garis lurus dan nilai buku.' },
  { icon: FileText, title: 'Laporan SAK EMKM', desc: 'Laba Rugi, Neraca, dan CALK sesuai standar.' },
  { icon: Download, title: 'Ekspor PDF', desc: 'Unduh laporan siap kirim ke stakeholder.' },
  { icon: Calculator, title: 'Kalkulator Pajak', desc: 'PPh Final 0.5% dihitung instan dari omzet.' },
  { icon: Bot, title: 'AI Advisor', desc: 'Rekomendasi strategi pertumbuhan berbasis data.' },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Semua yang UMKM butuhkan</h2>
      <p className="mt-2 text-neutral-700 dark:text-neutral-300 max-w-2xl">Sederhanakan akuntansi tanpa mengorbankan ketelitian. Dirancang untuk pemilik bisnis yang ingin fokus pada pertumbuhan.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 hover:shadow-sm transition-shadow">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 text-white">
              <Icon size={18} />
            </div>
            <h3 className="mt-3 font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
