import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from "../slice/collectionSlice";

export default configureStore({
  reducer: {
    collection: collectionReducer,
  },
});
