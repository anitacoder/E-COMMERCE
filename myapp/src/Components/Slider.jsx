import React, { useState } from 'react';
import './Slider.css'; 
import skincareProduct1 from './Images/cerave.jpeg'; 
import skincareProduct2 from './Images/glycolic acid.jpeg'; 
import skincareProduct3 from './Images/la-roche.png'; 

const images = [skincareProduct1, skincareProduct2, skincareProduct3];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button onClick={prevSlide}>Prev</button>
      <img src={images[currentIndex]} alt="Slide" />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;
