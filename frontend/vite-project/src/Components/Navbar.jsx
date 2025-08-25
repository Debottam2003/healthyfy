import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaSearch } from 'react-icons/fa';
import { FaMagic } from 'react-icons/fa';

function Navber() {
  return (
    <div className='nav' style={{padding:"10px",display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}} >
    <FaHome size={40} style={{cursor:"pointer"}}/>
    <FaSearch size={40} style={{cursor:"pointer"}}/>
    <FaMagic size={40} style={{cursor:"pointer"}}/>
    </div>
    //icons
  )
}

export default Navber