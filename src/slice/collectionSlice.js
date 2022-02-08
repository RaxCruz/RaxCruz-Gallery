import { createSlice } from "@reduxjs/toolkit";
import collectionData from "../collectionData/collectionData";
import AA from "../img/1.png";
export const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    title: "Welcome to Rax's Gallery",
    contents: [
      {
        image: AA,
        title: "Rax Cruz",
        link: "https://codepen.io/peter030910/pen/YzENjWB",
      },
    ],
  },
  reducers: {
    welcomeShow: (state) => {
      state.title = collectionData.welcomeShow.title;
      state.contents = collectionData.welcomeShow.contents;
    },
    tableShow: (state) => {
      state.title = collectionData.tableShow.title;
      state.contents = collectionData.tableShow.contents;
    },
    cardShow: (state) => {
      state.title = collectionData.cardShow.title;
      state.contents = collectionData.cardShow.contents;
    },
    heroShow: (state) => {
      state.title = collectionData.heroShow.title;
      state.contents = collectionData.heroShow.contents;
    },
    personalWebShow: (state) => {
      state.title = collectionData.personalWebShow.title;
      state.contents = collectionData.personalWebShow.contents;
    },
  },
});

export const { tableShow, cardShow, heroShow, personalWebShow, welcomeShow } =
  collectionSlice.actions;

export default collectionSlice.reducer;
