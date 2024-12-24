import React from 'react'
import { onLogout } from '../api/auth'
import { logout } from '../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom';

const Home = () => {

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
        home
        <button onClick={Logout}>logout</button>
    </div>
  )
}

export default Home