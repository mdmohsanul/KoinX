import React from "react";
import Performance from "./Overview";

const NavMenu = () => {
  return (
    <>
      <div className="w-full bg-gray-200">
        <ul className=" flex items-center md:pt-9 pt-5 md:gap-8 gap-5 border-b border-gray-400 pb-3 mb-4 md:w-4/6 w-[90%] md:ml-11 ml-4 text-lg font-semibold text-gray-900 overflow-hidden">
          <li className="text-blue-600 ">Overview</li>
          <li>Fundamentals</li>
          <li>Sentiments</li>
          <li>Team</li>
          <li>News Insights</li>
          <li>Technicals</li>
          <li>Tokenomics</li>
        </ul>
        <Performance />
      </div>
    </>
  );
};

export default NavMenu;
