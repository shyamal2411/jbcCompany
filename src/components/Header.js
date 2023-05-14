import React, { useState, useEffect } from "react";

// Base color - WHITE
// First color - #0E303D
// Second color - #A26811

function Header() {
  const [scrolled, setScrolled] = useState(false);

  const openNavbar = () => {
    document.getElementById("navbar-default").classList.toggle("hidden");
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`bg-[#0E303D] w-full text-gray-900 top-0 z-20 sticky ${
          scrolled
            ? "bg-[#0E303D] bg-opacity-70 z-50 backdrop-blur-xl"
            : "bg-[#0E303D]"
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span
              className={`self-center leading-none text-black text-2xl font-semibold whitespace-nowrap ${
                scrolled ? "text-white" : "text-white"
              }`}
            >
              JB & Company
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-150 ease-in-out"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={openNavbar}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className={`block py-2 pl-3 pr-4 text-black text-xl rounded md:bg-transparent md:hover:text-blue-700 md:p-0 ${
                    scrolled ? "text-white" : "text-white"
                  }`}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`block py-2 pl-3 pr-4 text-black rounded text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${
                    scrolled ? "text-white " : "text-white"
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className={`block py-2 pl-3 pr-4 text-black rounded text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${
                    scrolled ? "text-white " : "text-white"
                  }`}
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className={`block py-2 pl-3 pr-4 text-black rounded text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${
                    scrolled ? "text-white " : "text-white"
                  }`}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`block py-2 pl-3 pr-4 text-black rounded text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${
                    scrolled ? "text-white " : "text-white"
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
