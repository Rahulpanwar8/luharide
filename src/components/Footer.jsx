import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-sm py-4 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} <strong>Luharide</strong> — Your trusted ride-sharing partner.
        </p>
        <p className="text-center md:text-right text-gray-400 text-xs">
          Built by Rahul Panwar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
