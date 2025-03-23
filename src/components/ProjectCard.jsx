import React, { useEffect, useState } from 'react';

const ProjectCard = ({ images = [], name = "Unnamed Project" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultipleImages = images?.length > 1;

  // Auto-slide every 3 seconds if multiple images
  useEffect(() => {
    if (!hasMultipleImages) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images, hasMultipleImages]);

  // Handle Manual Navigation
  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="flex flex-col items-center p-4 rounded-2xl bg-gray-200 hover:bg-gray-300 w-full max-w-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
      
      {/* Image Slider or Single Image */}
      {hasMultipleImages ? (
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${name} - ${index + 1}`}
              className={`w-full h-full object-cover absolute transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          
          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            &#10094;
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            &#10095;
          </button>
        </div>
      ) : (
        images.length > 0 ? (
          <img src={images[0]} alt={name} className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-md" />
        ) : (
          <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] bg-gray-400 flex items-center justify-center">
            <span className="text-white">No Image Available</span>
          </div>
        )
      )}

      {/* Project Name */}
      <h2 className="text-xl mt-4 text-center">{name}</h2>

      {/* Indicators for Multiple Images */}
      {hasMultipleImages && (
        <div className="flex space-x-2 mt-3">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-gray-800" : "bg-gray-400"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;