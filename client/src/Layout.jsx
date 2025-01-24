import React, {useState, useEffect} from 'react';
// import Header from './Header';  // Import the Header component
import Footer from './component/Footer';
import Header from './component/Header';
// Import the Footer component
// import Homepage from './pages/Homepage';

import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'


const Layout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize 
  
  const {token} = useSelector((state)=>state.auth)
  console.log(token)
  useEffect(() => {
    const handleLogin = () => {
      if (token){
        return setIsLoggedIn(true)
      }
      else{
        return setIsLoggedIn(false)
      }
    };

    handleLogin()
  }, [token])
  return (
    <div>
      {/* Header */}
      <Header isLoggedIn={isLoggedIn} />

      {/* Main content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
