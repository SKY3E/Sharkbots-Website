import { useState, useEffect } from 'react';

const ScreenSizeChecker = ({ threshold }) => {
  const [isBelowThreshold, setIsBelowThreshold] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsBelowThreshold(screenWidth < threshold);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [threshold]);

  return isBelowThreshold;
};

export default ScreenSizeChecker;