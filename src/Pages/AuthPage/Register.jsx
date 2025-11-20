import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router";
import GoogleLogin from "./GoogleLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser } = useAuth();

  const handleRegister = (data) => {
    // console.log(data);
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h3 className="text-3xl text-center">Welcome Back</h3>
      <p className="text-2xl text-center">Please Register</p>
      <form className="card-body" onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset">
          {/* Email */}
          <label className="label">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required.</p>
          )}
          {/* PAssword */}
          <label className="label">Password</label>
          <input
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
            })}
            type="password"
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is Required.</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 characters or Longer
            </p>
          )}

          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              “Password must be 6 characters long and include at least one
              uppercase letter, one lowercase letter, one number, and one
              special character.”
            </p>
          )}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-secondary mt-4">Register</button>
        </fieldset>
        <Link to="/login">
          <p className="text-center text-green-500">Already Have an Account</p>
        </Link>
      </form>
      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default Register;
