import React,{useState,useEffect} from 'react';
import 'tailwindcss/tailwind.css'
import { FaMongo } from 'react-icons/hi';
import {FaGem} from 'react-icons/fa'
import ResumePDF from '../MyResume.pdf'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone,faUser,faChevronDown,faC,faFilePdf,faDatabase,faCode,faServer,faLaptopCode, faCommentAlt,faArrowRight, faMobileAndroidAlt, faLeaf, faFire  } from '@fortawesome/free-solid-svg-icons';
import { faPython, faJava, faHtml5,faCss3, faJs,faFirefox, faNodeJs,faReact, faCss3Alt,faDocker, faGolang, faTrello, faSlack, faJira, faTelegram, } from '@fortawesome/free-brands-svg-icons';
import { faGithub, faLinkedin , faBootstrap,} from '@fortawesome/free-brands-svg-icons';
import ProjectCards from "./Projects"
import i1 from '../img/img1.jpg';
import goodup from '../img/Goodup.png';
import i3 from '../img/i3.jpg';
import i4 from '../img/i4.jpg';
import abronet from "../img/Abronet.png"
import ashewa from "../img/Ats.png"
import i from '../img/i1.jpg';
import i7 from '../img/i8.jpg';
import i8 from '../img/i8.jpg';
import i9 from '../img/i9.jpg';
import i10 from '../img/i10.jpg';
import i11 from '../img/i11.jpg';
import i12 from '../img/i12.jpg';
import i13 from '../img/i13.jpg';
import i14 from '../img/ishop.png';
import i15 from '../img/i15.jpg';
import i16 from '../img/i16.jpg';
import oncure from '../img/oncure.png'
import super1 from '../img/super1.png'
import super2 from '../img/super2.png'
import bif from "../img/biff-Photoroom.png"

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
  const [showDropdown, setShowDropdown] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowDropdown(false);
  };

  const handleMoreClick = () => {
    setShowDropdown(!showDropdown);
  };


  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  const text = "Hello, I am Biftu Shibbire";
  const text2 = "Experienced Website, Mobile App and Game Developer!";
  const text3 = "";
  const [typedText, setTypedText] = useState("");
  const projects = [
    {
      title: 'Abronet',
      imgPath: abronet, 
      description: `The system functions as a business consultant and digital savings platform. Tech stacks used: MERN stack with Redux, Tailwind CSS.`,
      demoLink: 'https://abronet.net/',
      ghLink: 'https://github.com/nattyfeleke/equb/',
    },
    {
      title: 'Oncure',
      imgPath: oncure,
      description: `Virtual medication which includes features like video meetings between doctor and patient, payment integration for card, and other features. Tech stacks used: MERN stack with Redux, Tailwind CSS, WebRTC, Socket.io.`,
      demoLink: 'https://health-link-aov4lyrpc-biftu-shibbires-projects.vercel.app/',
      ghLink: 'https://github.com/Bonittas/Virtual-Medication',
    },
    {
      title: 'Dallas Supermarket',
      imgPath: i14,
      description: `Fully functional supermarket site with add to cart functionality and payment integration implemented. Tech stacks used: MongoDB, Express.js, React.js, Redux Toolkit, Tailwind CSS.`,
      demoLink: 'https://dalas-market.onrender.com/',
      ghLink: 'https://github.com/Bonittas/Supermarket',
    },
    {
      title: 'EventStream',
      imgPath: i7,
      description: `Event comprehensive platform to explore latest events. Tech stacks used: PostgreSQL, Express.js, React.js, Redux Toolkit, Tailwind CSS.`,
      demoLink: 'https://eventstream.netlify.app/',
      ghLink: 'https://github.com/Bonittas/Event',
    },
    {
      title: 'Good UP',
      imgPath: goodup, 
      description: `Rebuilding Good-UP Hotel Management website mainly the landing page and design and other features. Tech stacks used: ReactJs/Next Js, Tailwind CSS.`,
      demoLink: 'https://goodup.onrender.com/',
      ghLink: 'https://github.com/Bonittas/GoodUp',
    },
    {
      title: 'ATS Employee Management',
      imgPath: ashewa, 
      description: `The system manages employee data and access permissions to identify the status of each employee and the resources they can access within the company. This helps ensure a smooth transition when an employee leaves the organization. Tech stacks used: MongoDB, Express.js, React.js, Redux Toolkit, Tailwind CSS.`,
      demoLink: 'https://goodup.onrender.com/',
      ghLink: 'https://github.com/LeulBayesa/ashewa-project',
    },
  ];
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

    if (showText && typedText === text && displayedText3.length < text3.length) {
      timeout = setTimeout(() => {
        const nextLetter = text3.charAt(displayedText3.length);
        setDisplayedText3(prevDisplayedText3 => prevDisplayedText3 + nextLetter);
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [showText, typedText, displayedText3]);
  return (
    <>
    <div className='bg-gray-100'>
    <div className='mb-6'>
      <img src={bg} className="absolute h-cover top-0 w-full" />
      <nav className="flex justify-start text-md font-bold font-custom absolute top-0 px-2 z-50">
        <div className="text-2xl fixed flex items-center top-0 py-4 w-full bg-white bg-opacity-70 h-20 z-50">
          <button className="mx-4 text-red-950 hover:text-gray-900" onClick={() => scrollToSection('aboutMe')}>
            <FontAwesomeIcon icon={faUser} className="text-red-950 mx-2 " />
            About Me
          </button>
          <button className="mr-4 text-red-950 hover:text-gray-900" onClick={() => scrollToSection('projects')}>
            <FontAwesomeIcon icon={faLaptopCode} className="text-red-950 mx-2" />
            Projects
          </button>
          <button className="mr-4 text-red-950 hover:text-gray-900" onClick={() => scrollToSection('contactMe')}>
            <FontAwesomeIcon icon={faCommentAlt} className="text-red-950 mx-2" />
            Contact Me
          </button>
          <button className="mr-4 text-red-950 hover:text-gray-900" onClick={() => scrollToSection('programmingLanguages')}>
            <FontAwesomeIcon icon={faCode} className="text-red-950 mx-2" />
            Programming Languages
          </button>
        </div>
      </nav>
    </div>
    <section className="container mx-2 text-red-950 z-30 mb-16">
  <header className="rounded-md py-3  z-30 mb-12">
    <section className="mb-36 flex ">
    <div className="relative flex flex-col items-start font-sans my-12 justify-start mb-4"> <img src={bif} alt="Profile" className="relative rounded-full lg:left-48 md:left-32 sm:left-6 sm:w-72 w-32 sm:h-72 h-32 flex items-start justify-start bg-red-800 my-12 z-30 animate-spin-slow" />
        <div className="  flex flex-col items-center justify-center relative">
          <div className={showText ? "relative mb-4 ml-8 text-4xl font-bold animate-text-appear z-40" : "hidden"}>
            {typedText}
          </div>
          <p className={showText && typedText === text ? "relative font-bold text-2xl w-2/3 m-4 text-gradient-to-r from-gray-700 to-gray-700 animate-text-appear z-40" : "hidden"}>
            {displayedText2}
          </p>
          <p className={showText && typedText === text2 ? "relative mb-6 font-bold text-3xl w-3/4 m-6 text-gradient-to-r from-gray-700 to-gray-700 animate-text-appear z-40" : "hidden"}>
            {displayedText3}
          </p>
        </div>
      </div>
    </section>
  </header>
</section>
<section>
  <div className='text-white'>
    Weocome to my site
  </div>
</section>
    <section id="aboutMe" className="mt-16 flex flex-col text-black justify-center items-center mx-2 my-8 z-50">
      <div className="relative top-6 rounded-md bg-gradient-to-r from-slate-300 to-red-100 w-full md:w-3/4 my-8" style={{ padding: '12px' }}>
        <div className="mx-auto flex flex-col justify-center items-center p-6">
          <h2 className="text-2xl mb-4 font-cursive border rounded-full p-3">About Me</h2>
          <p className="text-lg leading-relaxed">
            I am a passionate web developer with expertise in front-end and backend technologies. I love creating responsive
            and user-friendly websites that deliver a great user experience. As a web developer, I am committed to staying up-to-date with the latest trends and modern frameworks in the industry. I believe in building strong relationships and providing regular updates to ensure client satisfaction.
          </p>
        </div>
        <div className="flex flex-wrap space-x-8 justify-center items-center my-8">
          <div className="rounded-full shadow-lg justify-center items-center mb-8 bg-gradient-to-r from-slate-400 to-red-300 w-32 h-32">
            <a
              href="https://github.com/Bonittas?tab=repositories"
              className="text-white hover:textgray-100  px-4 py-2 rounded-md flex flex-col items-center justify-center transition-colors duration-300"
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
        <div className="flex flex-wrap space-x-8 justify-center items-center my-8">
    <div className=" text-gray-700 w-56 font-bold rounded-md flex items-center justify-center text-center px-4 py-8 shadow-lg mb-8 bg-slate-200 to-gray-400 ">
    Full Stack Website Developer             

         </div>
         <div className=" text-gray-700 w-56 font-bold rounded-md flex items-center justify-center text-center px-4 py-8 shadow-lg mb-8 bg-slate-200 to-gray-400 ">
         Mobile Application Developer
          </div>
          <div className=" text-gray-700 w-56 font-bold rounded-md flex items-center justify-center text-center px-4 py-12 shadow-lg mb-8 bg-slate-200 to-gray-400 ">

Unity Game Developer          
          </div>
        </div>
      </div>
    </section>
    

<section id="programmingLanguages" className="mt-8 mx-2  text-black">
  <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center">
    <h2 className="text-2xl mb-4 border rounded-full w-fit h-fit p-3 font-cursive ">Programming Languages & Frameworks</h2>
    <div className="grid grid-cols-1  gap-32 ">
    <div className="rounded-md shadow-lg bg-gradient-to-r from-slate-300 to-red-100 p-4">
      <h3 className="text-xl  m-2 flex font-bold flex-col font-cursive justify-center items-center">Programming Languages</h3>
      <ul className="my-8 p-3 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2    gap-12">
      <li className="py-3 w-56 border-white  rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
          <FontAwesomeIcon icon={faPython} className="mr-2 text-6xl" />
         Python
        </li>
        <li className="py-3 w-56 border-white  rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
          <FontAwesomeIcon icon={faJava} className="mr-2 text-6xl" />
          Java
        </li>
        <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
          <FontAwesomeIcon icon={faHtml5} className="mr-2 text-6xl" />
          HTML5
        </li>
        <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
          <FontAwesomeIcon icon={faCss3} className="mr-2 text-6xl" />
          CSS3
        </li>
        <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
          <FontAwesomeIcon icon={faJs} className="mr-2 text-6xl" />
          JavaScript
        </li>
      

        <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
          <FontAwesomeIcon icon={faGolang} className="mr-2 text-6xl" />
          Golang
        </li>
        <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
          <FontAwesomeIcon icon={faCode} className="mr-2 text-6xl" />
          Dart
        </li>
        <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
          <p className='flex'>
          <FontAwesomeIcon icon={faC} className="mr-2 text-6xl font-bold font-lg" /><p className='font-bold text-6xl font-cursive'>#</p></p>
         C-Sharp C#
        </li>
      </ul>
    </div>

<div className="rounded-md shadow-lg bg-gradient-to-r from-slate-300 to-red-100 p-6">
  <h3 className="text-xl font-bold mb-2 flex font-cursive  justify-center">Frameworks</h3>
  <ul className="my-8 p-3 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-12">
    <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
      <FontAwesomeIcon icon={faReact} className="mr-2 text-6xl" />
      React.Js
    </li>
    <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
<p className='font-sans font-bold text-3xl'>NEXT</p> 
      Next.Js
    </li>
    <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
<p className='font-sans font-bold text-3xl'>ex</p>
      Express.Js
    </li>
    <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
    <p className='font-serif font-bold text-3xl'>nest</p>
      Nest.Js
    </li>
    <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
      <FontAwesomeIcon icon={faBootstrap} className="mr-2 text-6xl" />
      Bootstrap
    </li>
    <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
      <FontAwesomeIcon icon={faCss3Alt} className="mr-2 text-6xl" />
      Tailwind CSS
    </li>
    <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
      <FontAwesomeIcon icon={faMobileAndroidAlt} className="mr-2 text-6xl" />
      Flutter
    </li>
  </ul>
</div>
<div className="rounded-md shadow-lg bg-gradient-to-r from-slate-300 to-red-100 p-6">
  <h3 className="text-xl font-bold mb-2 flex font-cursive  justify-center">Databases</h3>
  <ul className="my-8 p-3 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-12">
  <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
          <FontAwesomeIcon icon={faDatabase} className="mr-2 text-6xl" />
          MongoDB
        </li>
        <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
          <FontAwesomeIcon icon={faLeaf} className="mr-2 text-6xl" />
          MySQL
        </li>
        <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
          <FontAwesomeIcon icon={faServer} className="mr-2 text-6xl" />
          PostgreSql
        </li>
                <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
          <FontAwesomeIcon icon={faFire} className="mr-2 text-6xl" />
          Firebase
        </li> 

  </ul>
</div>
<div className="rounded-md shadow-lg bg-gradient-to-r from-slate-300 to-red-100 p-6">
  <h3 className="text-xl font-bold mb-2 flex font-cursive  justify-center">Tools</h3>
  <ul className="my-8 p-3 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-12">
  <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
          <FontAwesomeIcon icon={faGithub} className="mr-2 text-6xl" />
          Github
        </li>
        <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
          <FontAwesomeIcon icon={faTrello} className="mr-2 text-6xl" />
          Trello
        </li>
        <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
          <FontAwesomeIcon icon={faSlack} className="mr-2 text-6xl" />
          Slack
        </li>
        <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
          <FontAwesomeIcon icon={faJira} className="mr-2 text-6xl" />
          Jira
        </li>
        <li className="py-3 w-56 border-white rounded-md flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gradient-to-r from-gray-500 to-red-500 hover:border-gradient-to-r hover:from-red-500 hover:to-gray-500">
          <FontAwesomeIcon icon={faDocker} className="mr-2 text-6xl" />
          Docker
        </li>
  </ul>
</div>
    </div>
  </div>
</section>
 <section id="projects" className="mt-8 mx-2 text-white py-12 bg-gradient-to-r from-slate-300 to-red-100">
      <div className="mx-16 flex flex-col justify-center items-center">
        <h2 className="text-3xl border rounded-full w-fit h-auto px-4 py-2 font-cursive mb-8 bg-white shadow-md text-red-950">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-12 mx-2">
          {projects.map((project, index) => (
            <ProjectCards
              key={index}
              title={project.title}
              imgPath={project.imgPath}
              description={project.description}
              demoLink={project.demoLink}
              ghLink={project.ghLink}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75" onClick={handleCloseModal}>
          <img src={selectedImage} alt="Selected" className="max-w-full max-h-full" />
        </div>
      )}
    </section>

        <section id="contactMe" className="mt-8 mx-2 text-black">
          <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center">
            <h2 className="text-2xl font-cursive border p-3 rounded-full mb-4">Contact Me</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
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
              <div className="rounded-md shadow-lg bg-gradient-to-r from-slate-300 to-red-100 p-6">
                <h3 className="text-xl font-bold mb-2">Telegram</h3>
                <p className="mb-4">@nenova8</p>
                <a
                  href="@nenova8"
                  className="text-gray-900 bg-white hover:bg-gray-100 px-4 py-2 rounded-md transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faTelegram} className="mr-2" />
                  Send Message
                </a>
              </div>
            </div>
            
          </div>
          
        </section>
     
      <footer className="bg-gradient-to-r from-slate-500 to-red-300 text-center p-4 mt-6">
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
    </>
  );
}