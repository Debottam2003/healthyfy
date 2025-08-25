import React from "react";
import { useForm } from "react-hook-form";

function login() {
  let { register, handleSubmit, reset } = useForm();
  function submitForm(data) {
    console.log(data);
    // reset();
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <input type="email" {...register("email")} requires />
        <intput type="password" {...register("password")} requires />
        <button type="submit">Login</button>
      </form>
      <p>Do not have account? Register</p>
    </div>
  );
}

export default login;
