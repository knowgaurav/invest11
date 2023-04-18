import React from "react";

const Header = ({data}) => {
  return (
    <div className="flex items-center justify-between font-medium">
      <div>
        <div>{data?.symbol}</div>
      </div>
      <div className="text-base">$11234</div>
    </div>
  );
};

export default Header;
