import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios"; // ✅ Import axios

function Login() {
  let { register, handleSubmit, reset } = useForm();

  async function submitForm(data) {
    try {
      console.log("Form Data:", data);
      let response = await axios.post(
        "http://localhost:3333/healthyfy/login",
        data
      );
      // console.log("Response:", response);
      console.log("Response:", response.status);
      console.log("Response:", response.statusText);

      // reset(); // Uncomment if you want to clear form after login
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  }

  return (
    <div className="auth-form">
      <form onSubmit={handleSubmit(submitForm)}>
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
      </form>
      <p>Do not have an account? Register</p>
    </div>
  );
}

export default Login;
