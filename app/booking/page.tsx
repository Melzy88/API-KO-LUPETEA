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
      eventDate: `Move In: ${formData.get("moveIn")} | Leave: ${formData.get(
        "leaveDate"
      )}`,
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

        .top-label {
          letter-spacing: 4px;
          color: #7d2b3a;
          font-size: 12px;
          margin-bottom: 10px;
        }

        .title {
          color: #6b1b2d;
          font-size: 54px;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .intro {
          color: #5b4b50;
          margin-bottom: 40px;
          max-width: 650px;
          line-height: 1.7;
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

        .form-title {
          color: #6b1b2d;
          margin-bottom: 20px;
          font-size: 36px;
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
          font-family: inherit;
        }

        .textarea-field {
          resize: none;
        }

        .date-label {
          color: #8b6c74;
          font-size: 13px;
          margin-top: -8px;
          margin-bottom: 4px;
          padding-left: 5px;
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
          padding: 40px 20px;
        }

        .thank-you h2 {
          color: #6b1b2d;
          font-size: 40px;
          margin-bottom: 15px;
          font-weight: 500;
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
          padding: 35px;
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .highlights h2 {
          font-size: 36px;
          margin-bottom: 20px;
        }

        .highlights ul {
          line-height: 2.2;
          padding-left: 20px;
        }

        @media (max-width: 768px) {
          .booking-page {
            padding: 24px;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .title {
            font-size: 42px;
          }

          .form-title {
            font-size: 34px;
          }
        }
      `}</style>

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
                <div style={{ fontSize: "55px", marginBottom: "15px" }}>
                  🌺
                </div>

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
                  <input
                    name="fullName"
                    required
                    placeholder="Full Name"
                    className="input-field"
                  />

                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="Email Address"
                    className="input-field"
                  />

                  <input
                    name="phone"
                    placeholder="Phone Number"
                    className="input-field"
                  />

                  <input
                    name="moveIn"
                    type="date"
                    required
                    className="input-field"
                  />
                  <small className="date-label">Move In Date</small>

                  <input
                    name="leaveDate"
                    type="date"
                    required
                    className="input-field"
                  />
                  <small className="date-label">Leave Date</small>

                  <input
                    name="guests"
                    placeholder="Number of Guests"
                    className="input-field"
                  />

                  <textarea
                    name="message"
                    placeholder="Message or special requests"
                    rows={5}
                    className="textarea-field"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="submit-button"
                  >
                    {loading ? "Sending..." : "Send Enquiry"}
                  </button>
                </form>
              </>
            )}
          </div>

          <div className="highlights">
            <h2>Stay Highlights</h2>

            <ul>
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