import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const currentPath = location.pathname;

  const getOtherButton = () => {
    if (currentPath === "/") return { text: "Ideas", path: "/ideas" };
    if (currentPath === "/ideas") return { text: "HomePage", path: "/" };
    return null;
  };

  const otherButton = getOtherButton();

  if (!otherButton) return null;

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent  z-50">
      <div className="flex justify-center items-center py-4 px-6  ">
        <nav className="hidden md:flex  backdrop-blur-md  bg-transparent">
          <Link
            to={otherButton.path}
            className="px-6 shadow-sm py-1 text-sm rounded-full border bg-white  hover:bg-red-200 transition"
          >
            {otherButton.text}
          </Link>
        </nav>


        <button
          className="md:hidden text-2xl text-gray-800 ml-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>


      {isOpen && (
        <div className="md:hidden flex justify-center py-4 bg-white/90 shadow-lg">
          <Link
            to={otherButton.path}
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-full border w-32 text-center hover:bg-red-200 transition"
          >
            {otherButton.text}
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
