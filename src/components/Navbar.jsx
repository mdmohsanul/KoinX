import React, { useState } from "react";
import Logo from "../assets/download.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <>
      <div className=" bg-white w-full   h-24  shadow-lg flex items-center justify-between px-10">
        <img src={Logo} alt="" className="h-9 " />
        <ul className="hidden lg:flex justify-center items-center gap-9 text-lg font-semibold">
          <li>Crypto taxes</li>
          <li>Free Tools</li>
          <li>Resource Center</li>
          <li className="text-[#fff] px-3 py-2 bg-blue-500 rounded-md ">
            Get Started
          </li>
        </ul>

        {/* Hamburger */}
        <div className="lg:hidden z-10 cursor-pointer mr-5">
          <div onClick={handleClick} id="close-button">
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
        {nav && (
          <ul className="absolute top-20 left-0 w-full h-[30vh] flex flex-col justify-center items-center gap-9 text-lg font-semibold">
            <li>Crypto taxes</li>
            <li>Free Tools</li>
            <li>Resource Center</li>
            <li className="text-[#fff] px-3 py-2 bg-blue-500 rounded-md ">
              Get Started
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
