import React from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import ListView from "../../Stocks/components/ListView";

const Holdings = () => {
  return (
    <div className="w-4/6 bg-gray-50/50 p-3 rounded-md border">
      <div className="flex items-center justify-between mb-3">
        <div className="font-medium">Your Watchlist (5)</div>
        <Link
          to="stocks"
          className="flex gap-1 bg-blue-700 text-white py-1 px-2 rounded-md"
        >
          <Icon.PlusCircle size={20} />
          <div>Add new</div>
        </Link>
      </div>
      <ListView buttonTitle="Remove" icon="XCircle" />
    </div>
  );
};

export default Holdings;
