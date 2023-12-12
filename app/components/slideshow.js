'use client'
import { useState, useEffect } from 'react';
import '../globals.css';

const Slideshow = ({ images, jsxContent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, images]);

  return (
    <div className="slideshow">
      {jsxContent}
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};

export default Slideshow;