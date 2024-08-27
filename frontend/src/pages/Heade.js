// Header.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLaptopCode, faCommentAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { scrollToSection } from './utils';

const Header = () => (
  <div className='mb-6'>
    <nav className="flex justify-start text-md font-bold font-custom absolute top-0 px-2 z-50">
      <div className="text-2xl fixed flex items-center top-0 py-4 w-full bg-white bg-opacity-70 h-20 z-50">
        <button className="mx-4 text-red-950 hover:text-white-900" onClick={() => scrollToSection('aboutMe')}>
          <FontAwesomeIcon icon={faUser} className="text-red-950 mx-2 " />
          About Me
        </button>
        <button className="mr-4 text-red-950 hover:text-white-900" onClick={() => scrollToSection('projects')}>
          <FontAwesomeIcon icon={faLaptopCode} className="text-red-950 mx-2" />
          Projects
        </button>
        <button className="mr-4 text-red-950 hover:text-white-900" onClick={() => scrollToSection('contactMe')}>
          <FontAwesomeIcon icon={faCommentAlt} className="text-red-950 mx-2" />
          Contact Me
        </button>
        <button className="mr-4 text-red-950 hover:text-white-900" onClick={() => scrollToSection('programmingLanguages')}>
          <FontAwesomeIcon icon={faCode} className="text-red-950 mx-2" />
          Programming Languages
        </button>
      </div>
    </nav>
  </div>
);

export default Header;
