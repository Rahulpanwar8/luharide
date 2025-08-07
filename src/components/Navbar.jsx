// Navbar.jsx
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
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Right - Buttons then Social Icons */}
        <div className="flex items-center gap-4 text-sm font-semibold">
          <Link
            to="/contactpage"
            className="bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg transition"
          >
            Login
          </Link>
          <Link
            to="/register-union"
            className="bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded-lg transition"
          >
            Register Union
          </Link>
          <div className="flex items-center gap-2 ml-4">
            <a
              href="https://www.instagram.com/techmcu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://twitter.com/techmcu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
