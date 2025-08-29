import React from "react";

const team = [
  {
    name: "Gaganandra Mondal",
    role: "Full Stack Developer",
    bio: "Passionate about creating seamless web applications from frontend to backend.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Shubhranil Karmakar",
    role: "Full Stack Developer",
    bio: "Enjoys building scalable systems and delivering robust solutions across the stack.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Debottam Kar",
    role: "Full Stack Developer",
    bio: "Loves designing and coding complete solutions with clean architecture and performance in mind.",
    image: "/images/deb.png",
  },
];

function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0fdf4",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#065f46",
          marginBottom: "40px",
        }}
      >
        Meet Our Team
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {team.map((member, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#bbf7d0",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#86efac";
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 8px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#bbf7d0";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 8px rgba(0, 0, 0, 0.1)";
            }}
          >
            <img
              src={member.image}
              alt={member.name}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                border: "4px solid #34d399",
                objectFit: "cover",
                marginBottom: "15px",
              }}
            />
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "#064e3b",
              }}
            >
              {member.name}
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#047857",
                marginBottom: "10px",
              }}
            >
              {member.role}
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#065f46",
              }}
            >
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
