"use client";
import Link from "next/link";
import React, {useState} from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full py-6 pb-8">
      <div className="relative inline-block">
        <button
          type="button"
          className="px-7 py-3 text-white text-sm bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full inline-flex items-center"
          onClick={toggleDropdown}
        >
          Choose Now
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>

        {isOpen && (
          <div className="origin-top-right absolute mt-2 w-40 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <li>
                <Link
                  href="/java"
                  className="block px-4 py-3 font-medium text-gray-700 hover:bg-gray-200 hover:rounded-t-xl"
                  onClick={closeDropdown}
                >
                  Java Island
                </Link>
              </li>
              <li>
                <Link
                  href="/bali"
                  className="block px-4 py-3 font-medium text-gray-700 hover:bg-gray-200 hover:rounded-b-xl"
                  onClick={closeDropdown}
                >
                  Bali
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
