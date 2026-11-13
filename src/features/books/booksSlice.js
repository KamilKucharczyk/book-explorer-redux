import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "../../redux/opreations";

const initialState = {
  books: [],
  totalResults: 0,
  loading: false,
  error: "",
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    clearBooks: (state) => {
      state.books = [];
      state.totalResults = 0;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.books = action.payload.books;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { clearBooks } = bookSlice.reducer;
export default bookSlice.reducer;
