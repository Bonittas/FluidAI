import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import i2 from '../img/i2.jpg';
import i3 from '../img/i3.jpg';
import i4 from '../img/i4.jpg';
import i5 from '../img/i5.jpg';
import i6 from '../img/i6.jpg';
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

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const projectImages = [i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16];

  return (
    <section id="projects" className="mt-16 mx-2 text-black">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center">
        <h2 className="text-2xl mb-4 border rounded-full w-fit h-fit p-3 font-cursive">Projects</h2>
        <div className="grid grid-cols-1 gap-12">
          <div className="rounded-md shadow-lg bg-gradient-to-r from-slate-300 to-red-100 p-6">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
              {projectImages.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-md shadow-lg cursor-pointer"
                  onClick={() => handleImageClick(image)}
                >
                  <img src={image} alt={`Project ${index + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                    <FontAwesomeIcon icon={faArrowRight} className="text-white text-4xl" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={handleCloseModal}>
            <img src={selectedImage} alt="Selected Project" className="w-3/4 h-auto" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
