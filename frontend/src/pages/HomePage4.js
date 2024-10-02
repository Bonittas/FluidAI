import React from 'react';
import image1 from '../assets/images/iphone-1.png';
import image2 from '../assets/images/iphone-2.png';
import image3 from '../assets/images/iphone-3.png';
import image4 from '../assets/images/iphone-4.png';

const HomePage4 = () => {
  return (
    <div className="bg-black text-white min-h-screen space-y-12 py-8 flex flex-col justify-center items-center">
      
<div className='flex flex-col justify-center items-center'>   
           <p className="text-4xl text-center w-96 font-lg  ">Fluid AI was born out of a desire to simplify and streamline modern life</p>
</div>    
<div className="flex flex-col md:flex-row items-center justify-center ">
        <div className=" h-fit w-1/3 absolute md:fit left-6 text-left md:pr-8">
          <h2 className="text-2xl font-bold mb-4">Fluid AI: Simplify, Organize, and Achieve More</h2>
          <p className=" text-gray-200">In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.</p>
          <div className="text-start mt-40">1/4</div>

        </div>
        <div className="md:w-full flex justify-center">
          <img src={image1} alt="Section 1" className="w-full max-w-lg " />
        </div>
      </div>

      <div className=" flex flex-col md:flex-row items-center justify-start ">
        <div className="md:w-full flex justify-center">
          <img src={image2} alt="Section 2" className="w-full  max-w-lg " />
        </div>
        <div className=" h-full w-1/3 absolute md:fit right-6 text-left md:pr-8">
          <h2 className="text-2xl font-bold mb-4">Fluid AI: Simplify, Organize, and Achieve More</h2>
          <p className="text-md text-gray-200">In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.</p>
          <div className="text-start mt-40">2/4</div>

        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center ">
      <div className=" h-full w-1/3 absolute md:fit left-6 text-left md:pr-8">
          <h2 className="text-2xl font-bold mb-4">Fluid AI: Simplify, Organize, and Achieve More</h2>
          <p className=" text-gray-200">In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.</p>
          <div className="text-start mt-40">3/4</div>

        </div>
        <div className="md:w-full flex justify-center">
          <img src={image3} alt="Section 3" className="w-full h-auto max-w-lg " />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
        <div className="md:w-full flex justify-center">
          <img src={image4} alt="Section 4" className="w-full h-auto max-w-lg " />
        </div>
        <div className=" h-full w-1/3 absolute md:fit right-6 text-left md:pr-8">
          <h2 className="text-2xl font-bold mb-4">Fluid AI: Simplify, Organize, and Achieve More</h2>
          <p className=" text-gray-200">In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.</p>
          <div className="text-start mt-40">4/4</div>

        </div>
      </div>

    </div>
  );
};

export default HomePage4;
