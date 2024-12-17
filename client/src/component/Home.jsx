import React from 'react'
import { onLogout } from '../api/auth'
import { logout } from '../redux/slices/authSlice'

const Home = () => {

    const Logout = async ()=>{
        try {
          await onLogout()
          localStorage.removeItem('token')
          dispatch(logout())
        } catch (error) {
          console.log(error.response)
        }
      }
  return (
    <div>
        home
        <button onClick={Logout}>logout</button>
    </div>
  )
}

export default Home