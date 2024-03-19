import { navigation } from "../constants";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/logomain.jpg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="md:px-14 py-2 p-4 mx-auto fixed bg-primary-bg top-0 right-0 left-0">
        {/* ========== DESKTOP NAVIGATION ========== */}
        <div className="text-xl font-medium container mx-auto flex justify-between lg:justify-evenly items-center">
          {/* Logo */}
          <div>
            <a href="/">
              <img
                src={logo}
                className="w-[48px] lg:w-[70px] lg:h-[50%]"
                alt=""
              />
            </a>
          </div>

          {/* Navigation Items */}
          <div>
            <ul className="lg:flex hidden space-x-12">
              {navigation.map(({ id, title, url }) => (
                <a
                  // activeClass="active"
                  // spy={true}
                  // smooth={true}
                  // offset={-100}
                  key={id}
                  href={url}
                  className="block text-primary-text hover:text-secondary-text text-base font-normal"
                >
                  {title}
                </a>
              ))}
            </ul>
          </div>

          {/* Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none z-40">
              {isMenuOpen ? (
                <FaXmark className="w-5 h-5 text-secondary-text" />
              ) : (
                <FaBars className="w-5 h-5 text-secondary-text" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE NAVIGATION */}
      <div
        className={`space-y-4 px-5 z-40 pt-24 pb-5 bg-tertiary-bg text-xl ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navigation.map(({ id, title, url }) => (
          <a
            // activeClass="active"
            // spy={true}
            // smooth={true}
            // offset={-80}
            key={id}
            href={url}
            className="block text-white"
            onClick={toggleMenu}
          >
            {title}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
