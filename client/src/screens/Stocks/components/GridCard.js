import React from "react";
import * as Icon from "react-feather";

const GridCard = ({ item }) => {
  return (
    <div className="bg-gray-50/50 rounded-md p-3 border flex flex-col gap-5">
      <div className="flex gap-3">
        <img alt="icon" src={item.image} className="w-12 h-12" />
        <div className="font-medium">
          <div>{item.name}</div>
          <div className="text-gray-500">{item.symbol}</div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <div className="font-medium text-gray-500 italic">Price:</div>
          <div className="font-medium">{item.price}</div>
        </div>
      </div>
      <button className="border w-fit bg-white text-xs py-1.5 px-2 rounded-md font-medium flex items-center gap-1 text-gray-400 hover:text-black">
        <Icon.PlusCircle size={15} />
        Add to watchlist
      </button>
    </div>
  );
};

export default GridCard;
