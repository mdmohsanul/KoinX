import React from "react";

const TrendingCoins = () => {
  return (
    <>
      <div className="flex justify-between items-center pt-6 ">
        <span className="flex items-center  gap-3">
          <img src={trendingCoins[0].item.large} alt="" className="h-7 w-7" />
          <p>
            {trendingCoins[0].item.name}({trendingCoins[0].item.symbol})
          </p>
        </span>
        <span className="px-2 bg-gray-300 text-gray-500 flex items-center">
          <span>
            <MdArrowDropUp />
          </span>
          <span>
            {trendingCoins[0].item.data.price_change_percentage_24h.usd.toFixed(
              2
            )}
            %
          </span>
        </span>
      </div>
    </>
  );
};

export default TrendingCoins;
