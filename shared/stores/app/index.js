import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

const initialState = {
  name: 'Next App',
  description: 'Next App Description',
  logo: '',
  language: 'vi',
  languageFallback: 'en',
  cookieNotice: 'We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.',
};

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const actions = slice.actions;

// Selectors
export const selectors = {
  appSlt: createSelector(
    (state) => state.app,
    (app) => app,
  ),
};

export default slice.reducer;