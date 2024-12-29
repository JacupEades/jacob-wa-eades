import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessCode: null as string | null,
};

export const accessSlice = createSlice({
  name: "accessState",
  initialState,
  reducers: {
    updateAccessCode: (state, action) => {
      state.accessCode = action.payload;
    },
    resetAccessCode: (state) => {
      state.accessCode = null;
    },
  },
});

export const { updateAccessCode, resetAccessCode } = accessSlice.actions;

export default accessSlice.reducer;
