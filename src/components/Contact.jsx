import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-8">
      <h2 className="text-3xl font-bold mb-4">Support & Assistance</h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        {/* Taxi Union Button */}
        <button
          onClick={() => navigate("/taxi-union")}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded"
        >
          📞 Contact Taxi Union
        </button>

        {/* Report / Suggestion Button */}
        <button
          onClick={() => navigate("/report")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          📝 Report / Suggestion
        </button>
      </div>
    </div>
  );
};

export default Contact;
