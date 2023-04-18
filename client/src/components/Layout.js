import React from "react";
import SideBar from "./SideBar";
import { Navigate, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";

const Layout = () => {
  const { token } = useSelector((state) => state.auth.data);
  return token ? (
    <div className="h-screen w-full flex">
      <SideBar />
      <div className="grow min-h-screen flex flex-col">
        <NavBar />
        <div className="grow p-6 sm:p-5 bg-gray-100 overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Layout;
