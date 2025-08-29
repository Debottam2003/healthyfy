import { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiRobotGolem } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

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
    overflow: "hidden",
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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "5px",
  },
  dishDesc: {
    fontSize: "0.97rem",
    color: "#444",
    textAlign: "center",
    marginBottom: 0,
  },
  message: {
    display: "flex",
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

const userGenerate = {
  width: "200px",
  minHeight: "200px",
  maxHeight: "200px",
  margin: "0 auto 32px auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  overflowX: "hidden",
  overflowY: "auto",
  background: "#f6f8fa",
  border: "1px solid #eaecef",
  borderRadius: "14px",
  padding: "18px 20px",
  boxShadow: "0 2px 8px rgba(34,139,34,0.06)",
};

const dishCards = [];
// const dishCards = [
//   {
//     generationid: 1,
//     name: "Quinoa Avocado Salad",
//     imageurl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     generationid: 2,
//     name: "Margherita Pizza",
//     imageurl: "https://www.acouplecooks.com/wp-content/uploads/2022/10/Margherita-Pizza-093.jpg",
//   },
//   {
//     generationid: 3,
//     name: "Chicken Biriyani",
//     imageurl: "https://dindugalbiriyani.com/wp-content/uploads/2024/10/Chicken-Biryani-Recipe-1.jpg",
//   },
// ];

function Generate() {
  let { register, handleSubmit, reset } = useForm();
  // let [userGenerated, setUserGenerated] = useState(
  //   Array(2).fill({ rid: 10, name: "Veg Pasta" })
  // );
  let [userGenerated, setUserGenerated] = useState(dishCards);
  let navigate = useNavigate();
  useEffect(() => {
    async function authHanlder() {
      try {
        let response = await axios.get("http://localhost:3333/healthyfy/auth", {
          withCredentials: true,
        });
        console.log(response.data.message);
      } catch (err) {
        console.log(err.message);
        navigate("/login");
      }
    }
    authHanlder();
  }, []);

  useEffect(() => {
    async function fecthGeneratedRecipes() {
      try {
        let response = await axios.get(
          "http://localhost:3333/healthyfy/allgenerations",
          {
            withCredentials: true,
          }
        );
        // console.log(response.data);
        if (response.data.length > 0) {
          setUserGenerated(response.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    fecthGeneratedRecipes();
  }, []);

  async function SubmitPrompt(data) {
    try {
      console.log(data.prompt);
      const promise = axios.post(
        "http://localhost:3333/healthyfy/generate",
        data,
        { withCredentials: true }
      );

      toast.promise(promise, {
        loading: "Generating recipe...",
        success: "Recipe generated successfully 🎉",
        error: "Failed to generate recipe ❌",
      });

      let response = await promise;
      setUserGenerated((prevdata) => {
        return [...prevdata, response.data];
      });
      setTimeout(() => {
        navigate(`/generatedrecipe/${response.data.generationid}`);
      }, 1000);
      reset();
    } catch (err) {
      // alert(err.message);
      console.log(err.message);
      // toast.error("Error Generatig the recipe.");
    }
    // reset();
    // alert(data.prompt);
  }

  async function deleteHandler(e, gid) {
    e.preventDefault(); // stops the link navigation
    e.stopPropagation();
    // console.log(e.currentTarget.value);
    // alert("delete button clicked for " + gid);
    try {
      let response = await axios.post(
        "http://localhost:3333/healthyfy/deleteGeneratedRecipe",
        { gid },
        {
          withCredentials: true,
        }
      );
      if (response.status === 200 || response.statusText === "OK") {
        let sure = confirm("Are you sure?");
        if (sure) {
          alert("deletion done");
          let newData = userGenerated.filter((dish) => {
            if (dish.generationid !== gid) {
              return dish;
            }
          });
          setUserGenerated(newData);
        }
      }
    } catch (err) {
      console.log(err.message);
    }
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
        style={{ ...styles.messages }}
        className="copilot-messages healthyfy-messages"
      >
        {userGenerated.length === 0 ? (
          <h1 style={{ color: "green", textAlign: "center" }}>
            Generate Custom Recipes Now...
          </h1>
        ) : (
          <h1 style={{ color: "green", textAlign: "center" }}>
            My Generated Recipes
          </h1>
        )}
        <div style={styles.dishCardsRow} className="healthyfy-dish-cards-row">
          {userGenerated?.map((dish, idx) => (
            <Link
              key={idx}
              style={{ textDecoration: "none" }}
              to={`/generatedrecipe/${dish.generationid}`}
            >
              <div
                key={idx}
                style={styles.dishCard}
                className="dish-card healthyfy-dish-card"
              >
                <img
                  src={dish.imageurl}
                  alt={dish.name}
                  style={styles.dishImage}
                  className="healthyfy-dish-image"
                  loading="lazy"
                />
                <div style={styles.dishTitle} className="healthyfy-dish-title">
                  {dish.name.toUpperCase()}
                  <button
                    value={dish.generationid}
                    onClick={(e) => deleteHandler(e, dish.generationid)}
                    style={{
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                    }}
                  >
                    <FaTrash style={{ color: "brown", fontSize: "1.2rem" }} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
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
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default Generate;
