import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icon

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle for mobile menu

  return (
    <header className="absolute top-4 w-full px-4">
      <div className="flex justify-between items-center">
        {/* Left Header Buttons - Hidden on Mobile */}
        <div className="hidden md:flex space-x-4">
          <button className="text-white px-4 py-2">What we believe</button>
          <button className="text-white px-4 py-2">Our features</button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden relative right-48">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {/* Right Header Buttons - Hidden on Mobile */}
        <div className="hidden md:flex space-x-4">
          <button className="text-white px-4 py-2">Our story</button>
          <button className="text-white px-4 py-2">The waitlist</button>
        </div>
      </div>

      {isOpen && (
        <div className="flex relative right-48 flex-col items-start bg-yellow-950  w-fit justify-start mt-4 md:hidden">
          <button className="text-white px-4 py-2">What we believe</button>
          <button className="text-white px-4 py-2">Our features</button>
          <button className="text-white px-4 py-2">Our story</button>
          <button className="text-white px-4 py-2">The waitlist</button>
        </div>
      )}
    </header>
  );
};

export default Header;
