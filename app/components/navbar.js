
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 bg-opacity-50 text-white flex justify-between items-center p-4">
      <div className="flex items-center">
        <span className="w-8 h-8 flex items-center justify-center">🦈</span>
        <span className="font-bold">Sharkbots</span>
      </div>
      <div className="flex items-center">
        <a href="/about" className="mr-4 underline-animation">About</a>
        <a href="/contact" className="mr-4 underline-animation">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
