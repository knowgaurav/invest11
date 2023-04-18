import React from "react";
import main from "../assets/image1.jpg";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const AuthLayout = () => {
  const { loading } = useSelector((state) => state.auth);
  return (
    <>
      <div className="relative h-screen w-full flex items-center justify-center">
        <div className="w-1/2 sm:w-4/5 flex items-center justify-center shrink-0">
          <Outlet />
        </div>
        <div className="grow h-full bg-black flex items-center sm:hidden">
          <img src={main} alt="logo" className="w-full h-full object-cover" />
        </div>
      </div>
      {loading && <Loader />}
    </>
  );
};

export default AuthLayout;
