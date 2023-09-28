import { configureStore } from "@reduxjs/toolkit";
import deviceReducers from "./slices/DeviceSlice";
export const store = configureStore({
  reducer: {
    device: deviceReducers,
  },
});
