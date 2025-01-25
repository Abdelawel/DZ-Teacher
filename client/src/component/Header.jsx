import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { onLogout } from '../api/auth';
import { logout } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';



const Header = ({isLoggedIn}) => {
  
  const navigate = useNavigate()
  
  
  const handleLogout = async ()=>{
    
    try {
      await onLogout()
      localStorage.removeItem('token')
      dispatch(logout())
      navigate('/login')
    } catch (error) {
      console.log(error.response)
    }
    window.location.reload();
  }

  


  
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <span className="text-blue-600">E</span>
          <span className="text-black">ducate</span>
        </h1>
        <nav className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Courses</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
        <div className="flex space-x-4">
        {isLoggedIn ? (
          <>
            {/* // logged in view */}
            <Link to="/MyProfile">
              <img
                src="/path-to-profile-pic.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </Link>
            <Link to='/login'>
              <button
                className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100" onClick={()=>handleLogout()}>
                Log Out
              </button>
            </Link>
          </>
          ) : (
            <>
            <Link to='/login'>
              <button
                className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100"

                >
                Sign In
              </button>
            </Link>
            <Link to='/register'>
              <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Register
              </button>
            </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
