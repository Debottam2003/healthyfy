import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const darkThemeStyles = {
  background: "#181818",
  color: "#f1f1f1",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const formStyles = {
  background: "#232323",
  padding: "2rem",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.95)",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  minWidth: "275px",
};

const inputStyles = {
  padding: "0.75rem",
  borderRadius: "4px",
  border: "1px solid #444",
  background: "#181818",
  color: "#f1f1f1",
};

const buttonStyles = {
  padding: "0.75rem",
  borderRadius: "4px",
  border: "none",
  background: "linear-gradient(90deg, #b01f14 0%, #f9c938 100%)",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  fontFamily: "Arial",
  fontSize: "1rem",
};

function Register() {
  let { register, handleSubmit, reset } = useForm();

  async function submitForm(data) {
    console.log(data);
    try {
      console.log("Form Data:", data);
      let response = await axios.post(
        "http://localhost:3333/healthyfy/register",
        data
      );
      console.log("Response:", response.data);

      // reset(); // Uncomment if you want to clear form after login
    } catch (error) {
      console.error("Login failed:", error.message);
    }
    // reset(); // Uncomment if you want to clear the form after submission
  }

  return (
    <div
      className="auth-backgroud"
      style={{
        display: "flex",
        gap: "200px",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#181818",
        color: "#f1f1f1",
        minHeight: "100vh",
        fontFamily: "cursive",
      }}
    >
      <div style={{ fontSize: "1.5rem" }}>
        <h1>Sign up in</h1>
        <h1> to generate</h1>
        <h1>Recipes</h1>
      </div>
      <div className="auth-form" style={darkThemeStyles}>
        <form onSubmit={handleSubmit(submitForm)} style={formStyles}>
          <h2
            style={{
              margin: "0 0 1rem 0",
              fontWeight: "bold",
              fontSize: "1.5rem",
              textAlign: "center",
              letterSpacing: "1px",
            }}
          >
            Welcome to <br /> Healthyfy
          </h2>
          <input
            type="text"
            {...register("name")}
            style={inputStyles}
            required
            placeholder="Name"
          />
          <input
            type="email"
            {...register("email")}
            style={inputStyles}
            required
            placeholder="Email"
          />
          <input
            type="password"
            {...register("password")}
            style={inputStyles}
            required
            placeholder="Password"
          />
          <input
            type="text"
            {...register("nationality")}
            style={inputStyles}
            required
            placeholder="Nationality"
          />
          <button type="submit" style={buttonStyles}>
            Register
          </button>
          <p
            style={{
              color: "#aaa",
              marginTop: "1.5rem",
              fontSize: "1rem",
              textAlign: "center",
            }}
          >
            Already have an account?{" "}
            <span
              style={{
                color: "#f9c938",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
