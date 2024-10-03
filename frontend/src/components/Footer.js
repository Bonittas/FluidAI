import React from 'react';
import logo from '../assets/images/logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={logo} alt="Logo" className="w-32 md:w-40 lg:w-48 mb-4" />
          <p className="text-sm">
2024 Fluid AI          </p>
        </div>

        <div className="w-full md:w-2/3 flex  justify-end space-x-8">
          <div className="w-1/2 mr-32 md:w-auto">
            <ul>
              <li className="mb-2"><a href="#" className="text-sm hover:underline">Our Features</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:underline">Areas</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:underline">FAQs</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:underline">The Waitlist</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:underline">Contact Us</a></li>
            </ul>
          </div>

          <div className="w-1/2 md:w-auto">
            <ul>
              <li className="mb-2"><a href="#" className="text-sm hover:underline">Legal</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:underline">Terms of Service</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;