import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function IndiviualRecipe() {
  const { rid } = useParams();
//   let [recipeName, setName] = useState("DishName");
  let [recipeImage, setImage] = useState(`c:/Users/DEBOTTAM/AppData/Local/Temp/world-food-day-2020.png.webp`);
  let recipeRef = useRef();
  useEffect(() => {
    async function getRecipe() {
      let response = await axios.get(
        `http://localhost:3333/healthyfy/recipe/${rid}`
      );
      console.log(response.statusText === "OK");
      let { name, imageurl, recipe } = response.data;
    //   setName(name);
      setImage(imageurl);
      recipeRef.current.innerHTML = recipe; 
    }
    getRecipe();
  }, []);
  return (
    <div style={{padding: "2rem"}} >
      {/* <h1>{recipeName}</h1> */}
      <img src={recipeImage} alt="Picture" style={{width: "400px", height: "250px"}} />
      <div className="recipe-body" ref={recipeRef}></div>
    </div>
  );
}

export default IndiviualRecipe;
