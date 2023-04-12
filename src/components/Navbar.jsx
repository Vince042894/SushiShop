import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-red-700/50">
      <h2 className="pl-4">SuhiME!</h2>
      <div>
        <ul className="hidden sm:flex px-4 pt-2">
          <li>
            <a className="no-underline text-white text-xl" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="no-underline text-white text-xl" href="#gallery">
              Gallery
            </a>
          </li>
          <li>
            <a className="no-underline text-white text-xl" href="#deals">
              Deals
            </a>
          </li>
          <li>
            <a className="no-underline text-white text-xl" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* HAmburger icon */}
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      {/* Mobile menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-4 flex flex-col"
            : "hidden absolute top-0 h-screen left-[-100] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="/" className="no-underline text-white text-2xl">
              Home
            </a>
          </li>
          <li className="text-2xl py-8">
            <a className="no-underline text-white text-2xl" href="#gallery">
              Gallery
            </a>
          </li>
          <li className="text-2xl py-8">
            <a className="no-underline text-white text-2xl" href="#deals">
              Deals
            </a>
          </li>
          <li className="text-2xl py-8">
            <a className="no-underline text-white text-2xl" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
