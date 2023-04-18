import React, { useEffect, useState } from "react";
import GridView from "./components/GridView";
import Header from "./components/Header";
import ListView from "./components/ListView";
import { allStocksData } from "../../dummyData";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { closeSideBar } from "../../redux/features/mobileSidebarSlice";

const Stocks = () => {
  const dispatch = useDispatch();
  const [listType, setListType] = useState("list");
  const [stocksData, setStocksData] = useState(allStocksData.data);
  const { loading } = useSelector((state) => state.bid);

  useEffect(() => {
    dispatch(closeSideBar());
  }, []);

  return (
    <>
      <div className="p-4 rounded-lg bg-white">
        <ListView button1="Watchlist" button2="Portfolio" data={stocksData} />
      </div>
      {loading && <Loader />}
    </>
  );
};

export default Stocks;
