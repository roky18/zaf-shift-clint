import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUser } = useAuth();

  const handleLogin = (data) => {
    console.log(data);
    signUser(data.email, data.password)
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
      <p className="text-2xl text-center">Please Login</p>

      <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is Required</p>
          )}
          {/* pass */}
          <label className="label">Password</label>
          <input
            {...register("password", { required: true, minLength: 6 })}
            type="password"
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">Minimun 6 charecter.</p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <Link to="/register"><p className="text-center text-blue-500">New to Zap Shift</p></Link>
      </form>
      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default Login;
