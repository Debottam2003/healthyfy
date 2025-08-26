import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiRobotGolem } from "react-icons/gi";

const styles = {
  chatContainer: {
    width: "100vw",
    height: "100vh",
    margin: 0,
    border: "none",
    borderRadius: 0,
    background: "#fff",
    color: "#222",
    boxShadow: "none",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Segoe UI', 'Roboto', Arial, sans-serif",
    minHeight: "100vh",
  },
  header: {
    padding: 24,
    fontSize: "1.5rem",
    fontWeight: 700,
    background: "#f6f8fa",
    borderBottom: "1px solid #eaecef",
    display: "flex",
    alignItems: "center",
    gap: 10,
    color: "#1a7f37", // green touch
  },
  messages: {
    flex: 1,
    padding: "32px 24px",
    overflowY: "auto",
    background: "#fff",
  },
  dishCardsRow: {
    display: "flex",
    gap: 24,
    justifyContent: "center",
    margin: "32px 0",
    flexWrap: "wrap",
  },
  dishCard: {
    background: "#f6f8fa",
    border: "1px solid #eaecef",
    borderRadius: 16,
    width: 220,
    boxShadow: "0 2px 8px rgba(34,139,34,0.07)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 18,
    transition: "transform 0.15s",
    cursor: "pointer",
  },
  dishImage: {
    width: 90,
    height: 90,
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: 14,
    border: "3px solid #1a7f37",
    background: "#fff",
  },
  dishTitle: {
    fontWeight: 600,
    fontSize: "1.1rem",
    marginBottom: 6,
    color: "#1a7f37",
    textAlign: "center",
  },
  dishDesc: {
    fontSize: "0.97rem",
    color: "#444",
    textAlign: "center",
    marginBottom: 0,
  },
  message: {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: 18,
  },
  messageUser: {
    flexDirection: "row-reverse",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "#eaecef",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 12px",
    fontSize: "1.5rem",
    border: "2px solid #1a7f37", // green touch
  },
  bubble: {
    maxWidth: "70%",
    padding: "14px 20px",
    borderRadius: 18,
    background: "#0969da",
    color: "#fff",
    fontSize: "1.05rem",
    lineHeight: 1.5,
  },
  bubbleBot: {
    background: "#f6f8fa",
    color: "#222",
    border: "1px solid #eaecef",
  },
  inputRow: {
    display: "flex",
    padding: "20px 24px",
    borderTop: "1px solid #eaecef",
    background: "#fff",
  },
  input: {
    flex: 1,
    padding: "12px 16px",
    borderRadius: 10,
    border: "1px solid #eaecef",
    background: "#f6f8fa",
    color: "#222",
    fontSize: "1.05rem",
    outline: "none",
  },
  sendBtn: {
    marginLeft: 10,
    background: "#1a7f37", // green
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "0 22px",
    fontSize: "1.3rem",
    cursor: "pointer",
    transition: "background 0.2s",
  },
};

const dishCards = [
  {
    title: "Quinoa Avocado Salad",
    desc: "A protein-packed salad with fresh veggies and creamy avocado.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Margherita Pizza",
    desc: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
    img: "https://www.acouplecooks.com/wp-content/uploads/2022/10/Margherita-Pizza-093.jpg",
  },
  {
    title: "Chicken Biriyani",
    desc: "Aromatic rice dish with tender chicken and spices.",
    img: "https://dindugalbiriyani.com/wp-content/uploads/2024/10/Chicken-Biryani-Recipe-1.jpg",
  },
];

function Message({ sender, text }) {
  return (
    <div
      style={{
        ...styles.message,
        ...(sender === "user" ? styles.messageUser : {}),
      }}
      className={`copilot-message ${sender}`}
    >
      <div style={styles.avatar} className="copilot-avatar">
        {sender === "bot" ? (
          <span role="img" aria-label="Healthyfy Bot">
            🥗
          </span>
        ) : (
          <span role="img" aria-label="User">
            🧑
          </span>
        )}
      </div>
      <div
        style={{
          ...styles.bubble,
          ...(sender === "bot" ? styles.bubbleBot : {}),
        }}
        className="copilot-bubble"
      >
        {text}
      </div>
    </div>
  );
}

function Generate() {
  return (
    <div style={styles.chatContainer} className="copilot-chat-container">
      <div style={styles.header} className="copilot-header">
        <GiRobotGolem size={28} />
        Healthyfy Bot
      </div>
      <div style={styles.messages} className="copilot-messages">
        <div style={styles.dishCardsRow}>
          {dishCards.map((dish, idx) => (
            <div key={idx} style={styles.dishCard} className="dish-card">
              <img
                src={dish.img}
                alt={dish.title}
                style={styles.dishImage}
                loading="lazy"
              />
              <div style={styles.dishTitle}>{dish.title}</div>
              <div style={styles.dishDesc}>{dish.desc}</div>
            </div>
          ))}
        </div>
        {/* Render messages here */}
      </div>
      <div style={styles.inputRow} className="copilot-input-row">
        <input
          type="text"
          style={styles.input}
          className="copilot-input"
          placeholder="Ask Healthyfy Bot about recipes…"
        />
        <button style={styles.sendBtn} className="copilot-send-btn">
          <span
            role="img"
            aria-label="Send"
            onClick={() => {
              alert("botam tipe dile ?");
            }}
          >
            <AiOutlineArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Generate;
