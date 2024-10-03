import React from 'react';
import HeaderRight from '../components/Header';
import backgroundImage from '../assets/images/background.jpg'; 
import logo from '../assets/images/logo.png'; 
import cardImage from '../assets/images/image.png'; 
import Card2 from '../assets/images/Card.png'; 

const HomePage3 = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex justify-between items-center h-full px-10">

        <div className="flex flex-col mb-32 items-center">
          <img src={logo} alt="Logo" className="h-6 mb-10" /> 
          <p className='text-white w-full text-5xl text-center'>Unlock Seamless</p>
          <p className='text-white w-1/2 text-5xl text-center'>Efficiency</p>
          <button className="bg-white text-black px-8 font-Monospace font-bold py-3 rounded-full mt-6">Join Waitlist</button>

          <div className='relative ml-6 left-96 bottom-72 bg-black opacity-70 p-2 border-black rounded-lg shadow-lg w-48 h-14'>
            <p className='text-white w-1/2 text-sm text-gray-700'>Next To-Do</p>
            <p className='text-white w-full text-lg'>Renew Car insurance</p>
          </div>
          <div className='absolute -left-32 ml-8 top-56 bg-black opacity-50 p-2 border-black rounded-lg shadow-lg w-48 h-14'>
            <p className='text-white w-1/2 text-sm text-gray-700'>Next To-Do</p>
            <p className='text-white w-full text-lg'>Renew Car insurance</p>
          </div>

          <div className="absolute left-72 top-24 bg-cover bg-center rounded-xl shadow-lg w-56 max-w-xs h-56 md:h-72" style={{ backgroundImage: `url(${cardImage})` }}>
            <div className="flex flex-col justify-center items-center text-white p-4 bg-black bg-opacity-50 rounded-lg h-full">
          <div className='pl-2'> 
              <h2 className="text-xl relative top-40  right-4">Clap Dubai</h2>
              <h2 className="text-sm font-bold text-white w-full opacity-60 relative top-40 mb-10 right-4">4.4<span className='relative bottom-1 ml-1 text-xl font-bold'>.</span> $$$$<span className='relative bottom-1 mr-1 rounded-full font-bold'>.</span>  Japanese</h2>
              </div>             
               <button className="opacity-20 bg-white relative bottom-36 right-14 border border-white text-white px-4 py-2 rounded-full mt-1 w-36 h-6 md:w-24">
              </button>
              <div className='mt-2 ml-3'>
              <p className='relative text-white bottom-44 right-16'>Restaurant</p>
              </div>
            </div>
       
          </div>



          <div className="absolute right-10 bg-cover bg-center rounded-xl shadow-lg w-72 max-w-xs h-48 md:h-72" style={{ backgroundImage: `url(${Card2})` }}>
            <div className="flex flex-col justify-center items-center text-white p-4 bg-black bg-opacity-50 rounded-lg h-full">
          <div className='pl-2'> 
              <h2 className="text-xl relative top-32  right-4">Clap Dubai</h2>
              <h2 className="text-sm font-bold text-white w-full opacity-60 relative top-32 mb-10 right-4">4.4<span className='relative bottom-1 ml-1 text-xl font-bold'>.</span> $$$$<span className='relative bottom-1 mr-1 rounded-full font-bold'>.</span>  Japanese</h2>
              </div>             
               <button className="opacity-20 bg-white relative bottom-32 right-10 border border-white text-white px-3 py-2 rounded-full mt-1 w-32 h-6 md:w-24">
              </button>
              <div className='mt-2 ml-3'>
              <p className='relative text-white bottom-40 right-12'>Restaurant</p>
              </div>
            </div>
       
          </div>
        </div>
        
        <div className="flex flex-col items-end">
          <HeaderRight />
        </div>
      </div>
    </div>
  );
};

export default HomePage3;