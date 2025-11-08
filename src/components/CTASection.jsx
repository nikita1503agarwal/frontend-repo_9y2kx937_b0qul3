import React from 'react';

export default function CTASection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white, transparent 25%), radial-gradient(circle at 80% 0%, white, transparent 25%)' }} />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Mulai kelola keuangan dengan cara yang seru</h3>
            <p className="mt-2 text-white/90 max-w-2xl">Daftar, lengkapi profil bisnis, tambahkan produk, dan input transaksi. Semua otomatis dan sesuai standar.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/auth" className="inline-flex items-center justify-center rounded-full bg-white text-zinc-900 px-5 py-2.5 text-sm font-semibold shadow hover:opacity-90 transition">Daftar di /auth</a>
              <a href="/business-setup" className="inline-flex items-center justify-center rounded-full border border-white/60 px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition">/business-setup</a>
              <a href="/products" className="inline-flex items-center justify-center rounded-full border border-white/60 px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition">/products</a>
              <a href="/transactions/new" className="inline-flex items-center justify-center rounded-full border border-white/60 px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition">/transactions/new</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
