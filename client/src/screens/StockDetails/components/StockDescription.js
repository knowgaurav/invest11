import React from "react";
import { stockProfile as data, stockImages } from "../../../dummyData";

const StockDescription = () => {
  return (
    <div className="font-medium text-gray-500 flex flex-col gap-3 overflow-y-scroll h-96">
      <div className="flex items-center gap-2">
        <img src={stockImages[0]} alt="item" className="w-10 h-10" />
        <div>
          <div className="text-base text-black">{data.name}</div>
          <div className="text-xs">{data.symbol}</div>
        </div>
      </div>
      <div>{data.description}</div>
    </div>
  );
};

export default StockDescription;
