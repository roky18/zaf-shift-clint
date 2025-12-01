import React from "react";
import { Link } from "react-router";

const Forbiden = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-200 p-5 text-center">
      <h1 className="text-6xl font-bold text-error">403</h1>
      <p className="text-xl mt-4 opacity-80">Access Forbidden</p>
      <p className="mt-2 text-sm opacity-70">
        You don't have permission to access this page.
      </p>

      <Link to="/" className="btn btn-primary text-black mt-6">
        Go Home
      </Link>
    </div>
  );
};

export default Forbiden;
