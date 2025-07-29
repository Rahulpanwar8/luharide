import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./components/Login.jsx"; // ✅ if file is named Login.jsx
import App from "./App.jsx"; // HomePage
import Login from "./components/Login.jsx"; // Login page (was ContactPage)
import NewPage from "./components/NewPage.jsx"; // Page after login ✅
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contactpage" element={<Login />} />
        <Route path="/dashboard" element={<NewPage />} /> {/* ✅ after login */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
