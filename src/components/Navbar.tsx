import { useState } from "react";
import { Link } from "react-router-dom";
import lines from "../assets/icons/lines.svg";
import close from "../assets/icons/close.svg";
import links from "../data/links.json";

export default function Navbar() {
  const [openNavBar, setOpenNavBar] = useState(false);

  const handleOnClick = () => setOpenNavBar(!openNavBar);
  return (
    <nav className="dark:bg-gray-900 sticky top-0 z-50 py-3 backdrop-blur-lg  border-neutral-700/80">
      <div
        className=" container px-4 relative max-w-screen-xl flex flex-wrap items-center
       justify-between mx-auto p-4"
      >
        <Link
          to={`/`}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/vinray.png" className="w-12 h-10" alt="vinray logo" />
        </Link>
        <button
          onClick={handleOnClick}
          type="button"
          className="mr-3 inline-flex items-center 
          border-none p-2 w-10 h-10 justify-center text-sm
           text-gray-500 rounded-lg md:hidden hover:bg-gray-100
            dark:text-gray-400 dark:hover:bg-gray-700
             dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <img src={openNavBar ? close : lines} alt="Lines" />
        </button>
        <div
          className={`${!openNavBar ? "hidden" : ""} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul
            className="font-medium flex flex-col p-4
           md:p-0 mt-4 gap-4 rounded-lg md:flex-row 
           md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0
            dark:border-gray-700"
          >
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  onClick={handleOnClick}
                  to={link.to}
                  className={link.styles}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
