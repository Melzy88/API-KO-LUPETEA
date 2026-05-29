export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7e7ea]">

      {/* NAVBAR */}
      <nav className="w-full bg-[#5A1E2C] text-white px-10 py-5 shadow-xl">
        <div className="w-full flex justify-between items-center">

          {/* LOGO + TITLE */}
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

          {/* NAV LINKS */}
          <div className="flex items-center gap-10 text-xl">

            <a
              href="/"
              className="border-b-4 border-pink-300 pb-2 hover:text-pink-200 transition"
            >
              Home
            </a>

            <a
              href="/about"
              className="hover:text-pink-200 transition"
            >
              About
            </a>

            <a
              href="/mansion"
              className="hover:text-pink-200 transition"
            >
              The Mansion
            </a>

            <a
              href="/gallery"
              className="hover:text-pink-200 transition"
            >
              Gallery
            </a>

            <a
              href="/booking"
              className="hover:text-pink-200 transition"
            >
              Book Now
            </a>

          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-[75vh] px-12 py-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div>

            <p className="text-2xl tracking-[0.4em] text-[#5A1E2C] mb-6">
              WELCOME TO
            </p>

            <h1
              className="text-7xl md:text-8xl text-[#5A1E2C] mb-6 leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              API KO LUPETEA
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-24 bg-[#7A3243]"></div>
              <p
                className="text-4xl italic text-[#7A3243]"
                style={{ fontFamily: "cursive" }}
              >
                Vavaʻu, Tonga
              </p>
              <div className="h-[2px] w-24 bg-[#7A3243]"></div>
            </div>

            <p className="text-xl text-[#5A1E2C] leading-relaxed max-w-xl mb-10">
              A private whole-house mansion stay with breathtaking ocean views,
              two spacious balconies, private wharf access, five bedrooms,
              gym, pool table, and everything needed for the perfect island
              escape.
            </p>

            <a
              href="/gallery"
              className="bg-[#6B2032] text-white px-10 py-5 rounded-xl text-lg tracking-widest hover:bg-[#4B1422] shadow-xl transition"
            >
              VIEW GALLERY
            </a>

          </div>

          {/* RIGHT HERO PHOTO PLACEHOLDER */}
          <div className="bg-white rounded-3xl shadow-2xl p-4">

            <div className="rounded-3xl overflow-hidden">

              <img
                src="/images/mansion.jpg"
                alt="API KO LUPETEA Mansion"
                className="w-full h-[520px] object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="bg-[#fceff1] py-16">

        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10 text-center px-8">

          <div>
            <div className="text-5xl mb-3">🌊</div>
            <h3 className="font-bold text-[#5A1E2C] tracking-widest mb-2">
              OCEAN VIEW
            </h3>
            <p className="text-[#5A1E2C]">
              Beautiful views of Vavaʻu waters.
            </p>
          </div>

          <div>
            <div className="text-5xl mb-3">🛏️</div>
            <h3 className="font-bold text-[#5A1E2C] tracking-widest mb-2">
              5 BEDROOMS
            </h3>
            <p className="text-[#5A1E2C]">
              Spacious whole-house accommodation.
            </p>
          </div>

          <div>
            <div className="text-5xl mb-3">🏡</div>
            <h3 className="font-bold text-[#5A1E2C] tracking-widest mb-2">
              2 BALCONIES
            </h3>
            <p className="text-[#5A1E2C]">
              Upstairs and downstairs entertaining areas.
            </p>
          </div>

          <div>
            <div className="text-5xl mb-3">🏋️</div>
            <h3 className="font-bold text-[#5A1E2C] tracking-widest mb-2">
              GYM & GAMES
            </h3>
            <p className="text-[#5A1E2C]">
              Gym, pool table and relaxation spaces.
            </p>
          </div>

          <div>
            <div className="text-5xl mb-3">⚓</div>
            <h3 className="font-bold text-[#5A1E2C] tracking-widest mb-2">
              PRIVATE WHARF
            </h3>
            <p className="text-[#5A1E2C]">
              Direct access to the ocean.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}