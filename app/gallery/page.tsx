"use client";

import { useState } from "react";

const photos = [
  "/images/family1.jpeg",
  "/images/family2.jpeg",
  "/images/family3.jpeg",
  "/images/family4.jpeg",
  "/images/family5.jpeg",
  "/images/family6.jpeg",
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

  function nextPhoto() {
    setCurrent((current + 1) % photos.length);
  }

  function previousPhoto() {
    setCurrent((current - 1 + photos.length) % photos.length);
  }

  return (
    <main className="min-h-screen bg-[#f7e7ea] text-[#4B1422]">
      <nav className="w-full bg-[#5A1E2C] text-white px-10 py-5 shadow-xl">
        <div className="w-full flex justify-between items-center">
          <a href="/" className="flex items-center gap-5">
            <img
              src="/images/hibiscus.png"
              alt="Hibiscus logo"
              className="w-28 h-28 object-contain"
            />

            <span
              className="text-5xl md:text-6xl font-serif tracking-wide text-[#fff4f5]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              API KO LUPETEA
            </span>
          </a>

          <div className="flex items-center gap-10 text-xl">
            <a href="/" className="hover:text-pink-200 transition">Home</a>
            <a href="/about" className="hover:text-pink-200 transition">About</a>
            <a href="/mansion" className="hover:text-pink-200 transition">The Mansion</a>
            <a href="/gallery" className="border-b-4 border-pink-300 pb-2">Gallery</a>
            <a href="/booking" className="hover:text-pink-200 transition">Book Now</a>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-10 py-20">
        <p className="text-xl tracking-[0.4em] text-[#7A3243] mb-4">
          PHOTO GALLERY
        </p>

        <h1
          className="text-6xl md:text-7xl text-[#5A1E2C] mb-8"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Family Moments at API KO LUPETEA
        </h1>

        <p className="text-xl leading-relaxed max-w-4xl mb-12">
          A glimpse into the warmth, family memories, and beautiful island
          setting of API KO LUPETEA in Vavaʻu.
        </p>

        <div className="bg-white rounded-3xl shadow-2xl p-6">
          <div className="relative">
            <img
              src={photos[current]}
              alt="API KO LUPETEA family gallery"
              className="w-full h-[650px] object-contain rounded-3xl bg-[#f7e7ea]"
            />

            <button
              onClick={previousPhoto}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#5A1E2C] text-white w-14 h-14 rounded-full text-3xl hover:bg-[#7A3243] shadow-lg"
            >
              ‹
            </button>

            <button
              onClick={nextPhoto}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#5A1E2C] text-white w-14 h-14 rounded-full text-3xl hover:bg-[#7A3243] shadow-lg"
            >
              ›
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {photos.map((photo, index) => (
              <button
                key={photo}
                onClick={() => setCurrent(index)}
                className={`w-4 h-4 rounded-full ${
                  current === index ? "bg-[#5A1E2C]" : "bg-[#d8a7b1]"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}