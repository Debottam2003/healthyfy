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
        background: '#222',
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
          <p><pre>debottam@gmail.com   samratkarmakarnaihati@gmail.com   gaganchoda@gmail.com</pre></p>
        </div>
      </footer>
    </div>
  )
}

export default Header