import { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiRobotGolem } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Generate = () => {
  let { register, handleSubmit, reset } = useForm();
  let [userGenerated, setUserGenerated] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function authHanlder() {
      try {
        let response = await axios.get(
          "https://healthyfy-1.onrender.com/healthyfy/auth",
          {
            withCredentials: true,
          }
        );
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
          "https://healthyfy-1.onrender.com/healthyfy/allgenerations",
          {
            withCredentials: true,
          }
        );
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
        "https://healthyfy-1.onrender.com/healthyfy/generate",
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
      console.log(err.message);
    }
  }

  async function deleteHandler(e, gid) {
    e.preventDefault();
    e.stopPropagation();
    try {
      let response = await axios.post(
        "https://healthyfy-1.onrender.com/healthyfy/deleteGeneratedRecipe",
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

  // Responsive styles
  const styles = {
    chatContainer: {
      width: "100%",
      minHeight: "100vh",
      margin: 0,
      background: "#fff",
      color: "#222",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Segoe UI', 'Roboto', Arial, sans-serif",
    },
    header: {
      padding: "1rem 1.5rem",
      fontSize: "clamp(1.2rem, 4vw, 1.5rem)",
      fontWeight: 700,
      background: "#f6f8fa",
      borderBottom: "1px solid #eaecef",
      display: "flex",
      alignItems: "center",
      gap: "0.625rem",
      color: "#1a7f37",
      position: "sticky",
      top: 0,
      zIndex: 10,
    },
    messages: {
      flex: 1,
      padding: "1.5rem 1rem",
      overflowY: "auto",
      background: "#fff",
    },
    dishCardsRow: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "1.5rem",
      justifyContent: "center",
      margin: "2rem 0",
    },
    dishCard: {
      background: "#f6f8fa",
      border: "1px solid #eaecef",
      borderRadius: "1rem",
      boxShadow: "0 2px 8px rgba(34,139,34,0.07)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "1.125rem",
      transition: "transform 0.15s, box-shadow 0.15s",
      cursor: "pointer",
      textDecoration: "none",
      color: "inherit",
    },
    dishImage: {
      width: "5.625rem",
      height: "5.625rem",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "0.875rem",
      border: "3px solid #1a7f37",
      background: "#fff",
    },
    dishTitle: {
      fontWeight: 600,
      fontSize: "1.1rem",
      marginBottom: "0.375rem",
      color: "#1a7f37",
      textAlign: "center",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "0.3125rem",
      width: "100%",
    },
    inputRow: {
      display: "flex",
      padding: "1.25rem 1.5rem",
      borderTop: "1px solid #eaecef",
      background: "#fff",
      position: "sticky",
      bottom: 0,
    },
    input: {
      flex: 1,
      padding: "0.75rem 1rem",
      borderRadius: "0.625rem",
      border: "1px solid #eaecef",
      background: "#f6f8fa",
      color: "#222",
      fontSize: "1.05rem",
      outline: "none",
    },
    sendBtn: {
      marginLeft: "0.625rem",
      background: "#1a7f37",
      color: "#fff",
      border: "none",
      borderRadius: "0.625rem",
      padding: "0 1.375rem",
      fontSize: "1.3rem",
      cursor: "pointer",
      transition: "background 0.2s",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.header}>
        <GiRobotGolem size={28} />
        Healthyfy Bot
      </div>
      <div style={styles.messages}>
        {userGenerated.length === 0 ? (
          <h1
            style={{
              color: "green",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            Generate Custom Recipes Now...
          </h1>
        ) : (
          <h1
            style={{
              color: "green",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            My Generated Recipes
          </h1>
        )}
        <div style={styles.dishCardsRow}>
          {userGenerated?.map((dish, idx) => (
            <Link
              key={idx}
              to={`/generatedrecipe/${dish.generationid}`}
              style={styles.dishCard}
            >
              <img
                src={dish.imageurl}
                alt={dish.name}
                style={styles.dishImage}
                loading="lazy"
              />
              <div style={styles.dishTitle}>
                <span>{dish.name.toUpperCase()}</span>
                <button
                  value={dish.generationid}
                  onClick={(e) => deleteHandler(e, dish.generationid)}
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaTrash style={{ color: "brown", fontSize: "1.2rem" }} />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit(SubmitPrompt)} style={styles.inputRow}>
        <input
          type="text"
          {...register("prompt")}
          style={styles.input}
          placeholder="Ask Healthyfy Bot about recipes…"
        />
        <button style={styles.sendBtn} type="submit">
          <AiOutlineArrowRight />
        </button>
      </form>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .dish-cards-row {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) !important;
            gap: 1rem !important;
          }
          
          .dish-card {
            padding: 1rem !important;
          }
          
          .dish-image {
            width: 80px !important;
            height: 80px !important;
          }
        }
        
        @media (max-width: 480px) {
          .dish-cards-row {
            grid-template-columns: 1fr !important;
            max-width: 300px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .header {
            padding: 0.75rem 1rem !important;
          }
          
          .messages {
            padding: 1rem 0.5rem !important;
          }
          
          .input-row {
            padding: 1rem !important;
          }
        }
        
        @media (min-width: 1200px) {
          .dish-cards-row {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)) !important;
            gap: 2rem !important;
          }
        }
        
        /* Hover effects for larger screens */
        @media (hover: hover) {
          .dish-card:hover {
            transform: translateY(-6px) scale(1.04);
            box-shadow: 0 6px 24px rgba(34,139,34,0.13);
            border-color: #1a7f37;
          }
          
          .send-btn:hover {
            background: linear-gradient(90deg, #43c67a 60%, #1a7f37 100%) !important;
          }
        }
      `}</style>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Generate;
