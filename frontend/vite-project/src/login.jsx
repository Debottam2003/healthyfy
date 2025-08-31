import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  let { register, handleSubmit, reset } = useForm();
  let navigate = useNavigate();

  async function submitForm(data) {
    try {
      let response = await axios.post(
        "https://healthyfy-1.onrender.com/healthyfy/login",
        data,
        { withCredentials: true }
      );
      if (response.status === 200 || response.statusText === "OK") {
        reset();
        toast.success("Logged in Successfully.");
        setTimeout(() => {
          navigate("/profile");
        }, 2000);
      }
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
        console.log(error.response.statusText + " " + error.response.status);
      } else {
        console.log(error.message);
        toast.error(error.message);
      }
    }
  }

  return (
    <div className="auth-form-container">
      <div className="auth-form-wrapper">
        <div className="auth-form-side">
          <form onSubmit={handleSubmit(submitForm)} className="auth-form">
            <h2>
              Welcome to <br /> Healthyfy
            </h2>
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              required
            />
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              required
            />
            <button type="submit">Login</button>
            <p>
              Do not have an account?{" "}
              <span>
                <Link style={{
                  color: "green",
                  fontWeight: "bold",
                  textDecoration:"none",
                }} to="/register">
                  Register
                </Link>
              </span>
            </p>
          </form>
        </div>
        <div className="auth-info-side">
          <div className="auth-info-text">
            <h1>Log in</h1>
            <h1>to generate</h1>
            <h1>Recipes</h1>
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default Login;
