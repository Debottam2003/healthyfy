import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

function Header() {
  return (
    <div>
      <footer style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        background: 'rgb(18, 130, 64)',
        color: '#fff',
        gap: '20px',
        width: '100%',
        height: "100px"
      }}>
        <FaFacebook style={{ cursor: 'pointer', fontSize: '2rem' }} />
        <FaInstagram style={{ cursor: 'pointer', fontSize: '2rem' }} />
        <FaYoutube style={{ cursor: 'pointer', fontSize: '2rem' }} />
        <br />
        <div>
          <h3><pre><span> debottam@gmail.com  </span><span> samratkarmakarnaihati@gmail.com </span><span> gagan@gmail.com </span></pre></h3>
        </div>
      </footer>
    </div>
  )
}

export default Header