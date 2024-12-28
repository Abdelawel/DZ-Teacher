import React from 'react';
import Header from './component/Header';  // Import the Header component
import Footer from './component/Footer';  // Import the Footer component

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
