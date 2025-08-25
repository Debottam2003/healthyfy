import React from "react";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaMagic } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function Navber() {
  return (
      <div className="nav">
        <h1>H</h1>
        <FaHome size={30} style={{ cursor: "pointer" }} />
        <FaSearch size={30} style={{ cursor: "pointer" }} />
        <FaMagic size={30} style={{ cursor: "pointer" }} />
        <FaUserCircle size={30} style={{ cursor: "pointer" }} />
      </div>
  );
}

export default Navber;
