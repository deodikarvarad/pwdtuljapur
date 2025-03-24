"use client";
import React, { useEffect, useState } from "react";
import Image1 from "../assets/IMG_5088.jpg";
import Image2 from "../assets/IMG_5091.jpg";
import Image3 from "../assets/IMG_5098.jpg";
import Image4 from "../assets/IMG_5102.jpg";
import img3 from "../assets/IMG_5104.jpg";
import img4 from "../assets/IMG_5105.jpg";
import imgA from "../assets/office (1).jpg"
import imgB from "../assets/office (2).jpg"

const images = [imgA, Image4, imgB, Image3, Image2, Image1, img3, img4,];

export default function Photos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic Scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Next Slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden mt-20 lg:mt-[5.5rem]">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute w-full h-full object-fill transition-transform duration-700 ${
            index === currentIndex ? "translate-x-0" : "translate-x-full"
          }`}
        />
      ))}

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        &#10095;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-black" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
