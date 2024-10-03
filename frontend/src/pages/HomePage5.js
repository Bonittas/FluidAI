import React from 'react';

import backgroundImage from '../assets/images/frame3.png'; 

const BackgroundSection = () => {
  return (
    <>     
    <div 
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

    </div>
    </>
  );
};

export default BackgroundSection;