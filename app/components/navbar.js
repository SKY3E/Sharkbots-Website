'use client'
import { useState } from 'react';

// Display a navigation bar with links at the top of the page
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="sticky top-0 bg-white z-10 background-section text-white flex justify-between items-center h-20 p-4">
      <a href="/" className="flex items-center">
        <img className="h-16 mr-2" src="/Logos/SharkbotsLogo.png"/>
        <span className="font-bold text-xl underline-animation">Sharkbots</span>
      </a>
      <div className="flex items-center">
        <a href="/about" className="mr-4 underline-animation hidden md:block">About</a>
        <a href="/centerstage" className="mr-4 underline-animation hidden md:block">2023-2024 Centerstage</a>
        <a href="/sponsors" className="mr-4 underline-animation hidden md:block">Sponsors</a>
        <a href="/contact" className="mr-4 underline-animation hidden md:block">Contact</a>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6 transition-transform ease-in-out duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: showMenu ? 'rotate(-90deg)' : 'rotate(0)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        {showMenu && (
          <div className="flex flex-col absolute top-20 right-4 w-4/6 md:w-1/3 mt-2 p-4 rounded shadow-lg background-section">       
            <h3 className='text-right mb-2'>Past Seasons</h3>
            <a href="/about" className="text-end text-sm reverse-underline-animation md:hidden">About</a>
            <a href="/powerplay" className="text-end text-sm reverse-underline-animation">2022-2023 Powerplay</a>
            <a href="/centerstage" className="text-end text-sm reverse-underline-animation md:hidden">2023-2024 Centerstage</a>
            <a href="/sponsors" className="text-end text-sm reverse-underline-animation md:hidden">Sponsors</a>
            <a href="/contact" className="text-end text-sm reverse-underline-animation md:hidden">Contact</a>
            <a href="/credits" className="text-end text-sm reverse-underline-animation">Credits</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;