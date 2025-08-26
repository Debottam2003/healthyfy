import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";

const LinkStyle = {
  textDecoration: "none",
  color: "#219653",
  fontWeight: "bold",
};

const whiteThemeStyles = {
  background: "#fff",
  color: "#222",
  maxHeight: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "system-ui, sans-serif",
  boxSizing: "border-box",
  overFlow: "hidden"
};

const formStyles = {
  background: "#f8f8f8",
  padding: "2rem",
  borderRadius: "12px",
  boxShadow: "0 2px 16px rgba(34, 197, 94, 0.08)",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  minWidth: "275px",
  maxWidth: "350px",
  border: "1px solid #e0e0e0",
  width: "100%",
};

const inputStyles = {
  padding: "0.75rem",
  borderRadius: "6px",
  border: "1px solid #bdbdbd",
  background: "#fff",
  color: "#222",
  fontSize: "1rem",
  outlineColor: "#219653",
};

const buttonStyles = {
  padding: "0.75rem",
  borderRadius: "6px",
  border: "none",
  background: "linear-gradient(90deg, #219653 0%, #6fcf97 100%)",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  fontFamily: "inherit",
  fontSize: "1rem",
  transition: "background 0.2s",
};

const infoStyles = {
  fontSize: "1.3rem",
  textAlign: "center",
  color: "#219653",
  fontWeight: "bold",
  margin: "2rem 0 0 0",
};

function Login() {
  let { register, handleSubmit, reset } = useForm();

  async function submitForm(data) {
    try {
      let response = await axios.post(
        "http://localhost:3333/healthyfy/login",
        data
      );
      alert("Login Successful");
      // reset();
    } catch (error) {
      alert("Login Unsuccessful");
    }
  }

  return (
    <div
      style={{
        ...whiteThemeStyles,
        padding: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "60px",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "100vh",
          padding: "2rem 1rem",
        }}
      >
        <div style={{ flex: "1 1 350px", display: "flex", justifyContent: "center" }}>
          <form style={formStyles} onSubmit={handleSubmit(submitForm)}>
            <h2
              style={{
                margin: "0 0 1rem 0",
                fontWeight: "bold",
                fontSize: "1.5rem",
                textAlign: "center",
                letterSpacing: "1px",
                color: "#219653",
              }}
            >
              Welcome to <br /> Healthyfy
            </h2>
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              required
              style={inputStyles}
            />
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              required
              style={inputStyles}
            />
            <button type="submit" style={buttonStyles}>
              Login
            </button>
            <p
              style={{
                color: "#666",
                marginTop: "1.5rem",
                fontSize: "1rem",
                textAlign: "center",
              }}
            >
              Do not have an account?{" "}
              <span
                style={{
                  color: "#219653",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                <Link style={LinkStyle} to="/register">
                  Register
                </Link>
              </span>
            </p>
          </form>
        </div>
        <div
          style={{
            flex: "1 1 350px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={infoStyles}>
            <h1 style={{ margin: 0 }}>Log in</h1>
            <h1 style={{ margin: 0 }}>to generate</h1>
            <h1 style={{ margin: 0 }}>Recipes</h1>
          </div>
        </div>
      </div>
      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 900px) {
            div[style*="flex-direction: row"] {
              flex-direction: column !important;
              gap: 24px !important;
              padding: 2rem 0.5rem !important;
            }
            div[style*="flex: 1 1 350px"] {
              width: 100% !important;
              max-width: 400px !important;
            }
          }
          @media (max-width: 500px) {
            form {
              min-width: 0 !important;
              max-width: 100vw !important;
              padding: 1rem !important;
            }
            h2 {
              font-size: 1.1rem !important;
            }
            div[style*="font-size: 1.3rem"] h1 {
              font-size: 1.1rem !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Login;
