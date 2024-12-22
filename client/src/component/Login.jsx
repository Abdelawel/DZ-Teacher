import React, { useState, useEffect } from 'react'
import { onLogin, onLogout } from '../api/auth'
import {jwtDecode} from "jwt-decode"
import {useDispatch} from 'react-redux'
import { login, logout } from '../redux/slices/authSlice'
import { useSelector } from 'react-redux'

const Login = () => {

   const dispatch = useDispatch()

    
    
    const handleLoginn = async (e) => {
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
    login 
      <button onClick={handleLoginn}>
        login 
      </button>

      {/* <button onClick={protectedRoute} >show</button> */}
      {/* {token} */}

      <button onClick={Logout}>
        logout
      </button>
    </div>
  )
}

export default Login