'use client'
import { useState, useEffect } from 'react';
import '../globals.css';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, images]);

  return (
    <div className="slideshow">
      <div className="absolute flex flex-col">
      <h1 className='text-white font-extrabold text-7xl py-2 px-8 rounded bg-white bg-opacity-50 mb-2'>Sharkbots</h1>
      <h2 className='text-center text-white font-extrabold text-4xl py-2 px-8 mx-24 rounded bg-white bg-opacity-50'>14903</h2>
      </div>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};

export default Slideshow;