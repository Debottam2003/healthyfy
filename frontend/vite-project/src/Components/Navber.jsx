import React from "react";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaMagic } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

let LinkStyle = {
  textDecoration : "none",
  color: "green"
}

function Navber() {
  return (
      <div className="nav">
        <h1>𝓗</h1>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}><Link style = {LinkStyle} to="/"><FaHome size={30} style={{ cursor: "pointer" }} /></Link></div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}><Link style = {LinkStyle} to="/search"><FaSearch size={30} style={{ cursor: "pointer" }} /></Link></div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}><Link style = {LinkStyle} to="/generate"><FaMagic size={30} style={{ cursor: "pointer" }} /></Link></div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}><Link style = {LinkStyle} to="/profile"><FaUserCircle size={30} style={{ cursor: "pointer" }} /></Link></div>
      </div>
  );
}

export default Navber;
