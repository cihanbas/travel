import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  coordinate: {
    latitude: number;
    longitude: number;
  };
  image: null | string;
  rating: number;
  title: string;
  description: string;
  createdAt?: Date;
}
interface State {
  list: Item[];
  image: null | string;
}
const initialState: State = {
  image: null,
  list: [],
};

const appSlice = createSlice({
  name: "AppSlice",
  initialState: initialState,
  reducers: {
    setImageUrl: (state, action) => {
      state.image = action.payload;
    },
    addComment: (state, action: PayloadAction<Item>) => {
      state.list.push({ ...action.payload, createdAt: new Date() });
      state.image = null;
    },
  },
});
export const { setImageUrl, addComment } = appSlice.actions;
export default appSlice.reducer;
