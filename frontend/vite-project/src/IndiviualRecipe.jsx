import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function IndiviualRecipe() {
  const { rid } = useParams();
  const [recipeImage, setImage] = useState(
    "https://media.istockphoto.com/id/943483254/vector/fresh-tasty-grilled-roasted-chicken-turkey-legs-with-vegetables-sliced-potato-cucumber.jpg?s=612x612&w=0&k=20&c=qNYr2kI9cku2On18No0EsLO7-GYmCtaMbv2ZBKYzrfQ="
  );
  const recipeRef = useRef();

  useEffect(() => {
    async function getRecipe() {
      try {
        const response = await axios.get(
          `https://healthyfy-1.onrender.com/healthyfy/recipe/${rid}`
        );
        const { imageurl, recipe } = response.data;
        setImage(imageurl);
        recipeRef.current.innerHTML = recipe;
      } catch (err) {
        console.error(err.response?.statusText || err.message);
      }
    }
    getRecipe();
  }, [rid]);

  return (
    <div style={styles.container}>
      <img src={recipeImage} alt="Recipe" style={styles.image} />
      <div
        className="recipe-body"
        ref={recipeRef}
        style={styles.recipeBody}
      ></div>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap", // allows wrapping on smaller screens
  },
  recipeBody: {
    maxWidth: "500px",
    flex: "1 1 300px",
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    objectFit: "cover",
    flex: "1 1 300px",
  },
};

export default IndiviualRecipe;
