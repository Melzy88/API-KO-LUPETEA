export default function MansionPage() {
  return (
    <main className="min-h-screen bg-[#f7e7ea] text-[#4B1422]">

      {/* NAVBAR */}
      <nav className="w-full bg-[#5A1E2C] text-white px-10 py-5 shadow-xl">
        <div className="w-full flex justify-between items-center">

          {/* LOGO */}
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

          {/* NAV */}
          <div className="flex items-center gap-10 text-xl">
            <a href="/" className="hover:text-pink-200 transition">
              Home
            </a>

            <a href="/about" className="hover:text-pink-200 transition">
              About
            </a>

            <a
              href="/mansion"
              className="border-b-4 border-pink-300 pb-2"
            >
              The Mansion
            </a>

            <a href="/gallery" className="hover:text-pink-200 transition">
              Gallery
            </a>

            <a href="/booking" className="hover:text-pink-200 transition">
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-10 py-20">

        <p className="text-xl tracking-[0.4em] text-[#7A3243] mb-4">
          THE MANSION
        </p>

        <h1
          className="text-6xl md:text-7xl text-[#5A1E2C] mb-8"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Whole-House Oceanfront Escape
        </h1>

        <p className="text-xl leading-relaxed max-w-4xl mb-12">
          API KO LUPETEA is a spacious oceanfront mansion in Vavaʻu,
          thoughtfully designed for families, groups, and guests seeking
          comfort, privacy, entertainment, and unforgettable island views.
        </p>

        {/* HERO PHOTO */}
        <div className="bg-white rounded-3xl shadow-2xl p-4 mb-14">

          <img
            src="/images/mansion.jpg"
            alt="API KO LUPETEA Mansion"
            className="w-full h-[600px] object-cover rounded-3xl"
          />

        </div>

        {/* FLOOR LAYOUT */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* UPSTAIRS */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">

            <h2
              className="text-4xl text-[#5A1E2C] mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Upstairs Living
            </h2>

            <div className="grid gap-4 text-lg">

              <p>🛏️ 3 bedrooms total</p>

              <p>
                👑 Master bedroom with private full bathroom
              </p>

              <p>🍽️ Kitchen</p>

              <p>🛋️ Lounge area</p>

              <p>🧺 Laundry room</p>

              <p>
                🌺 Fully wrapped upstairs balcony with panoramic
                ocean views and outdoor relaxation space
              </p>

            </div>
          </div>

          {/* DOWNSTAIRS */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">

            <h2
              className="text-4xl text-[#5A1E2C] mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Downstairs Living
            </h2>

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

              <p>
                ⚓ Direct private wharf access from the balcony
              </p>

            </div>
          </div>

        </div>

        {/* LUXURY FEATURES */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">

          <div className="bg-[#5A1E2C] text-white rounded-3xl p-7 shadow-xl">
            <h3 className="text-3xl mb-3">🌊 Oceanfront</h3>

            <p>
              Peaceful waterfront surroundings and beautiful
              Vavaʻu scenery.
            </p>
          </div>

          <div className="bg-[#7A3243] text-white rounded-3xl p-7 shadow-xl">
            <h3 className="text-3xl mb-3">⚓ Private Wharf</h3>

            <p>
              Step directly from the mansion to your own
              ocean access.
            </p>
          </div>

          <div className="bg-[#5A1E2C] text-white rounded-3xl p-7 shadow-xl">
            <h3 className="text-3xl mb-3">🎱 Entertainment</h3>

            <p>
              Gym, pool table, lounges, and gathering spaces
              designed for relaxation.
            </p>
          </div>

          <div className="bg-[#7A3243] text-white rounded-3xl p-7 shadow-xl">
            <h3 className="text-3xl mb-3">🏡 Whole Mansion</h3>

            <p>
              Private full-house accommodation ideal for
              families and groups.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}