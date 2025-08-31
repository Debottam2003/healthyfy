import { FaEnvelope, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
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
          padding: "2.5rem 1.25rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {/* Brand Section */}
        <div>
          <h2
            style={{
              fontSize: "clamp(1.25rem, 4vw, 1.5rem)",
              fontWeight: "bold",
              marginBottom: "0.625rem",
            }}
          >
            Healthyfy
          </h2>
          <p
            style={{
              fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)",
              color: "rgba(255,255,255,0.8)",
              lineHeight: "1.5",
            }}
          >
            Bring the entire world cuisine to your small kitchen.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            style={{
              fontSize: "clamp(1rem, 3vw, 1.1rem)",
              fontWeight: "600",
              marginBottom: "0.625rem",
            }}
          >
            Quick Links
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)",
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  display: "block",
                }}
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  display: "block",
                }}
                to={"/about"}
              >
                About
              </Link>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  display: "block",
                }}
                to={"/generate"}
              >
                Generated Recipes
              </Link>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  display: "block",
                }}
                to={"https://ice-scoop.onrender.com/icescoop/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Other Projects
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3
            style={{
              fontSize: "clamp(1rem, 3vw, 1.1rem)",
              fontWeight: "600",
              marginBottom: "0.625rem",
            }}
          >
            Contacts
          </h3>

          {/* Team Members */}
          <div style={{ marginBottom: "1rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                flexWrap: "wrap",
                marginBottom: "0.5rem",
              }}
            >
              <FaEnvelope size={14} />
              <span style={{ fontSize: "clamp(0.8rem, 2.5vw, 1rem)" }}>
                debottamkar2003@gmail.com
              </span>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
                target="_blank"
                rel="noopener noreferrer"
                to="https://github.com/Debottam2003"
              >
                <FaGithub size={18} />
                <span>Debottam</span>
              </Link>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                flexWrap: "wrap",
                marginBottom: "0.5rem",
              }}
            >
              <FaEnvelope size={14} />
              <span style={{ fontSize: "clamp(0.8rem, 2.5vw, 1rem)" }}>
                samratkarmakarnaihati@gmail.com
              </span>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
                target="_blank"
                rel="noopener noreferrer"
                to="https://github.com/Shubh-2025"
              >
                <FaGithub size={18} />
                <span>Shubhranil</span>
              </Link>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                flexWrap: "wrap",
                marginBottom: "0.5rem",
              }}
            >
              <FaEnvelope size={14} />
              <span style={{ fontSize: "clamp(0.8rem, 2.5vw, 1rem)" }}>
                mondalgaganandra@gmail.com
              </span>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
                target="_blank"
                rel="noopener noreferrer"
                to="https://github.com/Gaganandra-Mondal"
              >
                <FaGithub size={18} />
                <span>Gagan</span>
              </Link>
            </div>
          </div>

          {/* Project Github Link */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              target="_blank"
              rel="noopener noreferrer"
              to="https://github.com/Debottam2003/healthyfy"
            >
              <FaGithub size={20} />
              <span style={{ fontSize: "clamp(0.8rem, 2.5vw, 1rem)" }}>
                Healthyfy Github
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          background: "rgb(15, 100, 50)",
          textAlign: "center",
          padding: "0.9375rem 0",
          fontSize: "clamp(0.75rem, 2.5vw, 0.85rem)",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        © {new Date().getFullYear()} Team-Chatu. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
