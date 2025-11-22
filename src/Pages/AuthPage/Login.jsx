import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import GoogleLogin from "./GoogleLogin";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Firebase/firebase";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const { signUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log("location in the log in page", location);

  const handleLogin = (data) => {
    console.log(data);
    signUser(data.email, data.password)
      .then((result) => {
        alert("Login succesful");
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleForgotPassword = () => {
    const email = getValues("email");

    if (!email) {
      alert("Please enter your email first!");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent! Check your inbox.");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
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
            <a onClick={handleForgotPassword} className="link link-hover">
              Forgot password?
            </a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <div>
          <p className="text-center ">
            New to Zap Shift?
            <Link state={location.state} to="/register">
              <span className="text-blue-500">Register</span>
            </Link>
          </p>
        </div>
      </form>
      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default Login;
