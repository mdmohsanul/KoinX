import React from "react";
import Fundamentals from "./Fundamentals";
import Performance from "./Performance";

const Overview = () => {
  return (
    <>
      <div className="w-full bg-gray-200">
        <div className="md:w-4/6 w-[90%] bg-white md:px-8 py-7 md:ml-11 ml-4 rounded-lg">
          <h1 className="text-2xl font-bold pb-7 text-gray-800">Performance</h1>

          <Performance
            low="Today's Low"
            lowPrice="46,930.22"
            high="Today's High"
            highPrice="49,343.83"
          />
          <Performance
            low="52W Low"
            lowPrice="16,930.22"
            high="52W High"
            highPrice="49,743.83"
          />
          <Fundamentals />
        </div>
      </div>
    </>
  );
};

export default Overview;
