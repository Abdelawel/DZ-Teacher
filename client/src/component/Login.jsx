import React, { useState } from "react";
import MyImage2 from "../assets/Group 232.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Login successful!");
    setError("");
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full h-screen p-4 lg:p-0">
      <div className="mb-6 lg:mb-0 lg:mr-8">
        <img
          src={MyImage2}
          alt="Welcome illustration"
          className="w-full lg:w-[737px] lg:h-[825px] object-contain"
        />
      </div>
      <div className="w-full max-w-md lg:max-w-lg">
        <div className="text-center text-lg font-roboto mb-4">
          Welcome to DZ Teachers
        </div>
        <div className="flex justify-center items-center mb-6">
          <button className="w-1/2 h-12 bg-[#525FE1] text-white rounded-l-lg">
            Login
          </button>
          <button
            className="w-1/2 h-12 bg-[#979FEC] text-white rounded-r-lg"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
        <div className="text-center text-gray-600 mb-6">
          Enter your details to log in and access your account.
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email Address"
              className="w-full h-12 px-4 border-2 border-[#525FE1] rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="w-full h-12 px-4 border-2 border-[#525FE1] rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-1/2 h-12 bg-[#525FE1] text-white rounded-lg"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
