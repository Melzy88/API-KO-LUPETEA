"use client";

import { useState } from "react";

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSubmit() {
    setSubmitted(true);
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
        <p className="text-lg md:text-xl tracking-[0.4em] text-[#7A3243] mb-4">BOOK YOUR STAY</p>

        <h1 className="text-5xl md:text-7xl text-[#5A1E2C] mb-8" style={{ fontFamily: "Georgia, serif" }}>
          Enquire About API KO LUPETEA
        </h1>

        <p className="text-lg md:text-xl leading-relaxed max-w-4xl mb-12">
          Send us your preferred dates and guest details. We will respond with
          availability and further information about staying at the mansion.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
            {!submitted ? (
              <>
                <h2 className="text-4xl text-[#5A1E2C] mb-6" style={{ fontFamily: "Georgia, serif" }}>
                  Booking Enquiry
                </h2>

                <div className="grid gap-4">
                  <input type="text" placeholder="Full Name" className="w-full p-4 border border-[#d8a7b1] rounded-xl text-black" />
                  <input type="email" placeholder="Email Address" className="w-full p-4 border border-[#d8a7b1] rounded-xl text-black" />
                  <input type="tel" placeholder="Phone Number" className="w-full p-4 border border-[#d8a7b1] rounded-xl text-black" />

                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="date" className="w-full p-4 border border-[#d8a7b1] rounded-xl text-black" />
                    <input type="date" className="w-full p-4 border border-[#d8a7b1] rounded-xl text-black" />
                  </div>

                  <input type="number" placeholder="Number of Guests" className="w-full p-4 border border-[#d8a7b1] rounded-xl text-black" />
                  <textarea placeholder="Message or special requests" rows={5} className="w-full p-4 border border-[#d8a7b1] rounded-xl text-black"></textarea>

                  <button onClick={handleSubmit} className="bg-[#7A3243] text-white p-4 rounded-xl text-lg hover:bg-[#5A1E2C] shadow-lg transition">
                    Send Enquiry
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="text-7xl mb-6">🌺</div>
                <h2 className="text-4xl text-[#5A1E2C] mb-5" style={{ fontFamily: "Georgia, serif" }}>
                  Thank You!
                </h2>
                <p className="text-xl leading-relaxed max-w-md mx-auto">
                  Thank you for your enquiry.
                  <br />
                  The owners will get back to you soon!
                </p>
              </div>
            )}
          </div>

          <div className="bg-[#5A1E2C] text-white rounded-3xl shadow-2xl p-8">
            <h2 className="text-4xl mb-6" style={{ fontFamily: "Georgia, serif" }}>
              Stay Highlights
            </h2>

            <div className="space-y-5 text-lg">
              <p>🌊 Ocean view mansion in Vavaʻu</p>
              <p>🏡 Whole-house private stay</p>
              <p>🛏️ 5 bedrooms</p>
              <p>🌺 Fully wrapped upstairs balcony</p>
              <p>🌊 Large downstairs balcony</p>
              <p>🏋️ Gym and pool table</p>
              <p>⚓ Private wharf access</p>
              <p>👨‍👩‍👧‍👦 Ideal for families and groups</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}