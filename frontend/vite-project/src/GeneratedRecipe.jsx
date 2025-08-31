import { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiRobotGolem } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Generate = () => {
  let { register, handleSubmit, reset } = useForm();
  let [userGenerated, setUserGenerated] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function authHanlder() {
      try {
        let response = await axios.get(
          "https://healthyfy-1.onrender.com/healthyfy/auth",
          {
            withCredentials: true,
          }
        );
        console.log(response.data.message);
      } catch (err) {
        console.log(err.message);
        navigate("/login");
      }
    }
    authHanlder();
  }, []);

  useEffect(() => {
    async function fecthGeneratedRecipes() {
      try {
        let response = await axios.get(
          "https://healthyfy-1.onrender.com/healthyfy/allgenerations",
          { withCredentials: true }
        );
        if (response.data.length > 0) {
          setUserGenerated(response.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    fecthGeneratedRecipes();
  }, []);

  async function SubmitPrompt(data) {
    try {
      console.log(data.prompt);
      const promise = axios.post(
        "https://healthyfy-1.onrender.com/healthyfy/generate",
        data,
        { withCredentials: true }
      );

      toast.promise(promise, {
        loading: "Generating recipe...",
        success: "Recipe generated successfully 🎉",
        error: "Failed to generate recipe ❌",
      });

      let response = await promise;
      setUserGenerated((prevdata) => {
        return [...prevdata, response.data];
      });
      setTimeout(() => {
        navigate(`/generatedrecipe/${response.data.generationid}`);
      }, 1000);
      reset();
    } catch (err) {
      console.log(err.message);
    }
  }

  async function deleteHandler(e, gid) {
    e.preventDefault();
    e.stopPropagation();
    try {
      let response = await axios.post(
        "https://healthyfy-1.onrender.com/healthyfy/deleteGeneratedRecipe",
        { gid },
        { withCredentials: true }
      );
      if (response.status === 200 || response.statusText === "OK") {
        let sure = confirm("Are you sure?");
        if (sure) {
          alert("deletion done");
          let newData = userGenerated.filter((dish) => {
            if (dish.generationid !== gid) {
              return dish;
            }
          });
          setUserGenerated(newData);
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="generate-container">
      <div className="generate-header">
        <GiRobotGolem size={28} />
        Healthyfy Bot
      </div>

      <div className="generate-messages">
        {userGenerated.length === 0 ? (
          <h1 className="text-center mb-3" style={{ color: "green" }}>
            Generate Custom Recipes Now...
          </h1>
        ) : (
          <h1 className="text-center mb-3" style={{ color: "green" }}>
            My Generated Recipes
          </h1>
        )}

        <div className="generate-dish-cards">
          {userGenerated?.map((dish, idx) => (
            <Link
              key={idx}
              to={`/generatedrecipe/${dish.generationid}`}
              className="generate-dish-card"
            >
              <img
                src={dish.imageurl}
                alt={dish.name}
                className="generate-dish-image"
                loading="lazy"
              />
              <div className="generate-dish-title">
                <span>{dish.name.toUpperCase()}</span>
                <button
                  value={dish.generationid}
                  onClick={(e) => deleteHandler(e, dish.generationid)}
                  className="generate-delete-btn"
                >
                  <FaTrash style={{ color: "brown", fontSize: "1.2rem" }} />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <form
        onSubmit={handleSubmit(SubmitPrompt)}
        className="generate-input-row"
      >
        <input
          type="text"
          {...register("prompt")}
          className="generate-input"
          placeholder="Ask Healthyfy Bot about recipes…"
        />
        <button className="generate-send-btn" type="submit">
          <AiOutlineArrowRight />
        </button>
      </form>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Generate;
