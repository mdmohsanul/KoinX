import React from "react";

const FundamentalsData = (props) => {
  const { name, price } = props;
  return (
    <>
      <span className="flex justify-between items-center border-b border-gray-200 pb-3 mb-3">
        <p>{name}</p>
        <p>{price}</p>
      </span>
    </>
  );
};

export default FundamentalsData;
