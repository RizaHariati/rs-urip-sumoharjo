import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    dropMenu: false,
    adBlock: false,
  },
  reducers: {
    toggleDropMenu: (state) => {
      state.dropMenu = !state.dropMenu;
    },
    closeDropMenu: (state) => {
      state.dropMenu = false;
    },
    toggleAdBlock: (state) => {
      state.adBlock = !state.adBlock;
    },
    closeAdBlock: (state) => {
      state.adBlock = false;
    },
  },
});

export const { toggleAdBlock, closeAdBlock, toggleDropMenu, closeDropMenu } =
  layoutSlice.actions;
export default layoutSlice;
