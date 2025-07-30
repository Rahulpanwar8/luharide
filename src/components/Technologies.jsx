import { useState, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Technologies = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const [fromSug, setFromSug] = useState([]);
  const [toSug, setToSug] = useState([]);

  const resultRef = useRef(null);

  const fetchSuggestions = async (value, field) => {
    if (field === "from_place") setFrom(value);
    else if (field === "to_place") setTo(value);

    if (value.length < 2) {
      field === "from_place" ? setFromSug([]) : setToSug([]);
      return;
    }

    try {
      const res = await axios.post("https://luharide.in/api/suggest_ride.php", {
        search: value,
        field,
      });

      field === "from_place" ? setFromSug(res.data) : setToSug(res.data);
    } catch (e) {
      console.error(`${field} suggest failed`, e);
    }
  };

  const handleSearch = async () => {
    if (!from && !to && !date) {
      alert("Please fill at least one field.");
      return;
    }

    try {
      setLoading(true);
      setHasSearched(true);
      const res = await axios.post("https://luharide.in/api/search_ride.php", {
        from,
        to,
        date,
      });
      setResults(res.data);
    } catch (error) {
      console.error("Search failed", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 font-semibold";

  const dropDownClass =
    "absolute z-50 bg-neutral-900/95 border border-white/10 shadow-xl rounded-lg w-full mt-1 max-h-48 overflow-auto backdrop-blur-xl";

  const dropDownItemClass =
    "px-4 py-2 hover:bg-cyan-500/10 cursor-pointer text-white font-medium";

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white flex flex-col items-center px-4 py-12">
      {/* Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl sm:text-4xl font-extrabold mt-10 mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent"
      >
        Find a Ride
      </motion.h2>

      {/* Search Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-3xl space-y-4 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-4 sm:p-6 mt-8"
      >
        {/* From & To */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <label className="mb-1 block text-sm font-semibold text-white/80">From</label>
            <input
              type="text"
              placeholder="From place"
              value={from}
              onChange={(e) => fetchSuggestions(e.target.value, "from_place")}
              className={inputClass}
            />
            {fromSug.length > 0 && (
              <ul className={dropDownClass}>
                {fromSug.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setFrom(item);
                      setFromSug([]);
                    }}
                    className={dropDownItemClass}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative flex-1">
            <label className="mb-1 block text-sm font-semibold text-white/80">To</label>
            <input
              type="text"
              placeholder="To place"
              value={to}
              onChange={(e) => fetchSuggestions(e.target.value, "to_place")}
              className={inputClass}
            />
            {toSug.length > 0 && (
              <ul className={dropDownClass}>
                {toSug.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setTo(item);
                      setToSug([]);
                    }}
                    className={dropDownItemClass}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Date */}
        <div>
          <label className="mb-1 block text-sm font-semibold text-white/80">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className={inputClass}
          />
        </div>

        {/* Search Button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleSearch}
          disabled={loading}
          className="w-full inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white py-3 rounded-xl font-semibold transition duration-200 disabled:opacity-60"
        >
          {loading ? "Searching..." : "🔍 Search Ride"}
        </motion.button>
      </motion.div>

      {/* Results */}
      <div ref={resultRef} className="mt-10 w-full max-w-4xl space-y-4">
        {hasSearched && results.length === 0 ? (
          <p className="text-center text-gray-400">No results found.</p>
        ) : (
          results.length > 0 && (
            <>
              <p className="text-sm text-gray-400 mb-2">
                Showing <span className="text-cyan-400 font-semibold">{results.length}</span> results
              </p>

              {results.map((ride) => (
                <motion.div
                  key={ride.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 sm:p-5 rounded-2xl shadow-lg"
                >
                  <h3 className="text-lg font-bold text-white">{ride.name}</h3>
                  <p className="text-white/90">
                    <strong>From:</strong> {ride.from_place} &nbsp;|&nbsp; <strong>To:</strong> {ride.to_place}
                  </p>
                  <p className="text-white/90">
                    <strong>Date:</strong> {ride.ride_date} &nbsp;|&nbsp; <strong>Time:</strong> {ride.ride_time}
                  </p>
                  <p className="text-white/90">
                    <strong>Vehicle:</strong> {ride.vehicle_number || "N/A"}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
                    {ride.contact_number && (
                      <a
                        href={`tel:${ride.contact_number}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-400/20 hover:bg-emerald-300/30 text-emerald-200 font-semibold shadow-sm transition duration-300"
                      >
                        📞 <span className="underline">Call</span>
                      </a>
                    )}

                    {ride.whatsapp_number && (
                      <a
                        href={`https://wa.me/${ride.whatsapp_number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-lime-300/20 hover:bg-lime-200/30 text-lime-200 font-semibold shadow-sm transition duration-300"
                      >
                        🟢 <span className="underline">WhatsApp</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Technologies;
