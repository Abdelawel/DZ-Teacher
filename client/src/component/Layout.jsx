import React from 'react';
import Header from "./Header";  // Import the Header component
import Footer from './Footer';  // Import the Footer component

const Layout = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <Header />

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