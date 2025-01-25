import React, { useState } from "react";
import MyImage2 from "../assets/Group 232.png";
import { onRegister } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [img, setImg] = useState("");
  const [birthday, setBirthday] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await onRegister({
        users_name: lastname,
        users_firstname: firstname,
        users_email: email,
        users_password: password,
        users_role: 3,
        users_date_of_birth: `${year}-${month}-${day}`,
        users_address: address,
        users_phone: phone,
        users_image_link: img,
      });
      setError("");
      setSuccessMessage(data.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(error);
      setSuccessMessage("");
    }
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
        <div className="text-center text-lg font-roboto mb-4">Welcome to DZ Teachers</div>
        <div className="flex justify-center items-center mb-6">
          <button
            className="w-1/2 h-12 bg-[#979FEC] text-white rounded-l-lg"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button className="w-1/2 h-12 bg-[#525FE1] text-white rounded-r-lg">
            Register
          </button>
        </div>
        <div className="text-center text-gray-600 mb-6">Enter your details to register.</div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-full">
              <label className="block text-sm font-bold mb-1" htmlFor="firstname">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Enter your First Name"
                className="w-full h-12 px-4 border-2 border-[#525FE1] rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-bold mb-1" htmlFor="lastname">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Enter your Last Name"
                className="w-full h-12 px-4 border-2 border-[#525FE1] rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
          </div>
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
          <div>
            <label className="block text-sm font-bold mb-1" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your Address"
              className="w-full h-12 px-4 border-2 border-[#525FE1] rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your Phone Number"
              className="w-full h-12 px-4 border-2 border-[#525FE1] rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-full">
              <label className="block text-sm font-bold mb-1" htmlFor="day">
                Day
              </label>
              <input
                type="number"
                id="day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                placeholder="Day"
                className="w-full h-12 px-4 border-2 border-[#525FE1] rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-bold mb-1" htmlFor="month">
                Month
              </label>
              <input
                type="number"
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                placeholder="Month"
                className="w-full h-12 px-4 border-2 border-[#525FE1] rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-bold mb-1" htmlFor="year">
                Year
              </label>
              <input
                type="number"
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Year"
                className="w-full h-12 px-4 border-2 border-[#525FE1] rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold mb-1" htmlFor="img">
              Profile Picture
            </label>
            <input
              type="file"
              id="img"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              className="w-full h-12 px-4 border-2 border-[#525FE1] rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="text-center mt-4">
            <button
              type="submit"
              className="w-full h-12 bg-[#525FE1] text-white rounded-lg"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;