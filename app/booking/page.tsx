"use client";

import { useState } from "react";

export default function BookingPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setLoading(true);

    const enquiry = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      eventType: "Mansion Booking",
      eventDate: `Move In: ${formData.get("moveIn")} | Leave: ${formData.get("leaveDate")}`,
      guestCount: formData.get("guests"),
      message: formData.get("message"),
    };

    const response = await fetch("/api/enquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enquiry),
    });

    setLoading(false);

    if (response.ok) {
      form.reset();
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="booking-page">
      <style>{`
        .booking-page {
          background: #f4e8ea;
          min-height: 100vh;
        }

        .navbar {
          background: #6b1b2d;
          color: white;
          padding: 18px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .logo {
          font-size: 28px;
          font-family: Georgia, serif;
          font-weight: bold;
          color: white;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 26px;
          font-size: 14px;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 70px 40px;
        }

        .top-label {
          letter-spacing: 7px;
          color: #7d2b3a;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .title {
          color: #6b1b2d;
          font-size: 58px;
          margin-bottom: 25px;
          font-weight: 500;
          font-family: Georgia, serif;
          line-height: 1.1;
        }

        .intro {
          color: #5b4b50;
          margin-bottom: 45px;
          max-width: 700px;
          line-height: 1.8;
          font-size: 18px;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 35px;
        }

        .card {
          background: white;
          padding: 30px;
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .form-title {
          color: #6b1b2d;
          margin-bottom: 20px;
          font-size: 34px;
          font-family: Georgia, serif;
          font-weight: 500;
        }

        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .input-field,
        .textarea-field {
          width: 100%;
          box-sizing: border-box;
          padding: 14px;
          border: 1px solid #d6b6be;
          border-radius: 8px;
          font-size: 15px;
          color: #333;
          background: white;
          font-family: Arial, sans-serif;
          min-height: 52px;
          -webkit-appearance: none;
          appearance: none;
        }

        input[type="date"].input-field {
          -webkit-appearance: auto;
          appearance: auto;
          color: #333;
        }

        .textarea-field {
          resize: none;
          min-height: 150px;
        }

        .submit-button {
          background: #7d2b3a;
          color: white;
          border: none;
          padding: 15px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 16px;
        }

        .thank-you {
          text-align: center;
          padding: 55px 20px;
        }

        .thank-you h2 {
          color: #6b1b2d;
          font-size: 42px;
          margin-bottom: 15px;
          font-weight: 500;
          font-family: Georgia, serif;
        }

        .thank-you p {
          color: #4b2c34;
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 25px;
        }

        .another-button {
          background: #7d2b3a;
          color: white;
          border: none;
          padding: 13px 25px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 15px;
        }

        .highlights {
          background: #6b1b2d;
          color: white;
          padding: 40px;
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .highlights h2 {
          font-size: 38px;
          margin-bottom: 24px;
          font-family: Georgia, serif;
          font-weight: 500;
        }

        .highlights ul {
          line-height: 2.2;
          padding-left: 0;
          list-style: none;
          font-size: 17px;
        }

        .highlights li {
          margin-bottom: 10px;
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 18px 24px;
          }

          .logo {
            font-size: 24px;
          }

          .nav-links {
            display: none;
          }

          .container {
            padding: 70px 24px;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .title {
            font-size: 52px;
          }

          .intro {
            font-size: 20px;
          }

          .card {
            padding: 30px;
            border-radius: 28px;
          }

          .form-title {
            font-size: 40px;
          }

          .input-field,
          .textarea-field {
            font-size: 18px;
            padding: 18px;
            min-height: 64px;
            border-radius: 14px;
          }

          .textarea-field {
            min-height: 170px;
          }

          .submit-button {
            font-size: 20px;
            padding: 18px;
            border-radius: 14px;
          }

          .highlights {
            border-radius: 28px;
            padding: 35px;
          }

          .highlights h2 {
            font-size: 42px;
          }

          .highlights ul {
            font-size: 20px;
          }
        }
      `}</style>

      <nav className="navbar">
        <a href="/" className="logo">
          🌺 API KO LUPETEA
        </a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/mansion">The Mansion</a>
          <a href="/gallery">Gallery</a>
          <a href="/booking">Book Now</a>
        </div>
      </nav>

      <div className="container">
        <p className="top-label">BOOK YOUR STAY</p>

        <h1 className="title">Enquire About API KO LUPETEA</h1>

        <p className="intro">
          Send us your preferred dates and guest details. We will respond with
          availability and further information about staying at the mansion.
        </p>

        <div className="grid">
          <div className="card">
            {submitted ? (
              <div className="thank-you">
                <div style={{ fontSize: "55px", marginBottom: "15px" }}>🌺</div>

                <h2>Thank You!</h2>

                <p>
                  Thank you for your enquiry.
                  <br />
                  The owners will get back to you soon!
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="another-button"
                >
                  Make Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <h2 className="form-title">Booking Enquiry</h2>

                <form onSubmit={handleSubmit} className="booking-form">
                  <input name="fullName" required placeholder="Full Name" className="input-field" />
                  <input name="email" required type="email" placeholder="Email Address" className="input-field" />
                  <input name="phone" placeholder="Phone Number" className="input-field" />

                  <input name="moveIn" type="date" required className="input-field" />
                  <input name="leaveDate" type="date" required className="input-field" />

                  <input name="guests" placeholder="Number of Guests" className="input-field" />

                  <textarea
                    name="message"
                    placeholder="Message or special requests"
                    rows={5}
                    className="textarea-field"
                  />

                  <button type="submit" disabled={loading} className="submit-button">
                    {loading ? "Sending..." : "Send Enquiry"}
                  </button>
                </form>
              </>
            )}
          </div>

          <div className="highlights">
            <h2>Stay Highlights</h2>

            <ul>
              <li>🌊 Ocean view mansion in Vava'u</li>
              <li>🏡 Whole-house private stay</li>
              <li>🛏️ 5 bedrooms</li>
              <li>🌺 Fully wrapped upstairs balcony</li>
              <li>🌊 Large downstairs balcony</li>
              <li>🏋️ Gym and pool table</li>
              <li>⚓ Private wharf access</li>
              <li>👨‍👩‍👧‍👦 Ideal for families and groups</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}