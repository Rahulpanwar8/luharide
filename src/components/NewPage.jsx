import React from "react";
import Hero from "./Hero"; // ✅ Import Hero component

const NewPage = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white px-4">
      <div className="bg-neutral-900 p-8 rounded-xl shadow-md w-full max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Welcome 🎉</h1>
        <p className="text-neutral-300 text-center mb-6">
          Fill your ride details below to proceed.
        </p>

        {/* ✅ Your Hero form comes here */}
        <Hero />
      </div>
    </div>
  );
};

export default NewPage;
