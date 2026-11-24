import { createSlice } from "@reduxjs/toolkit";

const savedToRead = localStorage.getItem("toRead");
const toReadInitialState = savedToRead ? JSON.parse(savedToRead) : [];

const toReadSlice = createSlice({
  name: "toRead",
  initialState: toReadInitialState,
  reducers: {
    addToRead: (state, action) => {
      const existedToRead = state.some(
        (book) => book.key === action.payload.key,
      );
      if (!existedToRead) {
        state.push({ ...action.payload, read: false, rating: 0, note: "" });
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
    setRating: (state, action) => {
      const book = state.find((book) => book.key === action.payload.key);
      if (book) {
        book.rating = action.payload.rating;
      }
    },
    setNote: (state, action) => {
      const book = state.find((book) => book.key === action.payload.key);
      if (book) {
        book.note = action.payload.note;
      }
    },
    clearReadList: () => {
      return [];
    },
  },
});
export const {
  addToRead,
  removeFromRead,
  toggleRead,
  setRating,
  setNote,
  clearReadList,
} = toReadSlice.actions;
export default toReadSlice.reducer;
