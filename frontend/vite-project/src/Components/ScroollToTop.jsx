import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScroollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const [hover, setHover] = useState(false);

  const scrollToTopStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: hover ? "rgb(18, 130, 64)" : "rgba(39, 171, 94, 1)",
    color: "white",
    border: "none",
    padding: "12px 16px",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "20px",
    transition: "background 0.3s",
  };

  const iconStyle = {
    transition: "transform 0.3s ease-in-out",
    transform: hover ? "rotate(360deg)" : "rotate(0deg)",
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
        style={scrollToTopStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <AiOutlineArrowUp style={iconStyle} />
      </button>
    )
  );
};

export default ScroollToTop;
