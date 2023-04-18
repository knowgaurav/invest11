import React from "react";
import { Audio } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-black/40 flex items-center justify-center">
      <Audio height="50" width="50" radius="9" color="white" />
    </div>
  );
};

export default Loader;
