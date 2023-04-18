import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Middle from "./components/Middle";
import StockChart from "./components/StockChart";
import StockDescription from "./components/StockDescription";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { stockTimeSeriesApi } from "../../redux/features/stockDataSlice";
import { closeSideBar } from "../../redux/features/mobileSidebarSlice";

const StockDetails = () => {
  const { id } = useParams();
  const [graphData, setGraphData] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(stockTimeSeriesApi(id))
        .unwrap()
        .then((res) => setGraphData(res));
    }
  }, [id]);
  return (
    <div className="flex gap-5 w-full sm:flex-col">
      <div className="bg-white p-4 rounded-lg flex flex-col gap-3 w-1/3 sm:w-full h-full">
        <StockDescription />
      </div>
      <div className="bg-white p-4 rounded-lg flex flex-col gap-3 w-2/3 sm:w-full">
        <Header data={graphData?.meta} />
        {/* <Middle /> */}
        <StockChart data={graphData?.values} />
      </div>
    </div>
  );
};

export default StockDetails;
