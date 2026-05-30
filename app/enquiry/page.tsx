"use client";

import { useState } from "react";

export default function EnquiryPage() {
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

    const enquiry = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      eventType: formData.get("eventType"),
      eventDate: formData.get("eventDate"),
      guestCount: formData.get("guestCount"),
      message: formData.get("message"),
    };

    const response = await fetch("/api/enquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enquiry),
    });

    if (response.ok) {
      setMessage("Enquiry submitted successfully.");
      form.reset();
    } else {
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f3ec] p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-4xl font-bold text-black mb-4">
          Lupetea Mansion Enquiry
        </h1>

        <p className="text-gray-700 mb-6">
          Complete the form below to send an enquiry for your event.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="fullName" required placeholder="Full Name" className="w-full p-3 border rounded text-black" />
          <input name="email" required type="email" placeholder="Email" className="w-full p-3 border rounded text-black" />
          <input name="phone" placeholder="Phone Number" className="w-full p-3 border rounded text-black" />
          <input name="eventType" placeholder="Event Type e.g. Wedding, Birthday" className="w-full p-3 border rounded text-black" />
          <input name="eventDate" type="date" className="w-full p-3 border rounded text-black" />
          <input name="guestCount" placeholder="Guest Count" className="w-full p-3 border rounded text-black" />

          <textarea
            name="message"
            placeholder="Message / Special Requests"
            rows={5}
            className="w-full p-3 border rounded text-black"
          />

          <button
            type="submit"
            className="bg-black text-white w-full p-3 rounded hover:bg-gray-800"
          >
            Submit Enquiry
          </button>
        </form>

        {message && (
          <p className="mt-4 font-bold text-green-700">
            {message}
          </p>
        )}
      </div>
    </main>
  );
}