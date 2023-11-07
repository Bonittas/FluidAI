import React,{useState,useEffect} from 'react';
import 'tailwindcss/tailwind.css'
import { HiHand } from 'react-icons/hi';
import {FaGem} from 'react-icons/fa'
import ResumePDF from '../Biftu Shibbire.pdf'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser,faFilePdf,faDatabase,  faCode,faServer,faLaptopCode, faCommentAlt,faArrowRight, faBriefcase, faMobileAndroidAlt,   } from '@fortawesome/free-solid-svg-icons';
import { faPython, faJava, faHtml5, faCss3, faJs, faNodeJs,faReact, faCss3Alt,  } from '@fortawesome/free-brands-svg-icons';
import { faGithub, faLinkedin , faBootstrap,} from '@fortawesome/free-brands-svg-icons';
import i1 from '../img/img1.jpg';
import i2 from '../img/i2.jpg';
import i3 from '../img/i3.jpg';
import i4 from '../img/i4.jpg';

import i from '../img/i1.jpg';
import i7 from '../img/i7.jpg';
import i8 from '../img/i8.jpg';
import i9 from '../img/i9.jpg';
import i10 from '../img/i10.jpg';
import i11 from '../img/i11.jpg';
import i12 from '../img/i12.jpg';
import i13 from '../img/i13.jpg';
import i14 from '../img/i14.jpg';
import i15 from '../img/i15.jpg';
import i16 from '../img/i16.jpg';


