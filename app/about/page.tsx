export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7e7ea] text-[#4B1422]">

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
              className="hover:text-pink-200 transition"
            >
              Home
            </a>

            <a
              href="/about"
              className="border-b-4 border-pink-300 pb-2"
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

      {/* PAGE CONTENT */}
      <section className="max-w-7xl mx-auto px-10 py-20">

        <p className="text-xl tracking-[0.4em] text-[#7A3243] mb-4">
          ABOUT THE OWNERS
        </p>

        <h1
          className="text-6xl md:text-7xl text-[#5A1E2C] mb-12"
          style={{ fontFamily: "Georgia, serif" }}
        >
          A Family Home in Vavaʻu
        </h1>

        {/* MAIN CARD */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* OWNER PHOTO */}
            <div className="bg-[#f7e7ea] rounded-3xl shadow-xl p-4">

              <img
                src="/images/owners.jpg"
                alt="Lesieli and Kali Tauaika"
                className="w-full h-[650px] object-contain rounded-3xl"
              />

            </div>

            {/* OWNER STORY */}
            <div className="space-y-6">

              <h2
                className="text-5xl text-[#5A1E2C]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Lesieli & Kali Tauaika
              </h2>

              <div className="h-[2px] w-28 bg-[#7A3243]"></div>

              <p className="text-lg leading-relaxed">
                API KO LUPETEA is a family-owned mansion located in
                beautiful Vavaʻu, Tonga. Created by Lesieli and Kali
                Tauaika, the home was designed as a peaceful retreat
                where families, groups, and visitors can relax and
                experience the beauty of island life.
              </p>

              <p className="text-lg leading-relaxed">
                The owners take pride in sharing a warm and welcoming
                Tongan-style experience with guests. API KO LUPETEA is
                more than accommodation — it is a home filled with
                family, hospitality, and connection.
              </p>

              <p className="text-lg leading-relaxed">
                With breathtaking ocean views, private wharf access,
                spacious living areas, and relaxing outdoor spaces,
                the mansion offers guests privacy, comfort, and a
                memorable Vavaʻu escape.
              </p>

            </div>

          </div>

        </div>

        {/* FEATURE CARDS */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">

          <div className="bg-[#5A1E2C] text-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-3xl mb-3">🏡 Family-Owned</h3>

            <p className="leading-relaxed">
              A home created with care, pride, and love for Vavaʻu and
              the people who visit.
            </p>
          </div>

          <div className="bg-[#7A3243] text-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-3xl mb-3">🌺 Hospitality</h3>

            <p className="leading-relaxed">
              A welcoming island experience inspired by warmth,
              family, and Tongan hospitality.
            </p>
          </div>

          <div className="bg-[#5A1E2C] text-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-3xl mb-3">🌊 Private Escape</h3>

            <p className="leading-relaxed">
              Designed for peaceful retreats, family stays,
              and unforgettable memories.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}