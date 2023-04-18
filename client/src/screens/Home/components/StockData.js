import React from "react";
import Middle from "../../StockDetails/components/Middle";
import StockChart from "../../StockDetails/components/StockChart";
import Header from "../../StockDetails/components/Header";

const StockData = ({ graphData }) => {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col gap-3 w-2/3 sm:w-full">
      <Header data={graphData?.meta} />
      {/* <Middle /> */}
      <StockChart data={graphData?.values} />
    </div>
  );
};

export default StockData;
