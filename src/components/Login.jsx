import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const validCredentials = [
      { email: "demo@user.com", password: "123456" },
      { email: "purolaunion@luharide.com", password: "88888888" },
    ];

    const isValid = validCredentials.some(
      (cred) => cred.email === email && cred.password === password
    );

    if (isValid) {
      // ✅ Store email in browser localStorage
      localStorage.setItem("userEmail", email);

      // ✅ Redirect to dashboard
      navigate("/dashboard");
    } else {
      alert(
        "❌ Invalid credentials.\nTry:\n\n1. demo@user.com / 123456\n2. purolaunion@luharide.com / 88888888"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
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
