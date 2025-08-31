// IndividualRecipe.js
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";

function GeneratedRecipe() {
  const { gid } = useParams();
  const [recipeImage, setImage] = useState("https://media.istockphoto.com/id/943483254/vector/fresh-tasty-grilled-roasted-chicken-turkey-legs-with-vegetables-sliced-potato-cucumber.jpg?s=612x612&w=0&k=20&c=qNYr2kI9cku2On18No0EsLO7-GYmCtaMbv2ZBKYzrfQ=");
  const recipeRef = useRef();

  useEffect(() => {
    async function getRecipe() {
      try {
        let response = await axios.get(
          `https://healthyfy-1.onrender.com/healthyfy/userGenerations/${gid}`,{withCredentials:true}
        );
        let { imageurl, content:recipe } = response.data;
        setImage(imageurl);
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
  }, [gid]);

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

export default GeneratedRecipe;