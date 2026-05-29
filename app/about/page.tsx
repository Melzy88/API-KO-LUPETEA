"use client";

import { useState } from "react";

export default function AboutPage() {
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
        <p className="text-lg md:text-xl tracking-[0.4em] text-[#7A3243] mb-4">ABOUT THE OWNERS</p>

        <h1 className="text-5xl md:text-7xl text-[#5A1E2C] mb-10 md:mb-12" style={{ fontFamily: "Georgia, serif" }}>
          A Family Home in Vavaʻu
        </h1>

        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="bg-[#f7e7ea] rounded-3xl shadow-xl p-4">
              <img src="/images/owners.jpg" alt="Lesieli and Kali Tauaika" className="w-full h-[450px] md:h-[650px] object-contain rounded-3xl" />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl text-[#5A1E2C]" style={{ fontFamily: "Georgia, serif" }}>
                Lesieli & Kali Tauaika
              </h2>

              <div className="h-[2px] w-28 bg-[#7A3243]"></div>

              <p className="text-lg leading-relaxed">
                API KO LUPETEA is a family-owned mansion located in beautiful
                Vavaʻu, Tonga. Created by Lesieli and Kali Tauaika, the home
                was designed as a peaceful retreat where families, groups, and
                visitors can relax and experience the beauty of island life.
              </p>

              <p className="text-lg leading-relaxed">
                The owners take pride in sharing a warm and welcoming
                Tongan-style experience with guests. API KO LUPETEA is more
                than accommodation — it is a home filled with family,
                hospitality, and connection.
              </p>

              <p className="text-lg leading-relaxed">
                With breathtaking ocean views, private wharf access, spacious
                living areas, and relaxing outdoor spaces, the mansion offers
                guests privacy, comfort, and a memorable Vavaʻu escape.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}