import i6 from '../img/i6.jpg';
import i5 from '../img/i5.jpg';
import bg from '../img/bg.jpg'
import { Link,useLocation } from 'react-router-dom';
export default function Portfolio() {
  const borderGradientStyles = {
    boxShadow: "inset 0 0 0 2px #3B82F6, inset 0 0 0 4px #8B5CF6",
  };
  
  const scrollToSection = (target) => {
    const section = document.getElementById(target);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  const text = "Hello, I am Biftu Shibbire";
  const text2 = '4th Year Software Engineering Student at Addis Ababa Institute of Technology. I am Website and Mobile App Developer.';
  const text3 = "Website and Mobile App Developer";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let timeout;

    if (showText && typedText.length < text.length) {
      timeout = setTimeout(() => {
        const nextLetter = text.charAt(typedText.length);
        setTypedText(prevTypedText => prevTypedText + nextLetter);
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [showText, typedText]);

  const [displayedText2, setDisplayedText2] = useState("");

  useEffect(() => {
    let timeout;

    if (showText && typedText === text && displayedText2.length < text2.length) {
      timeout = setTimeout(() => {
        const nextLetter = text2.charAt(displayedText2.length);
        setDisplayedText2(prevDisplayedText2 => prevDisplayedText2 + nextLetter);
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [showText, typedText, displayedText2]);

  const [displayedText3, setDisplayedText3] = useState("");

  useEffect(() => {
    let timeout;

    if (showText && typedText === text2 && displayedText3.length < text3.length) {
      timeout = setTimeout(() => {
        const nextLetter = text3.charAt(displayedText3.length);
        setDisplayedText3(prevDisplayedText3 => prevDisplayedText3 + nextLetter);
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [showText, typedText, displayedText3]);
  return (
    
    <div className="absolute top-0  text-black mb-10">
      <div className='h-full'>
      <img src={bg} className='absolute top-0 fit w-full mb-10'/>
      
      <nav className="flex justify-start bg-white bg-opacity-30  sticky text-md font-bold font-custom top-0 px-2 z-40 h-24">
        <button className="mx-4 text-red-950 hover:text-gray-900 " onClick={() => scrollToSection('aboutMe')}>
          <FontAwesomeIcon icon={faUser} className=" text-red-950 mx-2" />
          About Me
        </button>
        <button className="mr-4  text-red-950 hover:text-gray-900" onClick={() => scrollToSection('projects')}>
          <FontAwesomeIcon icon={faLaptopCode} className=" text-red-950 mx-2" />
          Projects
        </button>
        <button className="mr-4  text-red-950 hover:text-gray-900" onClick={() => scrollToSection('contactMe')}>
          <FontAwesomeIcon icon={faCommentAlt} className=" text-red-950 mx-2" />
          Contact Me
        </button>
        <button className="mr-4  text-red-950 hover:text-gray-900" onClick={() => scrollToSection('programmingLanguages')}>
          <FontAwesomeIcon icon={faCode} className=" text-red-950 mx-2" />
          Programming Languages
        </button>
      </nav>
      <div className="container mx-2 py-8  text-red-950 z-30 mb-12">
  <section>
    <header className="rounded-md py-3 z-30">
      <div className="flex flex-col items-start font-sans  justify-start">
        <img
          src={i1}
          alt="Profile"
          className="rounded-full relative bottom-4 lg:left-48 md:left-32 sm:left-6 sm:w-72 w-32 sm:h-72 h-32 flex items-start justify-start bg-red-800  mb-4 z-30"
        />
        <div className="flex flex-col items-center justify-center z-30">
          <div className={showText ? "m-2 text-3xl font-bold animate-text-appear" : "hidden"}>
            {typedText}
          </div>
          <p className={showText && typedText === text ? "font-bold text-xl w-3/4 m-6 text-gradient-to-r from-gray-700 to-gray-700 animate-text-appear" : "hidden"}>
            {displayedText2}
          </p>
          <p className={showText && typedText === text3 ? "font-bold text-xl w-3/4 m-6 text-gradient-to-r from-gray-700 to-gray-700 animate-text-appear" : "hidden"}>
            {displayedText3}
          </p>
        </div>
      </div>
     
     
      
    </header>
    
  </section>
  </div>
  <section id="aboutMe" className="flex flex-col text-black justify-center items-center mx-2 mt-64">
    <div className="rounded-md bg-gradient-to-r from-slate-300 to-red-100 w-full md:w-3/4">
      <div className="mx-auto flex flex-col justify-center items-center p-6">
        <h2 className="text-2xl font-bold mb-4 font-cursive">About Me</h2>
        <p className="text-lg leading-relaxed">
          I am a passionate web developer with expertise in front-end and backend technologies. I love creating responsive
          and user-friendly websites that deliver a great user experience. As a web developer, I am committed to staying up-to-date with the latest trends and modern frameworks in the industry. I believe in building strong relationships and providing regular updates to ensure client satisfaction.
        </p>
      </div>
      <div className="flex flex-wrap space-x-8 justify-center items-center my-8">
        <div className="rounded-full shadow-lg justify-center items-center mb-8 bg-gradient-to-r from-slate-400 to-red-300 w-32 h-32">
          <a
            href="https://github.com/Bonittas?tab=repositories"
            className="text-white hover:text-gray-100  px-4 py-2 rounded-md flex flex-col items-center justify-center transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2 py-2 text-6xl flex items-center justify-center " />
            Github
          </a>
        </div>
        <div className="rounded-full flex items-center justify-center shadow-lg mb-8 bg-gradient-to-r from-slate-400 to-red-300 w-32 h-32">
          <a
            href="https://www.linkedin.com/in/biftu-shibbire-20411a228/"
            className="text-white hover:text-gray-100 px-4 py-2 rounded-md flex flex-col items-center justify-center transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-6xl" />
            Linkedin
          </a>
        </div>
        <div className="rounded-full flex items-center justify-center shadow-lg mb-8 bg-gradient-to-r from-slate-400 to-red-300 w-32 h-32">
          <a
            href={ResumePDF}
            className="text-white hover:text-gray-100 px-2 py-2 rounded-md flex flex-col items-center justify-center transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFilePdf} className="text-5xl flex flex-col justify-center" />
            Resume
          </a>
        </div>
      </div>
    </div>
  </section>

<section id="programmingLanguages" className="mt-8 mx-2  text-black">
  <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center">
    <h2 className="text-2xl font-bold mb-4 border rounded-full w-fit h-fit p-3 bg-gradient-to-r from-slate-300 to-red-100 font-cursive ">Programming Languages & Frameworks</h2>
    <div className="grid grid-cols-1  gap-32 ">
    <div className="rounded-md shadow-lg bg-gradient-to-r from-slate-300 to-red-100 p-4">
      <h3 className="text-xl font-bold  m-2 flex flex-col justify-center items-center">Programming Languages</h3>
      <ul className="my-8 p-3 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2    gap-12">
      <li className="py-3 w-56 border-white  rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-blue-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-blue-500">
          <FontAwesomeIcon icon={faPython} className="mr-2 text-6xl" />
         Python
        </li>
        <li className="py-3 w-56 border-white  rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-blue-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-blue-500">
          <FontAwesomeIcon icon={faJava} className="mr-2 text-6xl" />
          Java
        </li>
        <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-blue-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-blue-500">
          <FontAwesomeIcon icon={faHtml5} className="mr-2 text-6xl" />
          HTML5
        </li>
        <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-blue-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-blue-500">
          <FontAwesomeIcon icon={faCss3} className="mr-2 text-6xl" />
          CSS3
        </li>
        <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-blue-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-blue-500">
          <FontAwesomeIcon icon={faJs} className="mr-2 text-6xl" />
          JavaScript
        </li>
        <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-blue-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-blue-500">
          <FontAwesomeIcon icon={faNodeJs} className="mr-2 text-6xl" />
          Node.js
        </li>
        <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-blue-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-blue-500">
          <FontAwesomeIcon icon={faDatabase} className="mr-2 text-6xl" />
          MySQL
        </li>
        <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-blue-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-blue-500">
          <FontAwesomeIcon icon={faDatabase} className="mr-2 text-6xl" />
          MongoDB
        </li>
        <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-blue-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-blue-500">
          <FontAwesomeIcon icon={faCode} className="mr-2 text-6xl" />
          Dart
        </li>
      </ul>
    </div>

<div className="rounded-md shadow-lg bg-gradient-to-r from-slate-300 to-red-100 p-6">
  <h3 className="text-xl font-bold mb-2 flex  justify-center">Frameworks</h3>
  <ul className="my-8 p-3 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-12">
    <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-blue-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-blue-500">
      <FontAwesomeIcon icon={faReact} className="mr-2 text-6xl" />
      React.Js
    </li>
    <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-blue-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-blue-500">
<p className='font-sans font-bold text-3xl'>NEXT</p> 
      Next.Js
    </li>
    <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-blue-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-blue-500">
<p className='font-sans font-bold text-3xl'>ex</p>
      Express.Js
    </li>
    <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-blue-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-blue-500">
    <p className='font-serif font-bold text-3xl'>nest</p>
      Nest.Js
    </li>
    <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-blue-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-blue-500">
      <FontAwesomeIcon icon={faBootstrap} className="mr-2 text-6xl" />
      Bootstrap
    </li>
    <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-blue-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-blue-500">
      <FontAwesomeIcon icon={faCss3Alt} className="mr-2 text-6xl" />
      Tailwind CSS
    </li>
    <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-blue-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-blue-500">
      <FontAwesomeIcon icon={faMobileAndroidAlt} className="mr-2 text-6xl" />
      Flutter
    </li>
  </ul>
</div>
    </div>
  </div>
</section>
        <section id="projects" className="mt-8 mx-2 text-black">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-2">
          <div className="rounded-md shadow-lg bg-gradient-to-r from-slate-300 to-red-100">
        
            <img
              src={i7}
              alt="Project 1"
              className="rounded-md mb-4"
              onClick={() => handleImageClick(i7)}
            />

            <div className="grid grid-cols-3 gap-2">
            <img
                src={i11}
                alt="Project 1"
                className="rounded-md mb-4"
                onClick={() => handleImageClick(i11)}
              />
               <img
                src={i9}
                alt="Project 1"
                className="rounded-md mb-4"
                onClick={() => handleImageClick(i9)}
              />
               <img
                src={i15}
                alt="Project 1"
                className="rounded-md mb-4"
                onClick={() => handleImageClick(i15)}
              />
                  
                  <img
                src={i8}
                alt="Project 1"
                className="rounded-md mb-4"
                onClick={() => handleImageClick(i8)}
              />
             
            
               <img
                src={i6}
                alt="Project 1"
                className="rounded-md mb-4"
                onClick={() => handleImageClick(i6)}
              />
                <img
                src={i10}
                alt="Project 1"
                className="rounded-md mb-4"
                onClick={() => handleImageClick(i10)}
              />
               <img
                src={i2}
                alt="Project 2"
                className="rounded-md mb-4"
                onClick={() => handleImageClick(i2)}
              />
               <img
                src={i5}
                alt="Project 1"
                className="rounded-md mb-4"
                onClick={() => handleImageClick(i5)}
              />
             
           
             
            </div>

            <h3 className="text-xl font-bold mb-2 p-4">EventStream</h3>
            <p className="text-lg leading-relaxed p-4">
              My event viewing site provides a comprehensive platform to explore
              and stay informed about the latest events, and more in your area. Additionally, it offers personalized
              suggestions for the best venues and locations for birthdays,
              weddings, graduations, and other special occasions. 
            </p>
            <button className="rounded-md m-2 shadow-lg bg-gradient-to-r from-slate-300 to-slate-100 hover:bg-gray-700 p-4">
              <a
                href="https://eventstream.netlify.app/"
                className="flex items-center justify-center"
              >
                <p>View Site</p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="mx-2 text-xl border-1 p-1 border-white rounded-full bg-white bg-opacity-10"
                />
              </a>
            </button>
          </div>
<div>
          <div className="rounded-md shadow-lg bg-gradient-to-r from-slate-300 to-red-100 mx-2">
            <img
              src={i14}
              alt="Project 2"
              className="rounded-md mb-4"
              onClick={() => handleImageClick(i15)}
            />

            <div className="grid grid-cols-2 gap-2 ">
           
            <img
                src={i3}
                alt="Project 1"
                className="rounded-md mb-4"
                onClick={() => handleImageClick(i3)}
              />
            <img
                src={i16}
                alt="Project 2"
                className="rounded-md mb-4"
                onClick={() => handleImageClick(i16)}
              />
           
           <img
                src={i}
                alt="Project 2"
                className="rounded-md mb-4"
                onClick={() => handleImageClick(i)}
              />
              
              <img
                src={i13}
                alt="Project 2"
                className="rounded-md mb-4"
                onClick={() => handleImageClick(i13)}
              />
            </div>

            <h3 className="text-xl font-bold mb-2 p-4">iShop</h3>
            <p className="text-lg leading-relaxed p-4">
            My supermarket site is designed to offer a convenient online shopping experience for groceries. It features a variety of categories including fruits, vegetables, beverages, snacks, and more. Users can browse through these categories and easily add products to their virtual shopping carts. The intuitive "Add to Cart" functionality allows for seamless selection and management of desired items.  </p>
            <button className="rounded-md relative bottom-4 m-2 shadow-lg bg-gradient-to-r   from-slate-300 to-red-100 hover:bg-gray-700 p-4">
              <a
                href="https://keen-chimera-cb4b55.netlify.app/"
                className="flex items-center justify-center"
              >
                <p>View Site</p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="mx-2 text-xl border-1 p-1 border-white rounded-full bg-white bg-opacity-10"
                />
              </a>
            </button>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75"
          onClick={handleCloseModal}
        >
          <img src={selectedImage} alt="Selected Image" className="max-w-full max-h-full" />
        </div>
      )}
    </section>
        <section id="contactMe" className="mt-8 mx-2 text-black">
          <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-md shadow-lg bg-gradient-to-r from-slate-300 to-red-100 p-6">
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="mb-4">biftushibbire@gmail.com</p>
                <a
                  href="biftushibbire@gmail.com"
                  className="text-gray-900 bg-white hover:bg-gray-100 px-4 py-2 rounded-md transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  Send Email
                </a>
              </div>
              <div className="rounded-md shadow-lg bg-gradient-to-r from-slate-300 to-red-100 p-6">
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="mb-4">+251-902-284-924</p>
                <a
                  href="tel:+251902284924"
                  className="text-gray-900 bg-white hover:bg-gray-100 px-4 py-2 rounded-md transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  Call Me
                </a>
              </div>
             
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-gradient-to-r from-slate-300 to-red-950 text-center p-4 mt-6">
        <div className="flex justify-center items-center mb-4">
          <a href="https://github.com/Bonittas?tab=repositories" target="_blank" rel="noopener noreferrer" className="mr-4 text-white hover:text-gray-900">
            <FontAwesomeIcon icon={faGithub} className="text-white text-xl mx-2" />
          </a>
          <a href="https://www.linkedin.com/in/biftu-shibbire-20411a228/" target="_blank" rel="noopener noreferrer" className="mr-4 text-white hover:text-gray-900">
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl  mx-2" />
          </a>
          <a href="biftushibbire@gmail.com" className="text-white hover:text-gray-900">
            <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl  mx-2" />
          </a>
        </div>
        <p className="text-white text-lg font-serif">&copy; 2023 Biftu Shibbire. All rights reserved.</p>
      </footer>
    </div>
  );
}
