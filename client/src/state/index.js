import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  admin: null,
  token: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.admin = action.payload.admin;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.admin = null;
      state.token = null;
    },

  },
});

export const { setLogin, setLogout } = globalSlice.actions;

export default globalSlice.reducer;