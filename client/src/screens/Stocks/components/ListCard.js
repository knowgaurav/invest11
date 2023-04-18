import React, { useState } from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import { stockImages } from "../../../dummyData";
import moment from "moment/moment";
import { useDispatch } from "react-redux";
import { makeBidApi } from "../../../redux/features/bidSlice";
import { toast } from "react-hot-toast";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ListCard = ({ item, button1, button2, icon, index }) => {
  const dispatch = useDispatch();
  const [openPredictionModal, setOpenPredictionModal] = useState(false);
  const [bidType, setBidType] = useState("");

  const handleClick = (data) => {
    if (!bidType) {
      toast.error("Please select bid type", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      dispatch(makeBidApi(data))
        .unwrap()
        .then(() => {
          toast.success("Stock prediction submitted", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          setOpenPredictionModal(false);
        });
    }
  };

  return (
    <>
      <div className="grid grid-cols-5 sm:grid-cols-1 gap-5 items-center w-full py-5 px-5">
        <div className="font-medium flex items-center gap-3">
          <img alt="stock" src={stockImages[index]} className="w-9 h-9" />
          <Link to={item.symbol}>
            <div>{item.symbol}</div>
            <div className="text-xs text-gray-500">{item.name}</div>
          </Link>
        </div>
        <div>
          <div>Currency:</div>
          <div className="text-xs text-gray-500">{item.name}</div>
        </div>
        <div>
          <div>Exchange:</div>
          <div className="text-xs text-gray-500">{item.exchange}</div>
        </div>
        <div>
          <div>Country:</div>
          <div className="text-xs text-gray-500">{item.country}</div>
        </div>
        <button
          onClick={() => setOpenPredictionModal(true)}
          className="w-fit bg-blue-100 hover:bg-blue-200 py-1 px-2 rounded-md font-medium"
        >
          Future prediction
        </button>
      </div>

      {openPredictionModal && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/50 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center py-10 gap-8 bg-white w-1/3 sm:w-4/5 rounded-lg font-medium relative">
            <button
              onClick={() => setOpenPredictionModal(false)}
              className="absolute right-3 top-3 hover:bg-gray-200 p-1 rounded-md"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
            <div className="text-center">
              <div>Stock Name : {item.symbol}</div>
              <div>Current Stock Price : 1234</div>
            </div>
            <div className="flex gap-5 items-center">
              <button
                className={
                  bidType === "Sell"
                    ? "w-fit bg-gray-200 text-xs py-2 px-5 rounded-md font-medium outline-none"
                    : "w-fit bg-white text-xs py-2 px-5 rounded-md font-medium bg-green-700 text-white outline-none hover:bg-green-800"
                }
                onClick={() => setBidType("Buy")}
              >
                Buy
              </button>
              <button
                className={
                  bidType === "Buy"
                    ? "w-fit bg-gray-200 text-xs py-2 px-5 rounded-md font-medium outline-none"
                    : "w-fit bg-white text-xs py-2 px-5 rounded-md font-medium bg-red-700 text-white outline-none hover:bg-red-800"
                }
                onClick={() => setBidType("Sell")}
              >
                Sell
              </button>
            </div>
            <button
              onClick={() => handleClick({ ...item, call: bidType })}
              className="bg-gray-300 rounded-md py-1 px-2 hover:bg-gray-400"
            >
              Submit Prediction
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ListCard;
