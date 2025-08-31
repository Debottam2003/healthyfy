import { FaHome, FaInfoCircle, FaMagic, FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div
        className="mobile-menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      <div className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
        <h1 className="nav-logo">𝓗</h1>

        <div className="nav-links">
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "nav-link-active" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <FaHome size={24} />
            <span className="nav-link-text">Home</span>
          </Link>

          <Link
            to="/generate"
            className={`nav-link ${
              isActive("/generate") ? "nav-link-active" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <FaMagic size={24} />
            <span className="nav-link-text">Generate</span>
          </Link>

          <Link
            to="/about"
            className={`nav-link ${
              isActive("/about") ? "nav-link-active" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <FaInfoCircle size={24} />
            <span className="nav-link-text">About</span>
          </Link>

          <Link
            to="/profile"
            className={`nav-link ${
              isActive("/profile") ? "nav-link-active" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <FaUserCircle size={24} />
            <span className="nav-link-text">Profile</span>
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="nav-overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </>
  );
}

export default Navbar;
