import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function RecipeCard() {
  let [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3333/healthyfy/");
        setData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {data.map((recipe) => (
        <div
          className="cards"
          key={recipe.rid}
          style={{
            width: "350px",
            border: "1px solid #000000ff",
            borderRadius: "16px",
            boxShadow: "0 0px 10px gold",
            overflow: "hidden",
            background: "#000000fc",
            fontFamily: "cursive",
            color: "#ddddddff",
          }}
        >
          <img
            src={recipe.imageurl}
            alt="Recipe"
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <div style={{ padding: "16px" }}>
            <div style={{display:"flex",flexWrap:"no-wrap",justifyContent:"space-between"}}>
              <h2
              style={{
                margin: "0 0 8px 0",
                fontSize: "1.5rem",
                color: "#ddddddff",
              }}>
              {recipe.name}
            </h2>
              <img
              id="loveIMG"
              // ONCLICK...?
              src="../../public/images/love.svg"
              alt="like"
              style={{height:"35px",width:"35px",cursor:"pointer"}}
              />
            </div>
            <div>{recipe.cuisine.toUpperCase()}</div>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.95rem",
                color: "#ddddddff",
              }}
            >
              <span>❤️100</span>
              <span> {recipe.type === "veg" ? "🟢 Veg" : "🔴 Non Veg"} </span>
            </div>
            <button
              style={{
                marginTop: "16px",
                width: "100%",
                padding: "10px 0",
                background:
                  recipe.type === "non veg" ? "linear-gradient(90deg, #b01f14ff 0%, #f9c938ff 100%)"  :                           "linear-gradient(90deg, #128240ff 0%, #4ac225ff 100%)",
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
