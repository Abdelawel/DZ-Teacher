import React, { useState } from "react";
import MyImage from "C:/Users/HP User/dz-teacher/src/assets/Group 231.png"
import axios from "axios";

const Login = () => {


      // State for form inputs
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for feedback
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload

    setError(null); // Reset error state
    setSuccessMessage(null); // Reset success message

    try {
      const response = await axios.post(
        "https://your-backend-url.com/login", // Replace with your backend's login endpoint
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle success response
      setSuccessMessage("Sign-in successful!");
      console.log("User data:", response.data);

      // Optionally, save the authentication token (if provided)
      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
      }

      // Redirect or navigate to another page (optional)
      // e.g., window.location.href = "/dashboard";
    } catch (err) {
      // Handle error response
      setError(err.response?.data?.message || "An error occurred. Please try again.");
      console.error("Error during sign-in:", err);
    }
  };


    return(

        <div>
            <div className="flex items-center justify-center w-[1440px] h-[900px] border-[1px] border-black">
                <div className="ml-[41px]">
                <img src={MyImage} alt="" className="w-[737px] h-[825px]" />
                </div>
                <div>
                    <div className="w-[454px] h-[657px]  ml-[111px] ">
                        <div className="w-[185px] h-[19px] ml-[135px] text-[16px] font-[roboto] ">
                            welcome to dz teachers
                        </div>
                        <div className="flex items-center justify-center w-[329px] h-[59px] bg-[#979FEC] ml-[53px] rounded-[14px] mt-[29px] ">
                                <div className=" w-[146px] h-[40px] bg-[#525FE1] rounded-[14px] ">
                                    <button className="  text-center text-white w-[146px] h-[40px] ">Login</button>
                                </div>
                                <div className="w-[146px] h-[40px] rounded-[14px] ml-[13px] ">
                                    <button className="  text-center text-white w-[146px] h-[40px] ">Register</button>
                                </div>
                        </div>
                        <div className=" w-[454px] h-[49px] mt-[52px] text-[#5B5B5B]  " >
                                ya amjed direlna kech heja meaningfull lah yosstrek
                        </div>
                        <form className="">
                        <div className=" w-[435px] h-[36px] mt-[42px] font-bold " >
                                User name
                        </div>
                        <div className=" w-[435px] h-[54px]  " >
                                <input 
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Enter your User name"
                                    className="w-full h-full px-5 py-2 border-[2px] border-[#525FE1] rounded-[14px] focus:outline-none focus:ring focus:ring-blue-500"
                                    
                                />
                        </div>
                        <div className=" w-[435px] h-[36px] mt-[30px] font-bold " >
                                Password
                        </div>
                        <div className=" w-[435px] h-[54px]  " >
                                <input 
                                    type="password"
                                    id="password"
                                    value={password}
                                    placeholder="Enter your password"
                                    className="w-full h-full px-5 py-2 border-[2px] border-[#525FE1] rounded-[14px] focus:outline-none focus:ring focus:ring-blue-500"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                        </div>
                        <div className=" flex justify-center items-center w-[435px] h-[15px] mt-[25px] ">
                                <input type="checkbox" className=" w-[15px] h-[15px] mr-[10px] " />
                                <label>Remember me</label>
                                <a href="" className="ml-[160px]" >Forgot Password ?</a>
                        </div>
                        <div className=" flex justify-center items-center w-[111px] h-[42px] ml-[324px] mt-[25px] ">
                                <button className=" bg-[#525FE1] text-white  w-[111px] h-[42px] rounded-[5px] " >Sign In</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Login;