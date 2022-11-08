import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggin: false,
  user: null,
};

export const loginSlice = createSlice({
  name: "isLoggin",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setLoginTrue: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoggin = true;
    },
    setLoginFalse: (state) => {
      state.isLoggin = false;
    },
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setLoginTrue, setLoginFalse, setCurrentUser } =
  loginSlice.actions;

export const selectLogin = (state) => state.login.isLoggin;
export const selectCurrentUser = (state) => state.login.user;

export default loginSlice.reducer;
