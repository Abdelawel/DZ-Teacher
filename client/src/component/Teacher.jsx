import React from 'react'
import { useNavigate } from 'react-router-dom'
import { onLogout } from '../api/auth'
import { logout } from '../redux/slices/authSlice'

const Teacher = () => {
  const navigate = useNavigate()
    const Logout = async ()=>{
        try {
          await onLogout()
          localStorage.removeItem('token')
          dispatch(logout())
          
        } catch (error) {
          console.log(error.response)
        }
        window.location.reload();
      }
  return (
    <div>
      Teacher
      <button onClick={Logout}>logout</button>
    </div>
  )
}

export default Teacher