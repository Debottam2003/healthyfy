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
    <div className="about-page">
      <h1 className="about-header">Meet Our Team</h1>

      <div className="about-team-grid">
        {team.map((member, index) => (
          <div key={index} className="about-team-member">
            <div className="about-member-image">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                  className="user-img"
                />
              ) : null}
            </div>

            <h2 className="about-member-name">{member.name}</h2>

            <p className="about-member-role">{member.role}</p>

            <p className="about-member-bio">{member.bio}</p>
          </div>
        ))}
      </div>

      <div className="about-content">
        <h2>About Healthyfy</h2>

        <p>
          Healthyfy is a recipe platform designed to help you discover, create,
          and share delicious and healthy meals. Our AI-powered recipe generator
          can create custom recipes based on your preferences, dietary
          restrictions, and available ingredients.
        </p>
      </div>
    </div>
  );
}

export default About;
