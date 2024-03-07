import React, { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { MdArrowDropUp } from "react-icons/md";
import TrendingCoins from "./TrendingCoins";

const Trending = () => {
  const [trendingCoins, setTrendingCoins] = useState(null);

  useEffect(() => {
    getTrendingCoins();
  }, []);
  const getTrendingCoins = async () => {
    const data = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const json = await data.json();
    setTrendingCoins(json?.coins);
    //console.log(json?.coins);
  };
  if (trendingCoins === null) return <Shimmer />;
  // console.log(trendingCoins);
  return (
    <>
      <div className="bg-white px-8 py-6 w-full">
        <h1 className="text-2xl font-bold">Trending Coins</h1>
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
        <div className="flex justify-between items-center pt-6 ">
          <span className="flex items-center  gap-3">
            <img src={trendingCoins[1].item.large} alt="" className="h-7 w-7" />
            <p>
              {trendingCoins[1].item.name}({trendingCoins[0].item.symbol})
            </p>
          </span>
          <span className="px-2 bg-gray-300 text-gray-500 flex items-center">
            <span>
              <MdArrowDropUp />
            </span>
            <span>
              {trendingCoins[1].item.data.price_change_percentage_24h.usd.toFixed(
                2
              )}
              %
            </span>
          </span>
        </div>
        <div className="flex justify-between items-center pt-6 ">
          <span className="flex items-center  gap-3">
            <img src={trendingCoins[2].item.large} alt="" className="h-7 w-7" />
            <p>
              {trendingCoins[2].item.name}({trendingCoins[0].item.symbol})
            </p>
          </span>
          <span className="px-2 bg-gray-300 text-gray-500 flex items-center">
            <span>
              <MdArrowDropUp />
            </span>
            <span>
              {trendingCoins[2].item.data.price_change_percentage_24h.usd.toFixed(
                2
              )}
              %
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Trending;
