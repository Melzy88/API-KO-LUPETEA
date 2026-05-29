"use client";

import { useState } from "react";

export default function MansionPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f7e7ea] text-[#4B1422]">
      <nav className="w-full bg-[#5A1E2C] text-white px-4 md:px-10 py-4 shadow-xl">
        <div className="w-full flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <img src="/images/hibiscus.png" alt="Hibiscus logo" className="w-14 h-14 md:w-24 md:h-24 object-contain" />
            <span className="text-2xl md:text-5xl font-serif tracking-wide text-[#fff4f5]" style={{ fontFamily: "Georgia, serif" }}>
              API KO LUPETEA
            </span>
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-3xl">☰</button>

          <div className="hidden md:flex items-center gap-10 text-xl">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/mansion">The Mansion</a>
            <a href="/gallery">Gallery</a>
            <a href="/booking">Book Now</a>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 grid gap-3 text-lg text-center">
            <a href="/" className="bg-[#7A3243] rounded-lg py-2">Home</a>
            <a href="/about" className="bg-[#7A3243] rounded-lg py-2">About</a>
            <a href="/mansion" className="bg-[#7A3243] rounded-lg py-2">The Mansion</a>
            <a href="/gallery" className="bg-[#7A3243] rounded-lg py-2">Gallery</a>
            <a href="/booking" className="bg-[#7A3243] rounded-lg py-2">Book Now</a>
          </div>
        )}
      </nav>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <p className="text-lg md:text-xl tracking-[0.4em] text-[#7A3243] mb-4">THE MANSION</p>

        <h1 className="text-5xl md:text-7xl text-[#5A1E2C] mb-8" style={{ fontFamily: "Georgia, serif" }}>
          Whole-House Oceanfront Escape
        </h1>

        <p className="text-lg md:text-xl leading-relaxed max-w-4xl mb-12">
          API KO LUPETEA is a spacious oceanfront mansion in Vavaʻu,
          thoughtfully designed for families, groups, and guests seeking
          comfort, privacy, entertainment, and unforgettable island views.
        </p>

        <div className="bg-white rounded-3xl shadow-2xl p-4 mb-14">
          <img src="/images/mansion.jpg" alt="API KO LUPETEA Mansion" className="w-full h-[350px] md:h-[600px] object-cover rounded-3xl" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h2 className="text-4xl text-[#5A1E2C] mb-6" style={{ fontFamily: "Georgia, serif" }}>Upstairs Living</h2>
            <div className="grid gap-4 text-lg">
              <p>🛏️ 3 bedrooms total</p>
              <p>👑 Master bedroom with private full bathroom</p>
              <p>🍽️ Kitchen</p>
              <p>🛋️ Lounge area</p>
              <p>🧺 Laundry room</p>
              <p>🌺 Fully wrapped upstairs balcony with panoramic ocean views and outdoor relaxation space</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h2 className="text-4xl text-[#5A1E2C] mb-6" style={{ fontFamily: "Georgia, serif" }}>Downstairs Living</h2>
            <div className="grid gap-4 text-lg">
              <p>🛏️ 2 bedrooms</p>
              <p>🚿 Bathroom</p>
              <p>🍽️ Kitchen</p>
              <p>🛋️ Lounge area</p>
              <p>🧺 Laundry room</p>
              <p>🌊 Large entertaining balcony</p>
              <p>🏋️ Private gym</p>
              <p>🎱 Pool table</p>
              <p>🧺 Picnic table</p>
              <p>⚓ Direct private wharf access from the balcony</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}