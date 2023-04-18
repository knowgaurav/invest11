import React, { useEffect } from "react";
import * as Icon from "react-feather";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Cog6ToothIcon,
  HomeIcon,
  PowerIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserApi } from "../redux/features/authSlice";
import { getWinningsApi } from "../redux/features/bidSlice";
import logo from "../assets/logo.png";

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { winnings } = useSelector((state) => state.bid);
  const logoutUser = () => {
    dispatch(logoutUserApi())
      .unwrap()
      .then(() => navigate("/login"));
  };
  return (
    <div className="flex flex-col gap-10 w-64 px-5 py-5 border-r h-screen text-black shrink-0 bg-white sm:hidden">
      <div className="text-center text-lg font-bold flex items-center justify-center">
        {" "}
        <img src={logo} alt="logo" className="w-16 h-16" I />
        Investing IQ
      </div>
      <div className="bg-black text-white rounded-lg p-4">
        <div className="text-gray-300 text-xs">Total Winning Points</div>
        <div className="text-lg">{winnings ? winnings.winnings : 0}</div>
      </div>
      <div className="flex flex-col gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 cursor-pointer py-2 px-3 border-l-4 border-black bg-gray-100"
              : "flex items-center gap-2 cursor-pointer py-2 px-3 border-l-4 border-transparent"
          }
        >
          <HomeIcon className="w-5 h-5" />
          <div className="font-medium">Dashboard</div>
        </NavLink>
        <NavLink
          to="stocks"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 cursor-pointer py-2 px-3 border-l-4 border-black bg-gray-100"
              : "flex items-center gap-2 cursor-pointer py-2 px-3 border-l-4 border-transparent"
          }
        >
          <PresentationChartLineIcon className="w-5 h-5" />
          <div className="font-medium">Stocks</div>
        </NavLink>
        <NavLink
          to="settings"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 cursor-pointer py-2 px-3 border-l-4 border-black bg-gray-100"
              : "flex items-center gap-2 cursor-pointer py-2 px-3 border-l-4 border-transparent"
          }
        >
          <Cog6ToothIcon className="w-5 h-5" />
          <div className="font-medium">Settings</div>
        </NavLink>
        <button
          onClick={logoutUser}
          className="flex items-center gap-2 cursor-pointer py-2 px-3 border-l-4 border-transparent"
        >
          <PowerIcon className="w-5 h-5" />
          <div className="font-medium">Sign out</div>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
