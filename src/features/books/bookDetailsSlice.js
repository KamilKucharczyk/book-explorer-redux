import { createSlice } from "@reduxjs/toolkit";
import { fetchBookDetails } from "../../redux/opreations";

const initialState = {
  details: null,
  error: "",
  loading: false,
};

export const bookDetailsSlice = createSlice({
  name: "bookDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookDetails.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchBookDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.details = action.payload;
      })
      .addCase(fetchBookDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default bookDetailsSlice.reducer;
