import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const mobileSidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSideBar: (state) => {
      state.isOpen = true;
    },
    closeSideBar: (state) => {
      state.isOpen = false;
    },
  },
});

export default mobileSidebarSlice.reducer;
export const { openSideBar, closeSideBar } = mobileSidebarSlice.actions;
