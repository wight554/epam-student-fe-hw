import { createSlice } from "@reduxjs/toolkit";

type State = {
  user: {
    id: string;
    name: string;
  };
};

const initialState = {
  user: {
    id: "",
    name: "",
  },
} as State;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { setUser } = userSlice.actions;
