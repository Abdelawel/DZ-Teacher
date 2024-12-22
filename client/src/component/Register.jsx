import React, { useState } from 'react'
import MyImage2 from "../assets/Group 232.png"

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    // State for feedback
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
  return (
    <div>
            <div className="flex items-center justify-center w-[1440px] h-[900px] border-[1px] border-black">
                <div className="ml-[41px]">
                <img src={MyImage2} alt="" className="w-[737px] h-[825px]" />
                </div>
                <div>
                    <div className="w-[454px] h-[657px]  ml-[111px] ">
                        <div className="w-[185px] h-[19px]  text-[16px] ml-[135px] font-[roboto] ">
                            welcome to dz teachers
                        </div>
                        <div className="flex items-center justify-center w-[329px] h-[59px] bg-[#979FEC] ml-[53px] rounded-[14px] mt-[29px] ">
                                <a href='/login' className=" w-[146px] h-[40px] rounded-[14px] ">
                                    <button className="  text-center text-white w-[146px] h-[40px] ">Login</button>
                                </a>
                                <div className="w-[146px] h-[40px] bg-[#525FE1] rounded-[14px] ml-[13px] ">
                                    <button className="  text-center text-white w-[146px] h-[40px] ">Register</button>
                                </div>
                        </div>
                        <div className=" w-[454px] h-[49px] mt-[52px] text-[#5B5B5B] " >
                                ya amjed direlna kech heja meaningfull lah yosstrek
                        </div>
                        <form className=" w-[435px] ">
                        <div className=" flex justify-center items-center ">
                        <div className="">
                        <div className=" w-[210px] h-[36px] mt-[42px] font-bold " >
                                First Name
                        </div>
                        <div className=" w-[210px] h-[54px]  " >
                                <input 
                                    type="text"
                                    value={firstname}
                                    id="firstname"
                                    onChange={(e) => setFirstname(e.target.value)}
                                    required
                                    placeholder="Enter your First Name"
                                    className="w-full h-full px-5 py-2 border-[2px] border-[#525FE1] rounded-[14px] focus:outline-none focus:ring focus:ring-blue-500"
                                    
                                />
                        </div>
                        </div>
                        <div className="  ">
                        <div className=" w-[210px] h-[36px] mt-[42px] ml-[15px] font-bold " >
                                Last Name
                        </div>
                        <div className=" w-[210px] h-[54px] ml-[15px]" >
                                <input 
                                    type="text"
                                    value={lastname}
                                    id="lastname"
                                    onChange={(e) => setLastname(e.target.value)}
                                    required
                                    placeholder="Enter your Last Name"
                                    className="w-full h-full px-5 py-2 border-[2px] border-[#525FE1] rounded-[14px] focus:outline-none focus:ring focus:ring-blue-500"
                                    
                                />
                        </div>
                        </div>
                        </div>
                        
                        <div className=" w-[435px] h-[36px] mt-[30px] font-bold " >
                                Email Address
                        </div>
                        <div className=" w-[435px] h-[54px] " >
                                <input 
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Enter your Email Adress"
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
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Enter your password"
                                    className="w-full h-full px-5 py-2 border-[2px] border-[#525FE1] rounded-[14px] focus:outline-none focus:ring focus:ring-blue-500"
                                    
                                />
                        </div>
                        <div className=" flex justify-center items-center w-[111px] h-[42px] ml-[324px] mt-[25px] ">
                                <button className=" bg-[#525FE1] text-white  w-[111px] h-[42px] rounded-[5px] " >Register</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Register