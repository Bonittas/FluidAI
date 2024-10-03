import React from 'react';
import image1 from '../assets/images/iphone-1.png';
import image2 from '../assets/images/iphone-2.png';
import image3 from '../assets/images/iphone-3.png';
import image4 from '../assets/images/iphone-4.png';

const HomePage4 = () => {
  return (
    <>      
    <div className="bg-black text-white min-h-screen space-y-12 py-8 flex flex-col justify-center items-center">
      
      <div className="flex flex-col justify-center items-center">   
        <p className="text-4xl text-center w-96 font-lg">Fluid AI was born out of a desire to simplify and streamline modern life</p>
      </div>    

      <div className="flex flex-col md:flex-row items-center justify-center">
  <div className="md:w-full flex justify-center order-1 md:order-none">
    <img src={image3} alt="Section 3" className="w-full h-auto max-w-lg" />
  </div>
  <div className="w-full md:w-1/3 text-center md:text-left md:absolute md:left-6 md:pr-8 mt-4 md:mt-0 order-2 md:order-none">
    <h2 className="text-2xl font-bold mb-4">Fluid AI: Simplify, Organize, and Achieve More</h2>
    <p className="text-gray-200">In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.</p>
    <div className="text-center md:text-start mt-8 md:mt-40">3/4</div>
  </div>
</div>


      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-full flex justify-center">
          <img src={image2} alt="Section 2" className="w-full max-w-lg" />
        </div>
        <div className="w-full md:w-1/3 text-center md:text-left md:absolute md:right-6 md:pr-8 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">Fluid AI: Simplify, Organize, and Achieve More</h2>
          <p className="text-gray-200">In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.</p>
          <div className="text-center md:text-start mt-8 md:mt-40">2/4</div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center">
  <div className="md:w-full flex justify-center order-1 md:order-none">
    <img src={image3} alt="Section 3" className="w-full h-auto max-w-lg" />
  </div>
  <div className="w-full md:w-1/3 text-center md:text-left md:absolute md:left-6 md:pr-8 mt-4 md:mt-0 order-2 md:order-none">
    <h2 className="text-2xl font-bold mb-4">Fluid AI: Simplify, Organize, and Achieve More</h2>
    <p className="text-gray-200">In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.</p>
    <div className="text-center md:text-start mt-8 md:mt-40">3/4</div>
  </div>
</div>


      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-full flex justify-center">
          <img src={image4} alt="Section 4" className="w-full h-auto max-w-lg" />
        </div>
        <div className="w-full md:w-1/3 text-center md:text-left md:absolute md:right-6 md:pr-8 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">Fluid AI: Simplify, Organize, and Achieve More</h2>
          <p className="text-gray-200">In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.</p>
          <div className="text-center md:text-start mt-8 md:mt-40">4/4</div>
        </div>
      </div>

    </div>
    <div className=" bg-black p-8 text-white text-left">
    <p className="text-4xl text-left w-1/2">Fluid AI was born out of a desire to simplify and streamline modern life</p>
  </div>
    </>
  );
};

export default HomePage4;
