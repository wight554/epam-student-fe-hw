import { createSlice } from "@reduxjs/toolkit";

type State = {
  name: string;
};

const initialState = {
  name: "",
} as State;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserName: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const { getUserName } = userSlice.actions;
