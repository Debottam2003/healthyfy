import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

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
    <div className="auth-form">
      <form onSubmit={handleSubmit(submitForm)}>
        <input type="text" {...register("name")} required placeholder="Name" />
        <input type="email" {...register("email")} required placeholder="Email" />
        <input type="password" {...register("password")} required placeholder="Password" />
        <input type="text" {...register("nationality")} required placeholder="Nationality" />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? Login</p>
    </div>
  );
}

export default Register;
