const team = [
  {
    name: "Gaganandra Mondal",
    role: "Full Stack Developer",
    bio: "Passionate about creating seamless web applications from frontend to backend.",
    image: "/images/gagan.png",
  },
  {
    name: "Shubhranil Karmakar",
    role: "Full Stack Developer",
    bio: "Enjoys building scalable systems and delivering robust solutions across the stack.",
    image: "/images/shub.png",
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
        padding: "clamp(20px, 5vw, 40px)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(1.8rem, 6vw, 2.5rem)",
          fontWeight: "bold",
          color: "#065f46",
          marginBottom: "clamp(20px, 5vw, 40px)",
          padding: "0 10px",
        }}
      >
        Meet Our Team
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
          gap: "clamp(20px, 4vw, 30px)",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          padding: "0 clamp(10px, 3vw, 20px)",
        }}
      >
        {team.map((member, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#bbf7d0",
              padding: "clamp(15px, 3vw, 20px)",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
            {/* Placeholder for image with fallback */}
            <div
              style={{
                width: "clamp(80px, 20vw, 120px)",
                height: "clamp(80px, 20vw, 120px)",
                borderRadius: "50%",
                border: "4px solid #34d399",
                backgroundColor: "#d1fae5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "clamp(10px, 2vw, 15px)",
                overflow: "hidden",
              }}
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div
                style={{
                  display: member.image ? 'none' : 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                  fontWeight: 'bold',
                  color: '#065f46',
                }}
              >
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            
            <h2
              style={{
                fontSize: "clamp(1.1rem, 3vw, 1.25rem)",
                fontWeight: "600",
                color: "#064e3b",
                margin: "0 0 8px 0",
                lineHeight: "1.3",
              }}
            >
              {member.name}
            </h2>
            
            <p
              style={{
                fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                color: "#047857",
                margin: "0 0 12px 0",
                fontWeight: "500",
              }}
            >
              {member.role}
            </p>
            
            <p
              style={{
                fontSize: "clamp(0.85rem, 2.5vw, 0.9rem)",
                color: "#065f46",
                lineHeight: "1.5",
                margin: 0,
              }}
            >
              {member.bio}
            </p>
          </div>
        ))}
      </div>

      {/* Additional responsive section */}
      <div
        style={{
          maxWidth: "800px",
          margin: "clamp(30px, 6vw, 50px) auto 0",
          padding: "0 clamp(15px, 4vw, 30px)",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
            fontWeight: "600",
            color: "#065f46",
            marginBottom: "20px",
          }}
        >
          About Healthyfy
        </h2>
        
        <p
          style={{
            fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
            color: "#065f46",
            lineHeight: "1.6",
            textAlign: "left",
          }}
        >
          Healthyfy is a recipe platform designed to help you discover, create, and share 
          delicious and healthy meals. Our AI-powered recipe generator can create custom 
          recipes based on your preferences, dietary restrictions, and available ingredients.
        </p>
      </div>
    </div>
  );
}

export default About;