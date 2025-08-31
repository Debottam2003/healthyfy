import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const greenAccent = "#43a047";
const greenAccentLight = "#81c784";

const whiteThemeStyles = {
  background: "#fff",
  // color: "#222",
  // maxHeight: "100vh",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height:"100%",
  fontFamily: "Inter, Arial, sans-serif",
  gap: "1rem",
  padding: "5rem",
  boxSizing: "border-box",
  overFlow: "hidden",
  backgroundImage: "url('/images/background.png')",
  backgroundSize: "cover",
  backgroundPosition:"center",
  backgroundRepeat:"no-repeat",
};

const formStyles = {
  background: "#f9f9f9",
  padding: "2rem",
  borderRadius: "16px",
  boxShadow: "0 4px 24px rgba(67,160,71,0.08)",
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
  minWidth: "300px",
  maxWidth: "350px",
  width: "100%",
  border: "none",
};

const inputStyles = {
  padding: "0.85rem",
  borderRadius: "6px",
  border: `1.5px solid ${greenAccentLight}`,
  background: "#fff",
  color: "#222",
  fontSize: "1rem",
  outline: "none",
  transition: "border 0.2s",
};

const sideTextStyles = {
  fontSize: "3rem",
  color: "white",
  fontWeight: "bold",
};

function Register() {
  let { register, handleSubmit, reset } = useForm();
  let navigate = useNavigate();

  async function submitForm(data) {
    try {
      let response = await axios.post(
        "https://healthyfy-1.onrender.com/healthyfy/register",
        data,
        { withCredentials: true }
      );
      if (response.status === 200 || response.statusText === "OK") {
        // alert(response.data.message);
        reset();
        toast.success("Registered Successfully.");
        setTimeout(() => {
          navigate("/profile");
        }, 2000);
      }
      // reset(); // Uncomment if you want to clear form after login
    } catch (error) {
      if (error.response.data.message) {
        // alert(error.response.data.message);
        toast.error(error.response.data.message);
        console.log(error.response.statusText + " " + error.response.status);
      } else {
        console.log(error.message);
        toast.error(error.message);
        // alert(error.message);
      }
      // handle error
    }
  }

  return (
    <div className="auth-background" style={whiteThemeStyles}>
      <div style={sideTextStyles} className="register-side-text">
        <h3>Sign up to</h3>
        <h3>generate</h3>
        <h3>Healthy Recipes</h3>
      </div>
      <div
        className="auth-form"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <form onSubmit={handleSubmit(submitForm)} style={formStyles}>
          <h2
            style={{
              margin: "0 0 1rem 0",
              fontWeight: "bold",
              fontSize: "1.5rem",
              textAlign: "center",
              letterSpacing: "1px",
              color: greenAccent,
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
          <button type="submit" className="submit">
            Register
          </button>
          <p
            style={{
              color: "#555",
              marginTop: "1.5rem",
              fontSize: "1rem",
              textAlign: "center",
            }}
          >
            Already have an account?{" "}
              <Link
                style={{
                  color: "green",
                  fontWeight: "bold",
                  textDecoration:"none",
                }}
                to="/login"
              >
                Login
              </Link>
          </p>
        </form>
      </div>
      {/* Responsive styles */}
      <style>
        {`
        @media (max-width: 900px) {
          .auth-background {
            flex-direction: column !important;
            gap: 24px !important;
            padding: 1rem !important;
          }
          .register-side-text {
            font-size: 2.5rem !important;
            text-align: center !important;
          }
        }
        @media (max-width: 600px) {
          .auth-form {
            max-width: 100vw !important;
            padding: 0 !important;
          }
          form {
            min-width: 0 !important;
            max-width: 100vw !important;
            padding: 1rem !important;
          }
        }
        `}
      </style>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default Register;
