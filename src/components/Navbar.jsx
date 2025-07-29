import { FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Rahul.ico";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
        
        {/* Left - Logo */}
        <div className="flex items-center">
          <Link to="/" aria-label="Home">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-auto" // responsive small logo
            />
          </Link>
        </div>

        {/* Right - Icons and Login */}
        <div className="flex items-center gap-3 text-base">
          <a
            href="https://www.instagram.com/techmcu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://twitter.com/techmcu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter size={20} />
          </a>

          <Link
            to="/contactpage"
            className="text-sm bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg font-semibold transition duration-300"
            aria-label="Contact Page"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
