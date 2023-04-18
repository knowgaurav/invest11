import React, { useState } from "react";
import * as Icon from "react-feather";

const Header = ({listType,setListType}) => {
  // const [fundsType, setFundsType] = useState("all");
  
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon.Search size={20} />
        <input
          type="text"
          placeholder="What are you looking for"
          className="outline-none"
        />
      </div>
      {/* <div className="flex gap-10">
        <button
          onClick={() => setFundsType("all")}
          className={
            fundsType === "all" ? "text-black font-medium" : "text-gray-400"
          }
        >
          All
        </button>
        <button
          onClick={() => setFundsType("crypto")}
          className={
            fundsType === "crypto"
              ? "text-black font-medium"
              : "text-gray-400"
          }
        >
          Crypto
        </button>
        <button
          onClick={() => setFundsType("mutual funds")}
          className={
            fundsType === "mutual funds"
              ? "text-black font-medium"
              : "text-gray-400"
          }
        >
          Mutual Funds
        </button>
      </div> */}
      <div className="flex items-center gap-5">
        <Icon.List
          size={20}
          onClick={() => setListType("list")}
          className={
            listType === "list"
              ? "text-black cursor-pointer"
              : "text-gray-400 cursor-pointer"
          }
        />
        <Icon.Grid
          size={20}
          onClick={() => setListType("grid")}
          className={
            listType === "grid"
              ? "text-black cursor-pointer"
              : "text-gray-400 cursor-pointer"
          }
        />
      </div>
    </div>
  );
};

export default Header;
