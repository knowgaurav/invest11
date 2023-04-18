import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import AuthReducer from "../redux/features/authSlice";
import BidReducer from "../redux/features/bidSlice";
import SidebarReducer from "../redux/features/mobileSidebarSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    bid: BidReducer,
    sidebar: SidebarReducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
});
