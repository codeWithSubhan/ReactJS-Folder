import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlices";

export const store = configureStore({
  reducer: {
    users: userSlice,
  },
});
