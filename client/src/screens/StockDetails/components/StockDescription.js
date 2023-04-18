import React, { useEffect, useState } from "react";
import { stockProfile, stockImages } from "../../../dummyData";

const StockDescription = ({ symbol }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (symbol) {
      setData(stockProfile.filter((item) => item.Symbol === symbol)[0]);
    }
  }, [symbol]);
  return (
    <div className="font-medium text-gray-500 flex flex-col gap-5 overflow-y-scroll h-96">
      <div className="flex items-center gap-2 border-b pb-3">
        <img src={data?.logo} alt="item" className="w-10 h-10" />
        <div>
          <div className="text-base text-black">{data?.Name}</div>
          <div className="text-xs">{data?.Symbol}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <span className="text-black">Asset Type :</span> {data?.AssetType}
        </div>
        <div>
          <span className="text-black">Country :</span> {data?.Country}
        </div>
        <div>
          <span className="text-black">Currency :</span> {data?.Currency}
        </div>
        <div>
          <span className="text-black">Sector :</span> {data?.Currency}
        </div>
        <div>
          <span className="text-black">Market CAP :</span>{" "}
          {data?.MarketCapitalization}
        </div>
        <div>
          <div className="text-black">Description:</div>
          {data?.Description}
        </div>
      </div>
    </div>
  );
};

export default StockDescription;
