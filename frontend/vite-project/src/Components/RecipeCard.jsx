import React, { useEffect, useState } from "react";
import axios from "axios";
import Top from "./Top.jsx";
import { Link } from "react-router-dom";
import ScroollToTop from "./ScroollToTop.jsx";

function RecipeCard() {
  const [data, setData] = useState([]);
  const [liked, setLiked] = useState({}); // track likes per recipe
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3333/healthyfy/");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
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
      <Top></Top>
      <div
        className="recipe-cards"
        style={{
          columnCount: 3, // number of columns
          columnGap: "20px",
          padding: "20px",
        }}
      >
        {data.map((recipe) => {
          // OPTIONAL: Uncomment if you want random heights instead
          // const randomHeight = Math.floor(Math.random() * 150) + 250;

          return (
            <div
              className="cards"
              key={recipe.rid}
              style={{
                breakInside: "avoid",
                marginBottom: "20px",
                borderRadius: "16px",
                overflow: "hidden",
                background: "rgba(242, 242, 242, 0.99)",
                fontFamily: "arial, sans-serif",
                color: "rgba(0, 0, 0, 1)",
                // height: `${randomHeight}px`,  // <- enable for random sized cards
              }}
            >
              <img
                src={recipe.imageurl}
                alt="Recipe"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "16px" }}>
                <div
                  style={{
                    flexWrap: "nowrap",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h2
                    style={{
                      margin: "0 0 8px 0",
                      fontSize: "1.5rem",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    {recipe.name}
                  </h2>
                  <img
                    onClick={() => toggleLike(recipe.rid)}
                    src={
                      liked[recipe.rid]
                        ? "/images/redLove.png"
                        : "/images/whiteLove.png"
                    }
                    alt="like"
                    style={{ height: "35px", width: "35px", cursor: "pointer" }}
                  />
                </div>

                <div>{recipe.cuisine?.toUpperCase()}</div>
                <br />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.95rem",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                >
                  <span>❤️{recipe.likes_count}</span>
                  <span>{recipe.type === "veg" ? "🟢 Veg" : "🔴 Non Veg"}</span>
                </div>

                <Link style={{textDecoration: "none", color: "white"}} to={`/recipe/${recipe.rid}`}>
                <button
                  id={recipe.rid}
                  style={{
                    marginTop: "16px",
                    width: "100%",
                    padding: "10px 0",
                    background:
                      recipe.type === "non veg"
                        ? "linear-gradient(90deg, rgb(176, 31, 20) 0%, rgb(249, 201, 56) 100%)"
                        : "linear-gradient(90deg, rgb(18, 130, 64) 0%, rgb(74, 194, 37) 100%)",
                    color: "rgba(233, 233, 233, 1)",
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
                </Link>
              </div>
            </div>
          );
        })}
        <ScroollToTop/>
      </div>
    </>
  );
}

export default RecipeCard;
