// IndividualRecipe.js
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";

function IndividualRecipe() {
  const { rid } = useParams();
  const [recipeImage, setImage] = useState("/images/redLove.png");
  // const [recipeData, setRecipeData] = useState(null);
  const recipeRef = useRef();

  useEffect(() => {
    async function getRecipe() {
      try {
        let response = await axios.get(
          `https://healthyfy-1.onrender.com/healthyfy/recipe/${rid}`
        );
        let { imageurl, recipe,} = response.data;
        setImage(imageurl);
        // setRecipeData({ title });
        recipeRef.current.innerHTML = recipe;
      } catch (err) {
        if (err.response) {
          console.log(err.response.statusText);
          console.log(err.response.data.message);
        } else {
          console.log(err.message);
        }
      }
    }
    getRecipe();
  }, [rid]);

  return (
    <div className="recipe-page">
      <div 
        className="recipe-background" 
        style={{ backgroundImage: `url("${recipeImage}")` }}
      ></div>
      
      <div className="recipe-content">
        <div className="recipe-header">
          <h1 className="recipe-title">Awesome Recipes from Healthyfy</h1>
        </div>
        
        <div className="recipe-container">
          <div className="recipe-image-container">
            <img src={recipeImage} alt="Recipe" className="recipe-image" />
          </div>
          <div className="recipe-body" ref={recipeRef}></div>
        </div>
      </div>
    </div>
  );
}

export default IndividualRecipe;