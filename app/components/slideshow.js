'use client';
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

  const handlePointClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="slideshow">
      {jsxContent}
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <div className="navigation-points">
        {images.map((_, index) => (
          <div
            key={index}
            className={`point ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handlePointClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Slideshow;
