import React, { useEffect, useState } from "react";
import axios from "axios";

function RecipeCard() {
  const [data, setData] = useState([]);
  const [liked, setLiked] = useState({}); // track likes per recipe

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3333/healthyfy/");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    }
    fetchData();
  }, []);

  const toggleLike = (rid) => {
    setLiked((prev) => ({
      ...prev,
      [rid]: !prev[rid],
    }));
  };

  return (
    <>
      {data.map((recipe) => (
        <div
          className="cards"
          key={recipe.rid}
          style={{
            width: "350px",
            border: "1px solid #000",
            borderRadius: "16px",
            boxShadow: "0 0px 10px gold",
            overflow: "hidden",
            background: "#000000fc",
            fontFamily: "cursive",
            color: "#ddd",
          }}
        >
          <img
            src={recipe.imageurl}
            alt="Recipe"
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <div style={{ padding: "16px" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  margin: "0 0 8px 0",
                  fontSize: "1.5rem",
                  color: "#ddd",
                }}
              >
                {recipe.name}
              </h2>
              <img
                onClick={() => toggleLike(recipe.rid)}
                src={liked[recipe.rid] ? "/images/redLove.png" : "/images/whiteLove.png"}
                alt="like"
                style={{ height: "35px", width: "35px", cursor: "pointer" }}
              />
            </div>

            <div>{recipe.cuisine.toUpperCase()}</div>
            <br />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.95rem",
                color: "#ddd",
              }}
            >
              <span>❤️ 100</span>
              <span>{recipe.type === "veg" ? "🟢 Veg" : "🔴 Non Veg"}</span>
            </div>

            <button
              style={{
                marginTop: "16px",
                width: "100%",
                padding: "10px 0",
                background:
                  recipe.type === "non veg"
                    ? "linear-gradient(90deg, #b01f14 0%, #f9c938 100%)"
                    : "linear-gradient(90deg, #128240 0%, #4ac225 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              View Recipe
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default RecipeCard;
