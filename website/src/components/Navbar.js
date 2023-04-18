import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-10 py-5">
      <div className="font-semibold text-lg">InvestingIQ</div>
      {/* <div className="flex items-center gap-10 font-medium">
        <div>Changelog</div>
        <div>Customer</div>
        <div>Qualification</div>
        <div>Pricing</div>
      </div> */}
      <div className="flex items-center gap-5">
        {/* <button className="border-2 border-blue-500 text-blue-500 rounded-md py-2 px-5 font-medium">
          Login
        </button> */}
        <button
          onClick={() => (window.location.href = "http://localhost:8501/")}
          className="border-2 border-blue-500 bg-blue-500 text-white rounded-md py-2 px-5 font-medium"
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
