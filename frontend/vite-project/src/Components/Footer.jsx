import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope, FaPhone } from "react-icons/fa";

function Header() {
  return (
    <footer
      style={{
        background: "rgb(18, 130, 64)",
        color: "#fff",
        width: "100%",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        {/* Brand Section */}
        <div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }}>
            MyWebsite
          </h2>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)" }}>
            Building modern experiences with style and simplicity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "10px" }}>
            Quick Links
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.9rem" }}>
            <li style={{ marginBottom: "6px", cursor: "pointer" }}>Home</li>
            <li style={{ marginBottom: "6px", cursor: "pointer" }}>About</li>
            <li style={{ marginBottom: "6px", cursor: "pointer" }}>Services</li>
            <li style={{ marginBottom: "6px", cursor: "pointer" }}>Contact</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "10px" }}>
            Contact
          </h3>

          {/* Emails */}
          <p style={{ fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <FaEnvelope /> debottam@gmail.com
          </p>
          <p style={{ fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <FaEnvelope /> samratkarmakarnaihati@gmail.com
          </p>
          <p style={{ fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <FaEnvelope /> gagan@gmail.com
          </p>

          {/* Phone */}
          <p
            style={{
              fontSize: "0.9rem",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "8px",
            }}
          >
            <FaPhone /> +91 9876543210
          </p>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: "15px", marginTop: "12px" }}>
            <FaFacebook
              style={{ fontSize: "1.8rem", cursor: "pointer" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#3b5998")}
              onMouseOut={(e) => (e.currentTarget.style.color = "white")}
            />
            <FaInstagram
              style={{ fontSize: "1.8rem", cursor: "pointer" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#E1306C")}
              onMouseOut={(e) => (e.currentTarget.style.color = "white")}
            />
            <FaYoutube
              style={{ fontSize: "1.8rem", cursor: "pointer" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#FF0000")}
              onMouseOut={(e) => (e.currentTarget.style.color = "white")}
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          background: "rgb(15, 100, 50)",
          textAlign: "center",
          padding: "15px 0",
          fontSize: "0.85rem",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        © {new Date().getFullYear()} Team-Chatu. All rights reserved.
      </div>
    </footer>
  );
}

export default Header;
