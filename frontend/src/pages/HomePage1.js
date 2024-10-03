import React, { useState } from 'react';
import Header from '../components/Header';
import backgroundImage from '../assets/images/background1.jpg'; 
import logo from '../assets/images/logo.png'; 
import HomePage2 from './HomePage2';
import HomePage3 from './HomePage3';
import HomePage4 from './HomePage4';

const HomePage1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Background and Header Section */}
      <div
        className="min-h-screen bg-cover bg-center relative" // Set to min-h-screen instead of h-screen
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center h-full px-5 md:px-10">
          <div>
            <Header />
          </div>

          <div className="flex flex-col items-center mb-5 md:mb-0">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-24 md:h-32 mr-4" />
            </div>
          </div>
          <div className="flex flex-col items-end mb-5 md:mb-0"></div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-white focus:outline-none"
            >
              {menuOpen ? (
                <i className="fas fa-times fa-lg" />
              ) : (
                <i className="fas fa-bars fa-lg" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex flex-col items-center bg-gray-800 text-white p-5 md:hidden absolute w-full z-10">
            <button className="text-white px-4 py-2 rounded mb-2">What we believe</button>
            <button className="text-white px-4 py-2 rounded mb-2">Our features</button>
            <button className="text-white px-4 py-2 rounded mb-2">Our story</button>
            <button className="text-white px-4 py-2 rounded">The wallet</button>
          </div>
        )}
      </div>


    </>
  );
};

export default HomePage1;
