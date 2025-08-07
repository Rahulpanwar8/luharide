// src/components/ReportForm.jsx

import { useState } from "react";

const ReportForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form
      action="https://formsubmit.co/luharide@gmail.com"
      method="POST"
      className="bg-neutral-800 p-6 rounded-lg shadow-md space-y-4 max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-center mb-4">🚨 Report or Suggestion</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded bg-neutral-700 text-white outline-none"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number (Optional)"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded bg-neutral-700 text-white outline-none"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        rows="4"
        required
        className="w-full px-4 py-2 rounded bg-neutral-700 text-white outline-none"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ReportForm;
