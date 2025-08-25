import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaSearch } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';

function Navber() {
  return (
    <div className='nav' >
    <h1><FaHome /></h1>
    <h1><FaSearch /></h1>
    <h1><FaInfoCircle /></h1>
    </div>
    //icons
  )
}

export default Navber