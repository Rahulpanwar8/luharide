import { useState } from "react";
import axios from "axios";
import { MdAccessTimeFilled, MdOutlineDateRange } from "react-icons/md";

const Hero = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const email = localStorage.getItem("userEmail");

  const handleSubmit = async () => {
    if (!name || !contact || !from || !to || !date || !time || !vehicle) {
      alert("Please fill all required fields!");
      return;
    }

    try {
      const response = await axios.post("https://luharide.in/api/submit_ride.php", {
        name,
        email,
        contact,
        whatsapp,
        vehicle,
        from,
        to,
        date,
        time,
      });

      alert("✅ आपका फॉर्म सफलतापूर्वक सबमिट हो गया है!");
      setName(""); setContact(""); setWhatsapp(""); setVehicle("");
      setFrom(""); setTo(""); setDate(""); setTime("");
    } catch (error) {
      alert("❌ फॉर्म सबमिट नहीं हुआ।");
      console.error(error);
    }
  };

  const inputClass =
    "w-full px-4 py-3 pr-10 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-semibold text-[15px]";

  return (
    <div className="min-h-screen w-full bg-black text-white px-4 py-10 flex flex-col items-center font-sans">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent tracking-wide">
        🚗 Publish Your Ride
      </h2>

      <div className="w-full max-w-2xl space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
        <input
          type="tel"
          placeholder="Contact Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className={inputClass}
        />
        <input
          type="tel"
          placeholder="WhatsApp Number (Optional)"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className={inputClass}
        />
        <input
          type="text"
          placeholder="Vehicle Number (e.g., DL01AB1234)"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
          className={inputClass}
        />
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className={inputClass}
        />
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className={inputClass}
        />

        {/* ✅ Updated Date and Time inputs with icons inside */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Date Input */}
          <div className="relative w-full">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className={inputClass}
              placeholder="Select Date"
            />
            <MdOutlineDateRange className="absolute right-3 top-3.5 text-cyan-400 text-xl pointer-events-none" />
          </div>

          {/* Time Input */}
          <div className="relative w-full">
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={inputClass}
              placeholder="Select Time"
            />
            <MdAccessTimeFilled className="absolute right-3 top-3.5 text-cyan-400 text-xl pointer-events-none" />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-cyan-600 to-indigo-700 hover:from-cyan-500 hover:to-indigo-600 text-white py-3 rounded-xl font-semibold transition-all duration-200 text-[16px]"
        >
          🚀 Submit Ride
        </button>
      </div>
    </div>
  );
};

export default Hero;
