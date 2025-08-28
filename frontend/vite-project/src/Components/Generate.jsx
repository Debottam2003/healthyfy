import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiRobotGolem } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const styles = {
  chatContainer: {
    width: "95vw",
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

let userGenerate = {
  width: "200px",
  minHeight: 100,
  maxHeight: 100,
  margin: "0 auto 32px auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 8,
  overflowX: "hidden",
  overflowY: "auto",
  background: "#f6f8fa",
  border: "1px solid #eaecef",
  borderRadius: 14,
  padding: "18px 20px",
  boxShadow: "0 2px 8px rgba(34,139,34,0.06)",
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

function Generate() {
  let { register, handleSubmit, reset } = useForm();
  let [userGenerated, setUserGenerated] = useState(
    Array(10).fill({ rid: 10, name: "Veg Pasta" })
  );
  async function SubmitPrompt(data) {
    reset();
    alert(data.prompt);
  }
  return (
    <div
      style={styles.chatContainer}
      className="copilot-chat-container healthyfy-generate-root"
    >
      <div style={styles.header} className="copilot-header healthyfy-header">
        <GiRobotGolem size={28} />
        Healthyfy Bot
      </div>
      <div
        style={styles.messages}
        className="copilot-messages healthyfy-messages"
      >
        <div style={styles.dishCardsRow} className="healthyfy-dish-cards-row">
          {dishCards.map((dish, idx) => (
            <div
              key={idx}
              style={styles.dishCard}
              className="dish-card healthyfy-dish-card"
            >
              <img
                src={dish.img}
                alt={dish.title}
                style={styles.dishImage}
                className="healthyfy-dish-image"
                loading="lazy"
              />
              <div style={styles.dishTitle} className="healthyfy-dish-title">
                {dish.title}
              </div>
              <div style={styles.dishDesc} className="healthyfy-dish-desc">
                {dish.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={userGenerate} className="healthyfy-user-generate">
        {userGenerated.map((recipe, i) => (
          <Link
            key={i}
            style={{ textDecoration: "none" }}
            to={`/generatedrecipe/${recipe.rid}`}
          >
            <div className="healthyfy-user-recipe">{recipe.name}</div>
          </Link>
        ))}
      </div>
      <form
        onSubmit={handleSubmit(SubmitPrompt)}
        style={styles.inputRow}
        className="copilot-input-row healthyfy-input-row"
      >
        <input
          type="text"
          {...register("prompt")}
          style={styles.input}
          className="copilot-input healthyfy-input"
          placeholder="Ask Healthyfy Bot about recipes…"
        />
        <button
          style={styles.sendBtn}
          className="copilot-send-btn healthyfy-send-btn"
        >
          <span role="img" aria-label="Send">
            <AiOutlineArrowRight />
          </span>
        </button>
      </form>
      <style>{`
        .healthyfy-generate-root {
          background: linear-gradient(120deg, #f6f8fa 0%, #e9f5ec 100%);
        }
        .healthyfy-header {
          background: linear-gradient(90deg, #e9f5ec 60%, #f6f8fa 100%);
          border-bottom: 2px solid #b7e4c7;
          box-shadow: 0 2px 8px rgba(34,139,34,0.04);
        }
        .healthyfy-dish-cards-row {
          gap: 32px;
        }
        .healthyfy-dish-card {
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .healthyfy-dish-card:hover {
          transform: translateY(-6px) scale(1.04);
          box-shadow: 0 6px 24px rgba(34,139,34,0.13);
          border-color: #1a7f37;
        }
        .healthyfy-dish-title {
          font-family: 'Segoe UI Semibold', 'Roboto', Arial, sans-serif;
          letter-spacing: 0.5px;
        }
        .healthyfy-dish-desc {
          color: #3a3a3a;
        }
        .healthyfy-user-generate {
          box-shadow: 0 2px 12px rgba(34,139,34,0.09);
          background: linear-gradient(120deg, #e9f5ec 0%, #f6f8fa 100%);
        }
        .healthyfy-user-recipe {
          font-size: 1.07rem;
          color: #1a7f37;
          font-weight: 500;
          margin-bottom: 6px;
          letter-spacing: 0.2px;
        }
        .healthyfy-input-row {
          background: #f6f8fa;
          border-top: 2px solid #b7e4c7;
        }
        .healthyfy-input {
          background: #e9f5ec;
          border: 1.5px solid #b7e4c7;
          transition: border 0.18s;
        }
        .healthyfy-input:focus {
          border: 1.5px solid #1a7f37;
          background: #fff;
        }
        .healthyfy-send-btn {
          background: linear-gradient(90deg, #1a7f37 60%, #43c67a 100%);
          box-shadow: 0 2px 8px rgba(34,139,34,0.09);
          font-weight: 600;
        }
        .healthyfy-send-btn:hover {
          background: linear-gradient(90deg, #43c67a 60%, #1a7f37 100%);
        }
        @media (max-width: 700px) {
          .healthyfy-dish-cards-row {
            flex-direction: column;
            align-items: center;
            gap: 18px;
          }
          .healthyfy-dish-card {
            width: 90vw !important;
            min-width: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Generate;
