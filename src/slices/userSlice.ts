import { createSlice } from '@reduxjs/toolkit';

type UserState = {
  user: {
    id: string;
    name: string;
  };
};

const initialState: UserState = {
  user: {
    id: '',
    name: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { setUser } = userSlice.actions;
