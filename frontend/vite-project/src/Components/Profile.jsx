import React from "react";
import { useForm } from "react-hook-form";

function Profile() {
  let { register, handleSubmit, reset } = useForm();
  function submitForm(data) {
    console.log(data);
    // reset();
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <input type="text" {...register("name")} required />
        <input type="email" {...register("email")} requires />
        <intput type="password" {...register("password")} requires />
        <input type="text" {...register("nationality")} required />
        <button type="submit">Login</button>
      </form>
      <p>Already have account? Login</p>
    </div>
  );
}

export default Profile;
