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
      eventDate: `Check-in: ${formData.get("checkIn")} | Check-out: ${formData.get("checkOut")}`,
      guestCount: formData.get("guests"),
      message: formData.get("message"),
    };

    const response = await fetch("/api/enquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
          padding: 40px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .card {
          background: white;
          padding: 30px;
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .date-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        input, textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 14px;
          border: 1px solid #d6b6be;
          border-radius: 8px;
          font-size: 15px;
          color: #333;
        }

        @media (max-width: 768px) {
          .booking-page {
            padding: 24px;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .date-row {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 42px !important;
          }
        }
      `}</style>

      <div className="container">
        <p style={{ letterSpacing: "4px", color: "#7d2b3a", fontSize: "12px" }}>
          BOOK YOUR STAY
        </p>

        <h1 style={{ color: "#6b1b2d", fontSize: "54px", fontWeight: "500" }}>
          Enquire About API KO LUPETEA
        </h1>

        <p style={{ color: "#5b4b50", marginBottom: "40px", maxWidth: "650px", lineHeight: "1.7" }}>
          Send us your preferred dates and guest details. We will respond with availability and further information about staying at the mansion.
        </p>

        <div className="grid">
          <div className="card">
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div style={{ fontSize: "55px" }}>🌺</div>

                <h2 style={{ color: "#6b1b2d", fontSize: "40px", fontWeight: "500" }}>
                  Thank You!
                </h2>

                <p style={{ color: "#4b2c34", fontSize: "18px", lineHeight: "1.7" }}>
                  Thank you for your enquiry.
                  <br />
                  The owners will get back to you soon!
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    background: "#7d2b3a",
                    color: "white",
                    border: "none",
                    padding: "13px 25px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  Make Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <h2 style={{ color: "#6b1b2d", marginBottom: "20px", fontSize: "36px" }}>
                  Booking Enquiry
                </h2>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <input name="fullName" required placeholder="Full Name" />
                  <input name="email" required type="email" placeholder="Email Address" />
                  <input name="phone" placeholder="Phone Number" />

                  <div className="date-row">
                    <input name="checkIn" type="date" required />
                    <input name="checkOut" type="date" required />
                  </div>

                  <input name="guests" placeholder="Number of Guests" />

                  <textarea name="message" placeholder="Message or special requests" rows={5} />

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      background: "#7d2b3a",
                      color: "white",
                      border: "none",
                      padding: "15px",
                      borderRadius: "8px",
                      fontWeight: "600",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                  >
                    {loading ? "Sending..." : "Send Enquiry"}
                  </button>
                </form>
              </>
            )}
          </div>

          <div
            style={{
              background: "#6b1b2d",
              color: "white",
              padding: "35px",
              borderRadius: "18px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
          >
            <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
              Stay Highlights
            </h2>

            <ul style={{ lineHeight: "2.2", paddingLeft: "20px" }}>
              <li>Ocean view mansion in Vava'u</li>
              <li>Whole-house private stay</li>
              <li>5 bedrooms</li>
              <li>Fully wrapped upstairs balcony</li>
              <li>Large downstairs balcony</li>
              <li>Gym and pool table</li>
              <li>Private wharf access</li>
              <li>Ideal for families and groups</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}