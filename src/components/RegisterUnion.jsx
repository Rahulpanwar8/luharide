import { useState } from "react";

const RegisterUnion = () => {
  const [formData, setFormData] = useState({
    union_name: "",
    leader_name: "",
    pan_number: "",
    mobile_number: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4">
      <div className="max-w-xl mx-auto bg-gray-900 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          टैक्सी यूनियन पंजीकरण फॉर्म
        </h2>

        <form
          action="https://formsubmit.co/luharide@gmail.com"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="union_name"
            placeholder="यूनियन का नाम"
            value={formData.union_name}
            onChange={handleChange}
            required
            className={inputClass}
          />
          <input
            type="text"
            name="leader_name"
            placeholder="यूनियन लीडर का पूरा नाम"
            value={formData.leader_name}
            onChange={handleChange}
            required
            className={inputClass}
          />
          <input
            type="text"
            name="pan_number"
            placeholder="पैन कार्ड नंबर"
            value={formData.pan_number}
            onChange={handleChange}
            required
            className={inputClass}
          />
          <input
            type="text"
            name="mobile_number"
            placeholder="संपर्क नंबर"
            value={formData.mobile_number}
            onChange={handleChange}
            required
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            placeholder="ईमेल पता"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClass}
          />
          <input
            type="text"
            name="address"
            placeholder="पूरा पता"
            value={formData.address}
            onChange={handleChange}
            required
            className={inputClass}
          />

          {/* Hidden inputs for FormSubmit configuration */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://luharide.com/success" />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold transition duration-300"
          >
            फॉर्म सबमिट करें
          </button>
        </form>
      </div>
    </div>
  );
};

const inputClass = "w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400";

export default RegisterUnion;
