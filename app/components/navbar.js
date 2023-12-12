'use client'
import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-blue-900 bg-opacity-90 text-white flex justify-between items-center p-4">
      <a href="/" className="flex items-center">
        <span className="w-8 h-8 flex items-center justify-center">🦈</span>
        <span className="font-bold text-xl underline-animation">Sharkbots</span>
      </a>
      <div className="flex items-center">
        <a href="/about" className="mr-4 underline-animation">About</a>
        <a href="/centerstage" className="mr-4 underline-animation">2023-2024 Centerstage</a>
        <a href="/sponsors" className="mr-4 underline-animation">Sponsors</a>
        <a href="/contact" className="mr-4 underline-animation">Contact</a>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6 transition-transform ease-in-out duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: showMenu ? 'rotate(-90deg)' : 'rotate(0)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        {showMenu && (
          <div className="absolute top-16 right-4 mt-2 space-y-2 p-4 rounded shadow-lg bg-blue-900 bg-opacity-90">
            <h3 className='text-right'>Past Seasons</h3>
            <a href="/powerplay" className="block text-sm">2022-2023 Powerplay</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;