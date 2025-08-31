import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Profile() {
  const [username, setUsername] = useState("GUEST");
  const [nationality, setNationality] = useState("INTERNATIONAL");
  const [likedRecipes, setLikedRecipes] = useState([
    {
      rid: 0,
      name: "Like Some Recipe First",
      imageurl:
        "https://media.istockphoto.com/id/827247322/vector/danger-sign-vector-icon-attention-caution-illustration-business-concept-simple-flat-pictogram.jpg?s=612x612&w=0&k=20&c=BvyScQEVAM94DrdKVybDKc_s0FBxgYbu-Iv6u7yddbs=",
    },
  ]);
  let navigate = useNavigate();

  async function LogOutHandler() {
    try {
      let sure = confirm("Are you sure?");
      if (sure) {
        let response = await axios.get(
          "https://healthyfy-1.onrender.com/healthyfy/logout",
          { withCredentials: true }
        );
        if (response.status === 200 || response.statusText === "OK") {
          toast.success("Logged out successfully.");
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        }
      }
    } catch (err) {
      console.log(err.message);
      if (err.response.data.message) {
        console.log(err.response.data.message);
      }
    }
  }

  useEffect(() => {
    async function getProfileData() {
      try {
        let response = await axios.get(
          "https://healthyfy-1.onrender.com/healthyfy/profile",
          { withCredentials: true }
        );
        if (response.status === 200 || response.statusText === "OK") {
          let data = response.data;
          setUsername(data.name.toUpperCase());
          setNationality(data.nationality.toUpperCase());
        }
      } catch (error) {
        console.log(error.status === 401);
        navigate("/login");
      }
    }

    async function likedRecipe() {
      try {
        let response = await axios.get(
          "https://healthyfy-1.onrender.com/healthyfy/userLikes",
          { withCredentials: true }
        );
        let data = response.data;
        setLikedRecipes(data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.statusText + " " + err.response.status);
        } else {
          console.log(err.message);
        }
      }
    }
    likedRecipe();
    getProfileData();
  }, []);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img
          className="profile-avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          alt="User Avatar"
        />
        <div className="profile-username">{username}</div>
        <div className="profile-country">{nationality}</div>
        <button className="profile-logout-btn" onClick={LogOutHandler}>
          Log Out
        </button>
      </div>

      <h2 className="text-center mb-2" style={{ color: "green" }}>
        My Favorites
      </h2>

      <div className="profile-grid">
        {likedRecipes.map((recipe) => (
          <Link
            key={recipe.rid}
            className="profile-card-link"
            to={`/recipe/${recipe.rid}`}
          >
            <div className="profile-card">
              <img
                src={recipe.imageurl}
                alt={recipe.name}
                className="profile-card-img"
              />
              <div className="profile-card-title">{recipe.name}</div>
            </div>
          </Link>
        ))}
      </div>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default Profile;
