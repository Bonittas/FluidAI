// AboutMe.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faFilePdf} from '@fortawesome/free-solid-svg-icons';

import ResumePDF from '../MyResume.pdf';

const AboutMe = () => (
  <section id="aboutMe" className="mt-16 flex flex-col text-white justify-center items-center mx-2 my-8 z-50">
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
            className="text-white hover:textwhite-100  px-4 py-2 rounded-md flex flex-col items-center justify-center transition-colors duration-300"
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
            className="text-white hover:text-white-100 px-4 py-2 rounded-md flex flex-col items-center justify-center transition-colors duration-300"
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
            className="text-white hover:text-white-100 px-2 py-2 rounded-md flex flex-col items-center justify-center transition-colors duration-300"
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
);

export default AboutMe;
