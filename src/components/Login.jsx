import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // ❌ Error message state

  const handleLogin = (e) => {
    e.preventDefault();

    // Clear old errors
    setError("");

    // Demo credentials check
    if (
      (email === "purolataxi@luharide.in" && password === "PuR0L@Union@107856") ||
      (email === "techmcu@luharide.in" && password === "R@#ul1078")
    ) {
      // ✅ Save email in localStorage
      localStorage.setItem("userEmail", email);

      // Redirect to dashboard
      navigate("/dashboard");
    } else {
      // ❌ Show inline error instead of alert
      setError("Wrong credentials. Please check your email and password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Login</h1>

        {/* Show error if exists */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 rounded-xl text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 rounded-xl text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
