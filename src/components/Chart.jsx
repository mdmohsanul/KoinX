import React, { useState, useEffect, useRef, memo } from "react";
import banner from "../assets/banner-img.png";
import { IoMdArrowForward } from "react-icons/io";
import TradingViewWidget from "./TradingViewWidget";
import { FaBitcoin } from "react-icons/fa6";
import { MdArrowDropUp } from "react-icons/md";
import Trending from "./Trending";
import Shimmer from "./Shimmer";

const Chart = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getBitcoindata();
  }, []);

  const getBitcoindata = async () => {
    const data = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true"
    );
    const json = await data.json();
    setData(json.bitcoin);
    // console.log(json.bitcoin);
  };
  //console.log(data);
  return data === null ? (
    <Shimmer />
  ) : (
    <>
      <div className="w-full bg-gray-200 ">
        <div className=" grid md:grid-cols-3 md:grid-rows-3 grid-cols-1 gap-4 px-3 md:px-10 py-11 ">
          <div className="md:col-span-2 md:row-span-3 col-span-1 bg-white px-4 py-4 rounded-xl md:h-auto h-[60vh]">
            <div className="flex items-center gap-3 ">
              <FaBitcoin size={30} className="text-orange-400" />
              <p className="text-2xl font-semibold">Bitcoin</p>
              <p className="text-gray-500">BTC</p>
              <p className="p-2 bg-gray-500 text-white rounded-lg">Rank #1</p>
            </div>
            <div className="flex items-center gap-5 pt-7">
              <p className="font-bold text-2xl tracking-wider">${data.usd}</p>
              <p className="flex items-center bg-gray-200 px-2 text-gray-500 font-semibold">
                <span>
                  <MdArrowDropUp />
                </span>
                <span>2.51%</span>
              </p>
              <p>(24H)</p>
            </div>
            <p className="font-semibold text-lg pb-3 border-b mb-2 border-gray-300">
              ₹{data.inr}
            </p>
            <div className="md:h-[80%] h-[80%]">
              <TradingViewWidget />
            </div>
          </div>
          <div className="hidden lg:flex flex-col row-span-2 p-7 bg-blue-600 rounded-lg text-white text-center">
            <h1 className="text-[26px] font-bold  px-16  leading-10 ">
              Get Started with KoinX for Free
            </h1>
            <p className="leading-7 py-6 px-3">
              With our range of features that you can equip for free, KoinX
              allows you to be more eduacted and aware of your tax reports.
            </p>
            <div className="flex items-center justify-center py-5">
              <img src={banner} alt="" />
            </div>
            <div className="flex items-center justify-center gap-5 text-lg text-black py-2 bg-white rounded-lg mx-20 font-semibold mb-5">
              <button className="">Get Started for Free</button>
              <span>
                <IoMdArrowForward />
              </span>
            </div>
          </div>
          <div className="hidden md:flex">
            <Trending />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
