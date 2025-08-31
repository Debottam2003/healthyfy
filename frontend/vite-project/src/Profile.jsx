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
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAACUCAMAAAAXgxO4AAAAb1BMVEX///8jISIAAAAkJCTm5uYdGxwdHR0ZGRn8/PwgHh/u7u75+fkhISH09PQVFRUYFhfU1NTb29uioqK2trZ+fn4LCws+Pj69vb2KioqXl5fKyspfX1+QkJDExMR4eHgtLS03NzdHR0dsbGxVVVWtrK0w0IBmAAAG1klEQVR4nO1b6dKiuhbFBDBAGBSCKCqDvv8znkASQJnsewnwVWVV/+gKtL1MdtYe1TQFBQUFBQUFBQUFBQUFBQUFBQWFvwb08Xc0+t4O4eiXqMCwiELd2ZrLv+B0zwDwDcMHIEuCrdn8CqSFMTAOHAbIw60Z/Qh0xv6hA984/wUzR9q73W6x6e+/wDwgDW8smJO/YOcv0vDGEDLu5LV/UQwBYw194NE/jDkE4b6ZI82Jj4w4iAPbDgoA670/xvuWc6QlhBkHiNhKBJjRkGRbZnMI4mO9xV6hM9vQXz6siJvxru+nk/Cb6Z/F0ttjJg8Sd8dWHlhMCv2XLZbslDG3jrctmU0BISflG+5d2uULI34g6V7vZ+UzOceyu1oCbizv7bhNw+WGYgG9XUSaDizmP7G7HbdxIKTdQe3kIbh/Prrzg6Dru7yfQW4yA8/1T356zMzcyHcpiU5Eav9ukVD72tmQ31nwdHa45xdsYnYz7e9HbsmYW/CyP+JuKsg9+g8f0GJfKt3f/QwHpLBFKUKY3aVxDubpA5XCAUejA1wzN729mUrSSt4AkHYVXijal5WfDszJ+PGIEbuFx7OiHUkiTR+ePCDp2XCzvSEPzP3nnkKWBzQOn1JICTtB4FYOlcHuSOJuYAspzFoppKE5RdJuL5VEHiX2dH4zNFFh1CzZJdURjEGHZST853sv99PO6sqVZcFTs3aueUMMrs2SnvELnO1ly2sppCwpSbGVOjce6KVtiHtlKf8B7CRx1olVEz96rUGfcu6PjEycAtUej4WPuBuvbwgmF9SeO3LREs8b80Hag90F7KVb8PwE0kLMy2xlx/foBS/Y+kVnd92Si7m1g5CFZvGY2UQ3KtSbtDntmsUtM2rin6vb4E2EFHY1zn2K5Wc3BkBCEsnmibOd+9+2XKGpDIGOC6J2dcp54pzbG4t5JKLC6yeRa7vewUeUuCHoDnJ+fv4VOp0F8fPnF3L4CVngpG2JUljEd/37PWzMSLuI8CDd0lQutVpTn9nLJS91SAX7saBTcv/pbyiJdlqfOzb9XnZwYx7IyHulzsDkIctrO0k88xSY3HvJQVBUxC2j6JmycxdWdP5+tBZOMfM9x7h/0fSXP7atJ+5V/YF/tg4SAGtzJdf+M25Ffr+QQiWR8FhroyjxBCzu7AeySKf0qhjGKwe0w8nMOr6pJHELaRFxFHgM/ffPmrg/6GduoK4yQj+WzXEIrSAPblvCdnywzKKlBAr5Xx32iwcp1nBv58p2fEg5kBZAllIcXytncXSLz003brhO8q6JG0O1CITQXaQUK0siDVJYBxl7faFmuOCKOB5ptW0kiQg5olY4umVBRdyCY97xLG72yIHJQuCxhM0fNVK9Eg4rG6uHu/yKWGTd9mfK2iYHMFpPc7PKxOMRnW4S53oiZD0xf7D+WvW/jiI2IfbGnqPqu9eXpB8RS4SbDTQ0v/Gi1jTcnmDQAesZmaPmtDzu4mZdJ065JHiyjI9EYWvESUnAqeCjBsVURF2FYN+J2wf0ggWXq02ENBn8tPc4V8QHw5jmDa/OkjBZRRKpvz7WKQz0pv31pSI+qXVuyqMGb5Utd/iYm+UNNDQ7CCri06HIQ0yEvNbY8rCNCidhAwLw5BuoWySQDKS5edvQnMb7lU6fidZMhPgrSOK1qa3NeDwH2fMxqwh5hrK/ZRHkvIofL1Jc0GOvFvNqIkSq/3SaOcJ5q0TO7JVDWsgqHJhEcidCbqyhiX/o+QXnJAln3kJNp9EcGrpYDmLwBM8PnlxiQFHO5gmsVldthbz7SQ+Wj8rOSWE18kmqWWYw3wDnLSQoUxIdHtBZM46FfseEfUXLnKVjc2ExgCPNyJOfx9nsxrVMhVkVUNsDkFbYOkEx2zF7M7vEp0HvZ8yjZCwncUYoGpvtGHhZHM68qbSjAF4kx1ZuPO/5afzhAX3+7jwZcTxmJkUSeREH498+PswAIeT10+nfMpPfHRlRIu+54t8OlIbtyfN51X9yh8IIPSlNCn41sfnzFXJ/3j/d/NfP/gfc2BWSM0DAm0nTGdP/CF7BARICUKHlGMi4nWzHMXku/9FIY61/OcRPbEwGy0hWeIUJS/lpmRhB8e5o2Wof/bg7U5Wh9t3/D5flEBB7z4VFy46O4ldPUkLbC2b1FEgAMI/LgQByYPmbKWeWkrcu62jVWBLiUz05o5RIe/jWQSIsX1r2JiJnOZDhIQSi71/1LgejmhmSlAJVTcKs+mEvnufxD8CwagVlkhuHtwgC4pmLguoKjm6yGyru7VoWcElkRXm9rdFOQa6tLwp7z7/0VFBQUFBQUFBQUFBQUFBQUFBQWFvwb/A8RDV5PqKgPPgAAAABJRU5ErkJggg==",
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
