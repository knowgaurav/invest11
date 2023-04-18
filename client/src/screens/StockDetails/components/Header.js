import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { stockPriceApi } from "../../../redux/features/stockDataSlice";

const Header = ({ data }) => {
  const dispatch = useDispatch();
  const [stockPrice, setStockPrice] = useState("");
  useEffect(() => {
    dispatch(stockPriceApi(data?.symbol))
      .unwrap()
      .then((res) => setStockPrice(res));
  }, [data]);
  return (
    <div className="flex items-center justify-between font-medium">
      <div>
        <div className="text-base">{data?.symbol}</div>
      </div>
      <div className="text-base">{stockPrice && `$${stockPrice}`}</div>
    </div>
  );
};

export default Header;
