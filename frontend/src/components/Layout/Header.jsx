import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const currentPath = location.pathname;

  const getOtherButton = () => {
    if (currentPath === "/") return { text: "Ideas", path: "/app" };
    if (currentPath === "/app") return { text: "HomePage", path: "/" };
    return null;
  };

  const otherButton = getOtherButton();

  if (!otherButton) return null;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="flex justify-between items-center py-3 px-6">
        {/* Brand / Logo */}
        <Link to="/" className="text-xl text-white/95 font-bold ">
          The Idea Board
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link
            to={otherButton.path}
            className="px-6 py-2 text-sm font-medium rounded-full border border-gray-200 bg-white/80 hover:bg-gray-100 transition-all shadow-sm"
          >
            {otherButton.text}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg border-t border-gray-200">
          <div className="flex flex-col items-center py-4 space-y-3">
            <Link
              to={otherButton.path}
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 rounded-full border border-gray-200 bg-white hover:bg-gray-100 transition-all w-40 text-center shadow-sm"
            >
              {otherButton.text}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
