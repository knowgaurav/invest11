import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

function StockChart({ data }) {
  const [timeSeries, setTimeSeries] = useState(null);
  useEffect(() => {
    let arr = [];
    data?.map((item) => {
      arr.push({
        x: new Date(item.datetime),
        y: [item.open, item.high, item.low, item.close],
      });
    });
    setTimeSeries(arr);
  }, [data]);
  const series = [
    {
      data: timeSeries,
    },
  ];

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    // title: {
    //   text: "CandleStick Chart",
    //   align: "left",
    // },
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
      },
    },
    yaxis: {
      //show: false,
      tooltip: {
        enabled: true,
      },
      axisBorder: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
  };

  return (
    <div
      style={{
        height: "60vh",
      }}
    >
      <ReactApexChart
        options={options}
        series={series}
        type="candlestick"
        height="100%"
      />
    </div>
  );
}

export default StockChart;
