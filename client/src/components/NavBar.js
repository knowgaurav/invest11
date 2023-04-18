import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserApi, userDataApi } from "../redux/features/authSlice";
import {
  Bars3Icon,
  Cog6ToothIcon,
  HomeIcon,
  PowerIcon,
  PresentationChartLineIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink, useNavigate } from "react-router-dom";
import { getWinningsApi } from "../redux/features/bidSlice";
import {
  closeSideBar,
  openSideBar,
} from "../redux/features/mobileSidebarSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useSelector((state) => state.auth.user);
  const { winnings } = useSelector((state) => state.bid);
  const { isOpen } = useSelector((state) => state.sidebar);
  useEffect(() => {
    dispatch(userDataApi());
  }, []);
  const logoutUser = () => {
    dispatch(logoutUserApi())
      .unwrap()
      .then(() => navigate("/login"));
  };
  return (
    <>
      <div className="p-5 sm:p-3 bg-white flex items-center justify-end sm:justify-between h-20 shrink-0 border-b">
        <div className="items-center gap-2 hidden sm:flex">
          <button
            onClick={() => dispatch(openSideBar())}
            className="p-1 rounded-md bg-black"
          >
            <Bars3Icon className="w-6 h-6 text-white" />
          </button>
          <div className="font-medium text-base">InvestingIQ</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs font-medium">{username}</div>
          <img
            src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"
            alt="profile"
            className="w-11 h-11 rounded-full object-contain"
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/30 z-50">
          <div className="w-2/3 h-screen bg-white shadow-md border-r p-5 flex flex-col gap-5">
            <button
              onClick={() => dispatch(closeSideBar())}
              className="font-medium p-1 bg-gray-200 rounded-md w-fit"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
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
        </div>
      )}
    </>
  );
};

export default NavBar;
