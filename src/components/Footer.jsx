import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold">© {new Date().getFullYear()} Rahul Panwar</h4>
          <p className="text-sm text-gray-400">Your Ride Partner</p>
        </div>

        <div className="flex gap-5 text-xl">
          <a href="https://github.com/Rahulpanwar8" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/techmcu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://x.com/techmcu" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition">
            <FaTwitter />
          </a>
          <a href="helprahulpanwar@gmail.com" aria-label="Email" className="hover:text-blue-400 transition">
            <FaEnvelope />
          
          
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;