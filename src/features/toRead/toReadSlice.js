import { createSlice } from "@reduxjs/toolkit";

const toReadInitialState = [];

const toReadSlice = createSlice({
  name: "toRead",
  initialState: toReadInitialState,
  reducers: {
    addToRead: (state, action) => {
      const existedToRead = state.some(
        (book) => book.key === action.payload.key,
      );
      if (!existedToRead) {
        state.push({ ...action.payload, read: false });
      }
    },
    removeFromRead: (state, action) => {
      return state.filter((book) => book.key !== action.payload);
    },
    toggleRead: (state, action) => {
      const book = state.find((book) => book.key === action.payload);
      if (book) {
        book.read = !book.read;
      }
    },
    clearReadList: () => {
      return [];
    },
  },
});
export const { addToRead, removeFromRead, toggleRead, clearReadList } =
  toReadSlice.actions;
export default toReadSlice.reducer;
