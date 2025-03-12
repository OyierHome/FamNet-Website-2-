import  { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import flag from "../assets/flag.png";
import { IoMdArrowDropdown } from "react-icons/io";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const [selectedMenu, setSelectedMenu] = useState(() => {
    
    return localStorage.getItem("selectedMenu") || "About";
  });

  
  const handleMenuClick = (menuItem : string) => {
    setSelectedMenu(menuItem);
    localStorage.setItem("selectedMenu", menuItem);
  };

  useEffect(() => {
   
    const savedMenu = localStorage.getItem("selectedMenu");
    if (savedMenu) {
      setSelectedMenu(savedMenu);
    }
  }, []);

  return (
    <nav className="bg-[#152C24] py-4">
    
      <div className="flex items-center ml-7 space-x-2 justify-between">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="h-[42px] w-[160px] ml-[10px] " />
        </div>

        {/* Menu items */}
        <div className="hidden md:flex mr-6 space-x-2  items-center justify-center text-center font-bold">
          <a
            href="/"
            className={`p-2 text-[24px] h-[50px] w-[170px] rounded-md text-sm ${
              selectedMenu === "Home"
                ? "bg-[#155528] mix-blend-luminosity text-white"
                : "bg-[#155528] mix-blend-luminosity text-white"
            }`}
            onClick={() => handleMenuClick("About")}
          >
            Home
          </a>
          <a
            href="/services"
            className={`p-2 text-[24px] h-[50px] w-[170px] rounded-md ${
              selectedMenu === "Services"
                ? "bg-[#155528] mix-blend-luminosity text-white"
                : "bg-[#155528] mix-blend-luminosity text-white"
            }`}
            onClick={() => handleMenuClick("Services")}
          >
            Services
          </a>
          <a
            href="/reports"
            className={`p-2 text-[24px] h-[50px] w-[170px] rounded-md ${
              selectedMenu === "Reports"
                ? "bg-[#155528] mix-blend-luminosity text-white"
                : "bg-[#155528] mix-blend-luminosity text-white"
            }`}
            onClick={() => handleMenuClick("Reports")}
          >
            Reports
          </a>
          <a
            href="/communities"
            className={`p-2 text-[24px] h-[50px] w-[170px] rounded-md ${
              selectedMenu === "Communities"
                ? "bg-[#155528] mix-blend-luminosity text-white"
                : "bg-[#155528] mix-blend-luminosity text-white"
            }`}
            onClick={() => handleMenuClick("Communities")}
          >
            Communities
          </a>
          <a
            href="/resources"
            className={`p-2 text-[24px] h-[50px] w-[170px] rounded-md ${
              selectedMenu === "Resources"
                ? "bg-[#155528] mix-blend-luminosity text-white"
                : "bg-[#155528] mix-blend-luminosity text-white"
            }`}
            onClick={() => handleMenuClick("Resources")}
          >
            Resources
          </a>
          <a
            href="/gallery"
            className={`p-2 text-[24px] h-[50px] w-[170px] rounded-md ${
              selectedMenu === "Gallery"
                ? "bg-[#155528] mix-blend-luminosity text-white"
                : "bg-[#155528] mix-blend-luminosity text-white"
            }`}
            onClick={() => handleMenuClick("Gallery")}
          >
            Gallery
          </a>
          
          {/* Dropdown */}
          <a href="/countries-page">
            <div>
              <button className=" text-white flex items-center">
                <img src={flag} alt="Flag" className="h-[62px] w-[62px] ml-4" />
                <IoMdArrowDropdown className="h-[50px] w-[50px]" />

              </button>
            </div>
          </a>
        </div>

        {/* Mobile menu button */}
     {/* Mobile menu button with heading */}
<div className="md:hidden flex items-center gap-2">

  <button
    className="p-2 rounded bg-[#155528] mix-blend-luminosity text-white focus:outline-none"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
      />
    </svg>
  </button>
  <span className="text-white text-lg font-semibold mr-2">Menu</span>
</div>

      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#155528] mix-blend-luminosity text-white">
          <a
            href="#about"
            className="block px-4 py-2 bg-[#155528] mix-blend-luminosity text-white"
            onClick={() => handleMenuClick("About")}
          >
            About
          </a>
          <a
            href="/services"
            className="block px-4 py-2 bg-[#155528] mix-blend-luminosity text-white"
            onClick={() => handleMenuClick("Services")}
          >
            Services
          </a>
          <a
            href="/reports"
            className="block px-4 py-2 bg-[#155528] mix-blend-luminosity text-white"
            onClick={() => handleMenuClick("Reports")}
          >
            Reports
          </a>
          <a
            href="/communities"
            className="block px-4 py-2 bg-[#155528] mix-blend-luminosity text-white"
            onClick={() => handleMenuClick("Communities")}
          >
            Communities
          </a>
          <a
            href="/resources"
            className="block px-4 py-2 bg-[#155528] mix-blend-luminosity text-white"
            onClick={() => handleMenuClick("Resources")}
          >
            Resources
          </a>
          <a
            href="/gallery"
            className="block px-4 py-2 bg-[#155528] mix-blend-luminosity text-white"
            onClick={() => handleMenuClick("Gallery")}
          >
            Gallery
          </a>
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;


