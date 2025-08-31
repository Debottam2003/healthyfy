import { FaHome, FaInfoCircle, FaMagic, FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if current path matches to highlight active link
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <div 
        className="mobile-menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      {/* Navbar */}
      <div className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <h1 className="nav-logo">𝓗</h1>
        
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <FaHome size={24} />
            <span className="nav-link-text">Home</span>
          </Link>
          
          <Link 
            to="/generate" 
            className={`nav-link ${isActive('/generate') ? 'nav-link-active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <FaMagic size={24} />
            <span className="nav-link-text">Generate</span>
          </Link>
          
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <FaInfoCircle size={24} />
            <span className="nav-link-text">About</span>
          </Link>
          
          <Link 
            to="/profile" 
            className={`nav-link ${isActive('/profile') ? 'nav-link-active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <FaUserCircle size={24} />
            <span className="nav-link-text">Profile</span>
          </Link>
        </div>
      </div>

      {/* Overlay for mobile when menu is open */}
      {isMenuOpen && (
        <div 
          className="nav-overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <style jsx>{`
        /* Base Navbar Styles */
        .nav {
          position: fixed;
          left: 0;
          top: 0;
          display: flex;
          flex-direction: column;
          height: 100vh;
          width: 80px;
          justify-content: flex-start;
          background-color: white;
          align-items: center;
          color: rgb(18, 130, 64);
          border-right: 1px solid rgb(18, 130, 64);
          z-index: 100;
          padding-top: 20px;
          transition: transform 0.3s ease-in-out;
        }
        
        .nav-logo {
          color: rgb(18, 130, 64);
          margin-bottom: 2rem;
          font-size: 2rem;
        }
        
        .nav-links {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;
          padding: 0 10px;
        }
        
        .nav-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          color: rgb(18, 130, 64);
          padding: 12px 0;
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        
        .nav-link:hover {
          background-color: rgba(18, 130, 64, 0.1);
        }
        
        .nav-link-active {
          background-color: rgba(18, 130, 64, 0.15);
        }
        
        .nav-link-text {
          font-size: 0.7rem;
          margin-top: 5px;
          font-weight: 500;
        }
        
        /* Mobile Menu Toggle (hidden on desktop) */
        .mobile-menu-toggle {
          display: none;
          position: fixed;
          top: 15px;
          left: 15px;
          z-index: 200;
          flex-direction: column;
          justify-content: space-around;
          width: 30px;
          height: 30px;
          background: white;
          border-radius: 4px;
          border: 1px solid rgb(18, 130, 64);
          padding: 5px;
          cursor: pointer;
        }
        
        .hamburger-line {
          height: 3px;
          width: 100%;
          background-color: rgb(18, 130, 64);
          border-radius: 2px;
        }
        
        /* Overlay for mobile */
        .nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 90;
          display: none;
        }
        
        /* Responsive Styles */
        @media (max-width: 768px) {
          .nav {
            transform: translateX(-100%);
            width: 70vw;
            max-width: 250px;
            box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
          }
          
          .nav-open {
            transform: translateX(0);
          }
          
          .mobile-menu-toggle {
            display: flex;
          }
          
          .nav-overlay {
            display: block;
          }
          
          .nav-link {
            flex-direction: row;
            justify-content: flex-start;
            padding: 15px 20px;
            gap: 15px;
          }
          
          .nav-link-text {
            font-size: 1rem;
            margin-top: 0;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .nav {
            width: 90px;
          }
          
          .nav-logo {
            font-size: 1.8rem;
          }
          
          .nav-link {
            padding: 15px 0;
          }
          
          .nav-link svg {
            width: 28px;
            height: 28px;
          }
        }
        
        @media (min-width: 1025px) {
          .nav {
            width: 100px;
          }
          
          .nav-logo {
            font-size: 2.2rem;
          }
          
          .nav-link {
            padding: 18px 0;
          }
          
          .nav-link svg {
            width: 30px;
            height: 30px;
          }
          
          .nav-link-text {
            font-size: 0.8rem;
          }
        }
        
        /* Large screens */
        @media (min-width: 1440px) {
          .nav {
            width: 120px;
          }
          
          .nav-logo {
            font-size: 2.5rem;
            margin-bottom: 3rem;
          }
          
          .nav-links {
            gap: 2.5rem;
          }
          
          .nav-link {
            padding: 20px 0;
          }
          
          .nav-link svg {
            width: 32px;
            height: 32px;
          }
          
          .nav-link-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;