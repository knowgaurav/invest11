import React, { useState } from "react";
import Portfolio from "./components/Portfolio";
import StockData from "./components/StockData";
import WatchList from "./components/WatchList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDataApi } from "../../redux/features/authSlice";
import { getWinningsApi } from "../../redux/features/bidSlice";
import moment from "moment";
import { closeSideBar } from "../../redux/features/mobileSidebarSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [graphData, setGraphData] = useState(null);
  const { top5Picks, predictions } = useSelector((state) => state.auth.user);
  useEffect(() => {
    dispatch(closeSideBar());
    dispatch(userDataApi());
  }, []);

  const [date, setDate] = useState(new Date());
  const refreshClock = () => {
    setDate(new Date());
  };
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  useEffect(() => {
    if (date.toLocaleTimeString() === "5:00:00 PM") {
      dispatch(getWinningsApi());
    }
  }, [date]);
  return (
    <div className="flex flex-col gap-5 h-full">
      <Portfolio setGraphData={setGraphData} />
      <div className="grow flex gap-3 sm:flex-col">
        {predictions?.length !== 0 && <StockData graphData={graphData} />}
        {predictions?.length !== 0 && <WatchList />}
      </div>
    </div>
  );
};

export default Home;
