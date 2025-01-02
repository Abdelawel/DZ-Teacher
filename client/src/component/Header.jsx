import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize 

  const handleLogout = () => {
    setIsLoggedIn(false); 
  };

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };

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
            // logged in view
            <Link to="/MyProfile">
              <img
                src="/path-to-profile-pic.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </Link>
          ) : (
            
            <>
              <button
                className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100"
                onClick={handleLogin}
              >
                Sign In
              </button>
              <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
