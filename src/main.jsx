import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx"; // HomePage
import Login from "./components/Login.jsx"; // Login page (was ContactPage)
import NewPage from "./components/NewPage.jsx"; // Page after login ✅
import ReportForm from "./components/ReportForm.jsx"; // ADD THIS LINE at the top
import TaxiUnion from './components/TaxiUnion'; // ❌ Wrong if file not present at this path
import RegisterUnion from "./components/RegisterUnion"; // ✅ path based on your file location

<Route path="/register-union" element={<RegisterUnion />} />

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contactpage" element={<Login />} />
        <Route path="/dashboard" element={<NewPage />} /> {/* ✅ after login */}
        <Route path="/report" element={<ReportForm />} /> {/* ✅ ADD THIS LINE */}
        <Route path="/taxi-union" element={<TaxiUnion />} /> 
        <Route path="/register-union" element={<RegisterUnion />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
