import React from 'react';
import backgroundImage from '../assets/images/background.jpg'; 
import logo from '../assets/images/logo.png'; 

const HomePage2 = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex justify-between items-center h-full px-10">
      <div className="flex flex-col items-start">
          <Header />
        </div>
        <div className="flex flex-col mb-32 items-center">
          <img src={logo} alt="Logo" className="h-6 mb-12" />
          <p className='text-white w-full text-5xl'>Unlock Seamless </p>
          <p className='text-white w-1/2 text-5xl'>Efficiency</p>
          <button className="bg-white text-black px-8 font-Monospace  font-bold py-3 rounded-full mt-6">Join Waitlist</button>

        </div>
 
      </div>
    </div>
  );
};

export default HomePage2;