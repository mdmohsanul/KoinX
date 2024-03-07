import React from "react";
import { RiInformationFill } from "react-icons/ri";
import FundamentalsData from "./FundamentalsData";

const Fundamentals = () => {
  return (
    <>
      <div className="px-3">
        <h1 className="flex items-center gap-4">
          <span className="font-bold text-2xl text-gray-600">Fundamentals</span>
          <span className="text-gray-400">
            <RiInformationFill size={27} />
          </span>
        </h1>
        <div className="grid md:grid-cols-2 ">
          <div className="md:pt-6 pt-4">
            <FundamentalsData
              name="24h Low / 24h High"
              price="$16382.07 / $16875.54 "
            />
            <FundamentalsData
              name="24h Low / 24h High"
              price="$16382.07 / $16875.54 "
            />
            <FundamentalsData
              name="24h Low / 24h High"
              price="$16382.07 / $16875.54 "
            />
            <FundamentalsData
              name="24h Low / 24h High"
              price="$16382.07 / $16875.54 "
            />
            <FundamentalsData
              name="24h Low / 24h High"
              price="$16382.07 / $16875.54 "
            />
          </div>
          <div className="md:pt-6 pt-4">
            <FundamentalsData
              name="24h Low / 24h High"
              price="$16382.07 / $16875.54 "
            />
            <FundamentalsData
              name="24h Low / 24h High"
              price="$16382.07 / $16875.54 "
            />
            <FundamentalsData
              name="24h Low / 24h High"
              price="$16382.07 / $16875.54 "
            />
            <FundamentalsData
              name="24h Low / 24h High"
              price="$16382.07 / $16875.54 "
            />
            <FundamentalsData
              name="24h Low / 24h High"
              price="$16382.07 / $16875.54 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Fundamentals;
