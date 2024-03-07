import React from "react";

const Performance = (props) => {
  const { high, highPrice, low, lowPrice } = props;
  return (
    <>
      <div className="flex items-center justify-between pb-9 gap-3 px-3">
        <span>
          <p className="text-gray-600">{low}</p>
          <p className="text-gray-900 font-semibold">{lowPrice}</p>
        </span>
        <span className="border-b-[6px] border-bg-gradient md:w-4/6 w-3/6 rounded-lg"></span>
        <span>
          <p className="text-gray-600">{high}</p>
          <p className="text-gray-950 font-semibold">{highPrice}</p>
        </span>
      </div>
    </>
  );
};

export default Performance;
