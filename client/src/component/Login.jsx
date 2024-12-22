import React, { useState, useEffect } from 'react'
import { onLogin, onLogout } from '../api/auth'
import {jwtDecode} from "jwt-decode"
import MyImage from "../assets/Group 231.png"
import {useDispatch} from 'react-redux'
import { login, logout } from '../redux/slices/authSlice'
import { useSelector } from 'react-redux'

const Login = () => {

   const dispatch = useDispatch()

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
 
   // State for feedback
   const [error, setError] = useState(null);
   const [successMessage, setSuccessMessage] = useState(null);
    
    
    const handleLogin  = async (e) => {
      try {
        const result = await onLogin({users_email :"madi@gmail.com",
                                      users_password : "abc123"})
        console.log(result)
        
        dispatch(login({token:result.data.token}))
        localStorage.setItem('token', result.data.token)

      } catch (error) {
        console.log(error)
      }
        
    }

    const Logout = async ()=>{
      try {
        await onLogout()
        localStorage.removeItem('token')
        dispatch(logout())
      } catch (error) {
        console.log(error.response)
      }
    }

    const { token } = useSelector((state) => state.auth);
    console.log(token)
  return (
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
                                <a href='/register' className="w-[146px] h-[40px] rounded-[14px] ml-[13px] ">
                                    <button className="  text-center text-white w-[146px] h-[40px] ">Register</button>
                                </a>
                        </div>
                        <div className=" w-[454px] h-[49px] mt-[52px] text-[#5B5B5B]  " >
                                ya amjed direlna kech heja meaningfull lah yosstrek
                        </div>
                        <form className="">
                        <div className=" w-[435px] h-[36px] mt-[42px] font-bold " >
                                Email
                        </div>
                        <div className=" w-[435px] h-[54px]  " >
                                <input 
                                    type="text"
                                    id="username"
                                    value={email}
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

export default Login