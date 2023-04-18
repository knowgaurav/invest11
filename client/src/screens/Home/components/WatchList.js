import React from "react";
import * as Icon from "react-feather";
import { stockImages, stockProfile } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const WatchList = () => {
  const { predictions } = useSelector((state) => state.auth.user);
  return (
    <div className="bg-white p-4 grow rounded-lg flex flex-col gap-5 h-96 overflow-y-scroll">
      <div className="flex items-center justify-between">
        <div className="font-semibold">Predictions</div>
        <Link to="/stocks" className="hover:bg-gray-200 p-1 rounded-md">
          <Icon.Plus size={20} />
        </Link>
      </div>
      <div className="flex flex-col">
        {predictions?.map((item, index) => {
          let profile = stockProfile.filter(
            (x) => x.Symbol === item.stockSymbol
          )[0];
          return (
            <div
              className="font-medium border-b py-3 flex items-center gap-2"
              key={index}
            >
              <img src={profile?.logo} alt="item" className="w-9 h-9" />
              <div>
                <div>{item.stockSymbol}</div>
                <div className="text-gray-500 text-xs">{item.stockName}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WatchList;
