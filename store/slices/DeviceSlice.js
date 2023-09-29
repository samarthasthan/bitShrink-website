import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  device: null,
};

export const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setDevice: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDevice } = deviceSlice.actions;

export default deviceSlice.reducer;
