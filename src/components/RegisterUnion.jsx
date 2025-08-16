import { useState } from "react";

const RegisterUnion = () => {
  const [formData, setFormData] = useState({
    unionName: "",
    leaderName: "",
    email: "",
    phone: "",
    location: "",
    address: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4">
      <div className="max-w-xl mx-auto bg-gray-900 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          🚖 Taxi Union Registration
        </h2>

        <form
          action="https://formsubmit.co/luharide@gmail.com"
          method="POST"
          className="space-y-4"
        >
          {/* Hidden inputs for FormSubmit settings */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="🚖 New Taxi Union Registration"
          />
          <input
            type="hidden"
            name="_next"
            value="https://yourwebsite.com/thank-you"
          />

          <input
            type="text"
            name="unionName"
            required
            placeholder="Taxi Union Name"
            value={formData.unionName}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="text"
            name="leaderName"
            required
            placeholder="Union Leader's Full Name"
            value={formData.leaderName}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Contact Number"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="text"
            name="location"
            required
            placeholder="City / Location"
            value={formData.location}
            onChange={handleChange}
            className={inputClass}
          />
          <textarea
            name="address"
            required
            placeholder="Full Address"
            value={formData.address}
            onChange={handleChange}
            className={inputClass}
            rows="3"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold transition duration-300"
          >
            🚀 Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

const inputClass =
  "w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500";

export default RegisterUnion;
