import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function GeneratedRecipe() {
  const { gid } = useParams();
  const [recipeImage, setImage] = useState(
    "https://via.placeholder.com/500x350?text=Recipe+Image"
  );
  const recipeRef = useRef();

  useEffect(() => {
    async function getRecipe() {
      try {
        const response = await axios.get(
          `https://healthyfy-1.onrender.com/healthyfy/userGenerations/${gid}`,
          { withCredentials: true }
        );
        const { imageurl, content: recipe } = response.data;
        setImage(imageurl);
        recipeRef.current.innerHTML = recipe;
      } catch (err) {
        console.error(err.response?.statusText || err.message);
      }
    }
    getRecipe();
  }, [gid]);

  return (
    <div style={styles.container}>
      <img src={recipeImage} alt="Recipe" style={styles.image} />
      <div className="recipe-body" ref={recipeRef} style={styles.recipeBody}></div>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap", // allows wrapping on smaller screens
  },
  recipeBody: {
    maxWidth: "600px",
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

export default GeneratedRecipe;