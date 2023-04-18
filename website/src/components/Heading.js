import React from "react";
import image from "../assets/landing-image.jpg";

const Heading = () => {
  return (
    <div className="flex flex-col gap-5 items-center text-center">
      <div className="text-7xl font-semibold">
        Stock market analysis
        <br /> <span className="text-blue-500">couldn't get any easier</span>
      </div>
      <div className="text-gray-500 font-medium text-lg">
        InvestingIQ helps investors perform stock market analysis in a
        hassle-free manner using <br /> machine learning techniques with high
        accuracy which thus helps to <br/> maximise profits and minimize risks.
      </div>
      <button
        onClick={() => (window.location.href = "http://localhost:8501/")}
        className="border-2 border-blue-500 bg-blue-500 text-white rounded-md py-2 px-3 font-medium"
      >
        Get started
      </button>
      <img
        src={image}
        alt="landing"
        className="w-4/5 rounded-xl shadow-md border mt-10"
      />
    </div>
  );
};

export default Heading;
