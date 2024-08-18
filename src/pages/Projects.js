// ProjectCards.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { CgWebsite } from 'react-icons/cg';

function ProjectCards(props) {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg shadow-red-700 bg-white dark:bg-gray-800 mx-auto py-8 mb-10 flex flex-col items-center">
      
      <div className=" w-full  text-black">
        <div>

        <img
          className="absolute ml-2 z-10 w-96 h-52 object-cover rounded"
          src={props.imgPath}
          alt="Project"
        />
      </div>
      </div>
      <div className="mt-48  px-6 py-4 flex-grow">
        <div className="text-gray-900 dark:text-white font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 dark:text-gray-200 text-base">{props.description}</p>
      </div>
      <div className="pb-2 flex justify-around mx-auto items-center">
        {!props.isBlog && props.demoLink && (
          <a
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-slate-300 to-red-100 hover:bg-teal-700 text-gray-600 font-bold py-2 px-4 rounded flex items-center"
          >
            <CgWebsite className="text-lg mr-2" /> Demo
          </a>
        )}

        <a
          href={props.ghLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-slate-300 to-red-100 hover:bg-teal-700 text-gray-600 font-bold py-2 px-4 rounded flex items-center ml-2"
        >
                              <FontAwesomeIcon icon={faGithub} className="text-gray-600 text-xl  px-2 py-0 " />Github

        </a>
      </div>
    </div>
  );
}

export default ProjectCards;
