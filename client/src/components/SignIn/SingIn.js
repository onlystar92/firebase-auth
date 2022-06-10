import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (!email || !password) {
        setError("Please enter an email and password");
      } else {
        await signIn(email, password);
        navigate("/account");
      }
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">Sign in to you account</h1>
        <p className="py-2">
          Don't have an account yet?{" "}
          <Link to="/signup" className="underline">
            Sign up
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium" htmlFor="email">
            Email address
          </label>
          <input className="border p-3" type="email" name="" id="email" onChange={(e) => setEmail(e.target.value)} />
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium" htmlFor="password">
            Password
          </label>
          <input className="border p-3" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <button className="border norder-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">Sign In</button>
      </form>
    </div>
  );
};

export default SingIn;
