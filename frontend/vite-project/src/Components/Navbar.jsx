import React from "react";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaMagic } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function Navber() {
  return (
      <div className="nav">
        <h1>𝓗</h1>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}><FaHome size={30} style={{ cursor: "pointer" }} /><span>Home</span></div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}><FaSearch size={30} style={{ cursor: "pointer" }} /><span>Search</span></div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}><FaMagic size={30} style={{ cursor: "pointer" }} /><span>Generate</span></div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}><FaUserCircle size={30} style={{ cursor: "pointer" }} /><span>Profile</span></div>
      </div>
  );
}

export default Navber;
