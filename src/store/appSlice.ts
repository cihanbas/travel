import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coordinate: {
    latitude: 0,
    longtitude: 0,
  },
  image: null,
  rating: 0,
  title: "",
  description: "",
  list: [],
};

const appSlice = createSlice({
  name: "AppSlice",
  initialState: initialState,
  reducers: {
    setImageUrl: (state, action) => {
      state.image = action.payload;
    },
  },
});
export const { setImageUrl } = appSlice.actions;
export default appSlice.reducer;
