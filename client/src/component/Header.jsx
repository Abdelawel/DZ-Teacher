import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const Header = () => {
  const { t, i18n } = useTranslation(); // Destructure t and i18n from useTranslation
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize 

  const handleLogout = () => {  
    setIsLoggedIn(false); 
  };

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Change the language
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <span className="text-blue-600">E</span>
          <span className="text-black">ducate</span>
        </h1>
        <nav className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">{t('home')}</a> {/* Use translation keys */}
          <a href="#" className="text-gray-700 hover:text-blue-600">{t('about')}</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">{t('courses')}</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">{t('contact')}</a>
        </nav>
        <div className="flex space-x-4">
          {isLoggedIn ? (
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
                {t('sign_in')} {/* Use translation key */}
              </button>
              <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                {t('register')} {/* Use translation key */}
              </button>
            </>
          )}
          
          {/* Language Switcher */}
          <div className="flex space-x-2">
            <button
              className="text-gray-700 hover:text-blue-600"
              onClick={() => handleLanguageChange('en')}
            >
              EN
            </button>
            <button
              className="text-gray-700 hover:text-blue-600"
              onClick={() => handleLanguageChange('ar')}
            >
              AR
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
