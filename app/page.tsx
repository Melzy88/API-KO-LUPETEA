"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f7e7ea]">
      <nav className="w-full bg-[#5A1E2C] text-white px-4 md:px-10 py-4 shadow-xl">
        <div className="w-full flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <img src="/images/hibiscus.png" alt="Hibiscus logo" className="w-14 h-14 md:w-24 md:h-24 object-contain" />
            <span className="text-2xl md:text-5xl font-serif tracking-wide text-[#fff4f5]" style={{ fontFamily: "Georgia, serif" }}>
              API KO LUPETEA
            </span>
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-3xl">
            ☰
          </button>

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

      <section className="min-h-[75vh] px-6 md:px-12 py-14 md:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg md:text-2xl tracking-[0.4em] text-[#5A1E2C] mb-6">WELCOME TO</p>

            <h1 className="text-6xl md:text-8xl text-[#5A1E2C] mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
              API KO LUPETEA
            </h1>

            <p className="text-3xl md:text-4xl italic text-[#7A3243] mb-6" style={{ fontFamily: "cursive" }}>
              Vavaʻu, Tonga
            </p>

            <p className="text-lg md:text-xl text-[#5A1E2C] leading-relaxed max-w-xl mb-10">
              A private whole-house mansion stay with breathtaking ocean views,
              two spacious balconies, private wharf access, five bedrooms,
              gym, pool table, and everything needed for the perfect island escape.
            </p>

            <a href="/gallery" className="bg-[#6B2032] text-white px-8 md:px-10 py-4 md:py-5 rounded-xl text-lg tracking-widest hover:bg-[#4B1422] shadow-xl inline-block">
              VIEW GALLERY
            </a>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-4">
            <img src="/images/APIKOLUPETEA.jpg" alt="API KO LUPETEA Mansion" className="w-full h-[350px] md:h-[520px] object-cover rounded-3xl" />
          </div>
        </div>
      </section>

      <section className="bg-[#fceff1] py-12 md:py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8 text-center px-8">
          <div><div className="text-5xl mb-3">🌊</div><h3 className="font-bold text-[#5A1E2C] tracking-widest">OCEAN VIEW</h3><p className="text-[#5A1E2C] mt-2">Beautiful views of Vavaʻu waters.</p></div>
          <div><div className="text-5xl mb-3">🛏️</div><h3 className="font-bold text-[#5A1E2C] tracking-widest">5 BEDROOMS</h3><p className="text-[#5A1E2C] mt-2">Spacious whole-house accommodation.</p></div>
          <div><div className="text-5xl mb-3">🏡</div><h3 className="font-bold text-[#5A1E2C] tracking-widest">2 BALCONIES</h3><p className="text-[#5A1E2C] mt-2">Upstairs and downstairs areas.</p></div>
          <div><div className="text-5xl mb-3">🏋️</div><h3 className="font-bold text-[#5A1E2C] tracking-widest">GYM & GAMES</h3><p className="text-[#5A1E2C] mt-2">Gym, pool table and relaxation spaces.</p></div>
          <div><div className="text-5xl mb-3">⚓</div><h3 className="font-bold text-[#5A1E2C] tracking-widest">PRIVATE WHARF</h3><p className="text-[#5A1E2C] mt-2">Direct access to the ocean.</p></div>
        </div>
      </section>
    </main>
  );
}