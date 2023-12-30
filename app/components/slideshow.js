'use client'
import { useState, useEffect } from 'react';
import '../globals.css';

const Slideshow = ({ images, jsxContent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalDuration = 4000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [currentIndex, images, intervalDuration]);

  const progress = (intervalDuration / 4000) * 100;

  return (
    <section className="slideshow">
      {jsxContent}
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <div className="absolute flex justify-center bottom-6 w-full">
        <div className="h-4 w-1/6 bg-green-500 border-2 border-white rounded-lg"></div>
      </div>
    </section>
  );
};

export default Slideshow;