"use client";

import { useState } from "react";

const photos = [
  "/images/family1.jpeg",
  "/images/family2.jpeg",
  "/images/family3.jpeg",
  "/images/family4.jpeg",
  "/images/family7.jpeg",
  "/images/family8.jpeg",
  "/images/family9.jpeg",
  "/images/family10.jpeg",
  "/images/family11.jpeg",
  "/images/family12.jpeg",
  "/images/family13.jpeg",
  "/images/family14.jpeg",
  "/images/family15.jpeg",
  "/images/family16.jpeg",
  "/images/family17.jpeg",
  "/images/family18.jpeg",
  "/images/family19.jpeg",
  "/images/family20.jpeg",
];

export default function GalleryPage() {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  function nextPhoto() {
    setCurrent((current + 1) % photos.length);
  }

  function previousPhoto() {
    setCurrent((current - 1 + photos.length) % photos.length);
  }

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
        <p className="text-lg md:text-xl tracking-[0.4em] text-[#7A3243] mb-4">PHOTO GALLERY</p>

        <h1 className="text-5xl md:text-7xl text-[#5A1E2C] mb-8" style={{ fontFamily: "Georgia, serif" }}>
          Family Moments at API KO LUPETEA
        </h1>

        <p className="text-lg md:text-xl leading-relaxed max-w-4xl mb-12">
          A glimpse into the warmth, family memories, and beautiful island
          setting of API KO LUPETEA in Vavaʻu.
        </p>

        <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-6">
          <div className="relative">
            <img src={photos[current]} alt="API KO LUPETEA family gallery" className="w-full h-[420px] md:h-[650px] object-contain rounded-3xl bg-[#f7e7ea]" />

            <button onClick={previousPhoto} className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-[#5A1E2C] text-white w-12 h-12 md:w-14 md:h-14 rounded-full text-3xl hover:bg-[#7A3243] shadow-lg">
              ‹
            </button>

            <button onClick={nextPhoto} className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-[#5A1E2C] text-white w-12 h-12 md:w-14 md:h-14 rounded-full text-3xl hover:bg-[#7A3243] shadow-lg">
              ›
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}