import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";
import { stockImages, stockProfile } from "../../../dummyData";
import { useDispatch, useSelector } from "react-redux";
import { stockTimeSeriesApi } from "../../../redux/features/stockDataSlice";

const Portfolio = ({ setGraphData }) => {
  const { predictions } = useSelector((state) => state.auth.user);
  const [activeStock, setActiveStock] = useState(0);
  const dispatch = useDispatch();
  const handleClick = (data) => {
    setActiveStock(data.id);
    dispatch(stockTimeSeriesApi(data.name))
      .unwrap()
      .then((res) => setGraphData(res));
  };
  useEffect(() => {
    if (predictions && predictions?.length !== 0) {
      handleClick({ id: 0, name: predictions[0].stockSymbol });
    }
  }, [predictions]);
  return (
    <div className="flex flex-col gap-3">
      <div className="font-semibold">My Top 5 Picks</div>
      <div className="bg-white rounded-lg p-4 font-medium text-gray-500 h-fit">
        {predictions?.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-400">
            No stocks in the portfolio
          </div>
        ) : (
          <div className="grid grid-cols-5 sm:grid-cols-1 gap-5">
            {predictions?.slice(0, 6).map((item, index) => {
              if (item.direction === "Buy") {
                let profile = stockProfile.filter(
                  (x) => x.Symbol === item.stockSymbol
                )[0];
                return (
                  <button
                    key={index}
                    className={
                      activeStock === index
                        ? "flex flex-col gap-2 w-60 shadow-xl p-3 cursor-pointer border-l-4 border-black"
                        : "flex flex-col gap-2 w-60 p-3 cursor-pointer border-l-4 border-transparent"
                    }
                    onClick={() =>
                      handleClick({ id: index, name: item.stockSymbol })
                    }
                  >
                    <div className="flex items-center gap-2">
                      <img src={profile?.logo} alt="item" className="w-10 h-10" />
                      <div className="text-left">
                        <div className="text-black font-semibold">
                          {item.stockName}
                        </div>
                        <div className="text-xs">{item.stockSymbol}</div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 text-xs w-4/5">
                      <div className="flex items-center justify-between">
                        <div>Call Direction :</div>
                        <div className="bg-green-600 text-white py-0.5 px-1.5 rounded-md">
                          {item.direction}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>Stock Price :</div>
                        <div className="text-black">${item.currentPrice}</div>
                      </div>
                    </div>
                  </button>
                );
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
